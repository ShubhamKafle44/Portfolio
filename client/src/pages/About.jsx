import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "../components/Skills";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const RESUME_URL = "https://drive.google.com/file/d/1u6Hofc6yloeRQjRsWit0cELaG_uMF_PW/view?usp=sharing"
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(textRef.current.children, { opacity: 0, y: 50 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(".highlight-1, .highlight-2, .highlight-3", {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(".social-links", { opacity: 0, y: 30 });

      // Create a timeline for better control
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      // Add animations to timeline
      tl.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          ".highlight-1",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .to(
          ".highlight-2",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          ".highlight-3",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          ".social-links",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );

      // Add floating animation to profile image
      gsap.to(imageRef.current, {
        y: 15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:shubhamkafle44@gmail.com";
  };

  const handleDownload = () => {
    const resumeUrl = RESUME_URL
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          ref={aboutRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div ref={textRef} className="space-y-6">
            <h1 className="text-5xl font-bold text-white">About Me</h1>
            <p className="text-xl text-gray-400 font-bold">
              Hi, I'm Shubham Kafle! I simplify tech to create smart, efficient
              solutions. Let's make things work better, faster, and
              cooler—together.
            </p>
            <p className="text-gray-400">
              A driven computer science student at Fisk University, coding his
              way through the world of web development and data science with a
              passion for innovative problem-solving.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-white"
              >
                Download CV
              </button>
              <button
                onClick={handleContact}
                className="px-6 py-3 border border-purple-600 text-purple-600 hover:bg-purple-600/10 rounded-lg transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div
            ref={imageRef}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </div>

              <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-gray-900">
                <img
                  src="/images/PROFILE.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="highlight-1 absolute -top-4 -right-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                <span className="text-purple-500 font-semibold">
                  Backend Developer
                </span>
              </div>

              <div className="highlight-2 absolute -bottom-4 -left-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                <span className="text-blue-500 font-semibold">
                  Machine learning Enthusiast
                </span>
              </div>

              <div className="highlight-3 absolute top-1/2 -right-20 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                <span className="text-pink-500 font-semibold">
                  Tech Enthusiast
                </span>
              </div>

              <div className="social-links absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-6">
                <a
                  href="mailto:shubhamkafle44@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-gray-700/90 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-white">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shubhamkafle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-gray-700/90 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span className="text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
