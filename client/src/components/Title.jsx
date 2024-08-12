import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export default function Title() {
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize SplitType
    const myText = new SplitType(textRef.current);

    // Animate using GSAP
    gsap.to(myText.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
      onStart: () => {
        // Add the style directly to trigger the transition
        myText.chars.forEach((char) => {
          char.style.transform = "translateY(115px)";
          char.style.transition = "transform 0.5s";
        });
      },
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className=" text-neutral-100 grid font-bold place-content-center z-10 uppercase text-6xl font-title [clip-path:polygon(0%_0%,100%_0%,100%_100% 0%_100%)] leading:4 "
    >
      Shubham.Kafle
    </h1>
  );
}
