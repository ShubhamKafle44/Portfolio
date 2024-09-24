import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";
import ProjectsSection from "../components/ProjectsSection";
import { FixedHeading } from "../components/styledComponents";
import LANE_DETECTION from "../../public/images/LANE_DETECTION.jpg";
import CHESS from "../../public/images/CHESS.jpg";
import IMAGE_CLASSIFICATION from "../../public/images/IMAGE_CLASSIFICATION.jpg";

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
    t1.from(".card1", {
      xPercent: 75,
      opacity: 1,
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
        opacity: 0.15,
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
        opacity: 0.15,
      },
      "-=0.3"
    );

    t1.to(".card3", {
      xPercent: 0,
      opacity: 1,
    });
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
      <div className="cards flex" ref={card}>
        <ProjectsSection
          title="Lane Detection"
          text="Created a lane detection model using Hough Transform and OpenCV for autonomous vehicle tracking"
          image={LANE_DETECTION}
          className=" card card1"
          ref={card1Ref}
        />
        <ProjectsSection
          title="Image Classification Model"
          text="Developed an image classification model with TensorFlow to optimize performance and accuracy."
          image={IMAGE_CLASSIFICATION}
          className=" card card2"
          ref={card2Ref}
        />
        <ProjectsSection
          title="Multi-player Chess Engine:"
          text="Built a multi-player chess engine in Python using Minimax and a relational database for efficient data management"
          image={CHESS}
          className=" card card3"
          ref={card3Ref}
        />
      </div>
    </div>
  );
};

export default Projects;
