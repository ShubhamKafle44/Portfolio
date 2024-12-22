import React from "react";
import ProjectSection from "../components/ProjectSection";

const Projects = () => {
  const projects = [
    {
      title: "Lane Detection Model",
      description:
        "Developed a lane detection model using Hough Transform and OpenCV, enhancing accuracy and reliability of lane tracking for autonomous driving. Enhanced the model through Python and Computer Vision for robust detection performance in lane markings.",
      image: "/images/LANE_DETECTION.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      github: "https://github.com/ShubhamKafle44/finding-lanes",
    },
    {
      title: "Image Classification Model",
      description:
        "Developed a machine learning model for image classification using TensorFlow and Python. Improved model performance with Gradient Descent optimization techniques and robust preprocessing with Keras and NumPy, including normalization and data augmentation.",
      image: "/images/IMAGE_CLASSIFICATION.jpg",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
      github:
        "https://colab.research.google.com/drive/1gPODV3pIS2ShRzlF5_mNufKdt2RWtvxN?usp=sharing",
    },
    {
      title: "Multi-Player Chess Game",
      description:
        "Created a multi-player chess game with WebSockets for real-time interaction. Integrated Minimax algorithm with Alpha-Beta Pruning for optimal move selection. Designed and implemented a back-end database schema using Postgres for efficient data management, real-time updates, and historical analysis.",
      image: "/images/CHESS.jpg",
      technologies: [
        "JavaScript",
        "WebSockets",
        "PostgreSQL",
        "Alpha-Beta Pruning",
      ],
      github: "https://github.com/ShubhamKafle44/chess-web",
    },
    {
      title: "Content Generator & Sentiment Analysis API",
      description:
        "Developed an API-powered content generator using OpenAI's API to create content and analyze its sentiment. Implemented semaphore concepts with Python's ThreadPool for optimized API access control. Integrated CRUD operations using SQLAlchemy and PostgreSQL for robust backend functionality.",
      image: "/images/CONTENT_GENERATOR.jpg",
      technologies: [
        "FastAPI",
        "OpenAI API",
        "Python",
        "SQLAlchemy",
        "PostgreSQL",
      ],
      github: "https://github.com/ShubhamKafle44/translator",
    },
    {
      title: "Personal Website",
      description:
        "Developed a progressive web application using React.js and the GSAP animation library for advanced animations. Deployed the application with CI/CD pipelines using GitHub Actions and Cloudflare, automating builds and deployments for streamlined updates.",
      image: "/images/THREEJS.png",
      technologies: [
        "React.js",
        "Three.js",
        "GSAP",
        "GitHub Actions",
        "Cloudflare",
      ],
      github: "https://github.com/ShubhamKafle44/Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">My Projects</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Explore my latest work and side projects. Each project represents a
          unique challenge and demonstrates different aspects of my technical
          skills.
        </p>
        <ProjectSection projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
