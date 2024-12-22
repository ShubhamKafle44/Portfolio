import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = ({ projects }) => {
  return (
    <div className="grid gap-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    const imageEl = imageRef.current;
    const contentEl = contentRef.current;

    // Initial state
    gsap.set(cardEl, { opacity: 0, y: 100 });
    gsap.set(imageEl, { scale: 0.8 });
    gsap.set(contentEl, { opacity: 0, x: -50 });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardEl,
        start: "top center+=100",
        end: "top center-=100",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(cardEl, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        imageEl,
        {
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        contentEl,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300`}
    >
      <div
        ref={imageRef}
        className="w-full md:w-1/2 relative overflow-hidden group"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div ref={contentRef} className="w-full md:w-1/2 p-8">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
