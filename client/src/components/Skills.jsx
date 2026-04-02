import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ─── Add to index.html ────────────────────────────────────────────────────────
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">

const CATEGORIES = [
  {
    label: "Languages",
    icon: "{ }",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.18)",
    skills: [
      { name: "Python", level: 95 },
      { name: "C#", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 70 },
      { name: "Java", level: 70 },
    ],
  },
  {
    label: "Frameworks",
    icon: "</>",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.18)",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: "React", level: 85 },
      { name: "Blazor", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Django", level: 75 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    label: "Databases",
    icon: "⬡",
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 75 },
      { name: "DynamoDB", level: 70 },
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: "↑",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.18)",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "GitHub Actions", level: 75 },
      { name: "Jenkins", level: 70 },
      { name: "Cloudflare", level: 70 },
    ],
  },
  {
    label: "Tools",
    icon: "⚙",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.18)",
    skills: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Syncfusion", level: 75 },
      { name: "Railway", level: 70 },
    ],
  },
];

/* ── Single skill row ── */
const SkillRow = ({ skill, color, glow, delay }) => {
  const barRef = useRef(null);
  const rowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left" });
    gsap.set(rowRef.current, { opacity: 0, x: -12 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rowRef.current,
        start: "top bottom-=60",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(rowRef.current, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", delay })
      .to(barRef.current, {
        scaleX: skill.level / 100,
        duration: 1.1,
        ease: "expo.out",
      }, "-=0.1");
  }, [skill.level, delay]);

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "10px 14px",
        borderRadius: "4px",
        background: hovered ? `${glow}` : "transparent",
        border: `1px solid ${hovered ? color + "44" : "transparent"}`,
        transition: "background 0.25s, border-color 0.25s",
        cursor: "default",
      }}
    >
      {/* Name */}
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.78rem",
          color: hovered ? "#f8fafc" : "#94a3b8",
          transition: "color 0.2s",
          minWidth: "130px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          letterSpacing: "0.02em",
        }}
      >
        {skill.name}
      </span>

      {/* Bar track */}
      <div
        style={{
          flex: 1,
          height: "3px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "2px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          ref={barRef}
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: "2px",
            boxShadow: hovered ? `0 0 8px ${color}88` : "none",
            transition: "box-shadow 0.25s",
          }}
        />
      </div>

      {/* Percent */}
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          color: color,
          minWidth: "32px",
          textAlign: "right",
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.2s",
        }}
      >
        {skill.level}
      </span>
    </div>
  );
};

/* ── Category panel ── */
const CategoryPanel = ({ cat, panelIndex }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 20 });
    gsap.to(headerRef.current, {
      opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top bottom-=80",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      style={{
        background: "rgba(15,23,42,0.6)",
        border: "1px solid rgba(51,65,85,0.7)",
        borderRadius: "6px",
        padding: "1.75rem",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: "absolute",
        top: 0, left: 0,
        width: "120px", height: "120px",
        background: `radial-gradient(circle at top left, ${cat.glow}, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div ref={headerRef} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1rem",
            color: cat.color,
            background: `${cat.color}15`,
            border: `1px solid ${cat.color}44`,
            borderRadius: "4px",
            padding: "4px 10px",
            lineHeight: 1,
          }}
        >
          {cat.icon}
        </span>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            color: "#f8fafc",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {cat.label}
        </h3>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            color: "#475569",
            letterSpacing: "0.06em",
          }}
        >
          {cat.skills.length} skills
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: `linear-gradient(90deg, ${cat.color}44, transparent)`, marginBottom: "1rem" }} />

      {/* Skills */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {cat.skills.map((skill, i) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            color={cat.color}
            glow={cat.glow}
            delay={i * 0.04}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main Skills component ── */
const Skills = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current.children, { opacity: 0, y: 30 });
    gsap.to(titleRef.current.children, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Title block */}
      <div ref={titleRef} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#22d3ee",
            marginBottom: "0.75rem",
          }}
        >
          Technical Proficiency
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            color: "#f8fafc",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Skills &amp; Stack
        </h2>
        <p
          style={{
            color: "#64748b",
            maxWidth: "480px",
            margin: "0 auto",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          A snapshot of the languages, frameworks, and tools I reach for — built
          through real projects, not just tutorials.
        </p>
      </div>

      {/* Category grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <CategoryPanel key={cat.label} cat={cat} panelIndex={i} />
        ))}
      </div>
    </div>
  );
};

export default Skills;