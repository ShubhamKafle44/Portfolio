import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Button from "./Button"; // Ensure this path is correct
import Brain from "./components/Brain/Brain"; // Ensure this path is correct
import Title from "./components/Title"; // Ensure this path is correct

export default function App() {
  // const comp = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from("#intro-slider", {
  //       xPercent: "-100",
  //       duration: 1.3,
  //       delay: 0.3,
  //     })
  //       .from("#title", {
  //         opacity: 0,
  //         y: "+=30",
  //       })
  //       .to("#title", {
  //         y: "-=30",
  //         opacity: 0,
  //         delay: 0.3,
  //       })
  //       .to("#intro-slider", {
  //         xPercent: "-100",
  //         duration: 0.3,
  //         delay: 0.3,
  //       })
  //       .from("#welcome", {
  //         opacity: 0,
  //         duration: 0.5,
  //       });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="h-full w-full">
      {/* <div
        id="intro-slider"
        className="h-full w-full fixed top-0 left-0 z-10 flex justify-center items-center bg-white"
      >
        <h1 id="title">Welcome.</h1>
      </div> */}
      <div id="welcome" className="relative">
        <Brain />
        <div className="absolute text-slate-100 top-0 left-0 w-full h-full flex justify-center items-center z-1">
          <Title />
          <Button />
        </div>
      </div>
    </div>
  );
}
