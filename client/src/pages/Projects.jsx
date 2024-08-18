import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";
import ProjectsSection from "../components/ProjectsSection";
import { FixedHeading } from "../components/styledComponents";

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Projects = () => {
  const card = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  useEffect(() => {
    console.log("working");

    const scrollTriggerConfig = {
      trigger: card.current,
      pin: true,
      pinSpacing: true,
      start: "left-=120px left",
      scrub: 1,
      end: () => "+=2000",
    };

    // Create GSAP timeline
    const t1 = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    t1.addLabel("card1");
    t1.to(".card1", {
      xPercent: 0,
      opacity: 1,
    });

    t1.from(".card2", {
      xPercent: 75,
      opacity: 0,
    });

    t1.addLabel("card2");

    t1.to(
      ".card1",
      {
        scale: 0.95,
        xPercent: -0.5,
        opacity: 0.5,
      },
      "-=0.3"
    );

    t1.to(".card2", {
      xPercent: 0,
      opacity: 1,
    });

    t1.from(".card3", {
      xPercent: 75,
      opacity: 0,
    });

    t1.addLabel("card3");

    t1.to(
      ".card2",
      {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6,
      },
      "-=0.3"
    );

    t1.to(".card3", {
      xPercent: 0,
      opacity: 1,
    });

    // Cleanup scrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container flex justify-center items-center h-full">
      <div className="sticky r-0">
        <FixedHeading>Projects</FixedHeading>
      </div>
      <div className="cards" ref={card}>
        <ProjectsSection
          title="Project 1"
          text="Hello1"
          img="image1"
          className=" card card1"
          ref={card1Ref}
        />
        <ProjectsSection
          title="Project 2"
          text="Hello2"
          img="image1"
          className=" card card2"
          ref={card2Ref}
        />
        <ProjectsSection
          title="Project 3"
          text="Hello3"
          img="image1"
          className=" card card3"
          ref={card3Ref}
        />
      </div>
    </div>
  );
};

export default Projects;
