import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const skillsRef = useRef(null);
  const barsRef = useRef([]);

  const skills = [
    { name: "FastAPI", level: 90 },
    { name: "AWS", level: 75 },
    { name: "Django", level: 80 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 75 },

    { name: "JavaScript", level: 80 },
    { name: "Python", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "MongoDB", level: 75 },
  ];

  useEffect(() => {
    const bars = barsRef.current;

    // Initial setup
    gsap.set(bars, { width: 0 });
    gsap.set(skillsRef.current.children, { opacity: 0, y: 30 });

    // Animate skills title and description
    gsap.to(skillsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });

    // Animate skill bars
    bars.forEach((bar, index) => {
      gsap.to(bar, {
        width: `${skills[index].level}%`,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div ref={skillsRef} className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I've worked with a variety of technologies and frameworks, constantly
          learning and improving my skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-white">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                ref={(el) => (barsRef.current[index] = el)}
                className="h-full bg-purple-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
