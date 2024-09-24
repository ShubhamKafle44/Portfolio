// About.js
import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">About Me</h1>
      </header>
      <section className="space-y-4">
        <p className="text-lg">
          Hello! My name is Shubham Kafle, and I am a computer science student
          with a passion for technology and programming. I am dedicated to
          developing innovative solutions and enhancing user experiences through
          my projects.
        </p>
        <p className="text-lg">
          I have experience in various programming languages and frameworks,
          including Python, JavaScript, and React. My projects include a lane
          detection model, an image classification model, and a multi-player
          chess engine.
        </p>
      </section>
      <footer className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shubham Kafle
        </p>
      </footer>
    </div>
  );
};

export default About;
