import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import Button from "./Button"; // Ensure this path is correct
import Brain from "./components/Brain/Brain"; // Ensure this path is correct
import Title from "./components/Title"; // Ensure this path is correct
export default function App() {
  const comp = useRef(null);
  const [showHomePage, setshowHomePage] = useState(false); // State to control the rendering of Title

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => setshowHomePage(true), // Set showHomePage to true after animation completes
      });

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#title", {
          opacity: 0,
          y: "+=30",
        })
        .to("#title", {
          y: "-=30",
          opacity: 0,
          delay: 0.3,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.3,
          delay: 0.3,
        })
        .from("#home-screen", {
          opacity: 0,
          yPercent: "-100",
          duration: 0.3,
          delay: 0.3,
        })
        .to("home-screen", {
          opacity: 1,
          duration: 0.4,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute h-screen w-screen " ref={comp}>
      <div className="h-full w-full relative">
        <div
          id="intro-slider"
          className="h-full w-full fixed top-0 left-0 z-10 flex justify-center items-center bg-white"
        >
          <h1 id="title">Welcome.</h1>
        </div>

        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          id="home-screen"
        >
          <Brain />
        </div>

        {showHomePage && (
          <>
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Title />
            </div>
            <div className="absolute z-10 top-2 left-3/4 flex juistify-center">
              <Button text="Resume" />
              <Button text="Projects" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
