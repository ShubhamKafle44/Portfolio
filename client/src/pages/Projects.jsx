import React from "react";
import ProjectSection from "../components/ProjectSection";
import Navigation from "../components/Navigation";
const Projects = () => {
  const projects = [
    {
      title: "WalkMap – Walk Tracking App",
      description:
        "Enabled users to record, save, and manage GPS routes efficiently through an ASP.NET Core REST API with JWT and BCrypt authentication. Implemented server-side distance tracking using the Haversine formula and a route suggester generating circular paths based on user-specified distances. Designed a SQL Server database with EF Core code-first migrations, linking users, walks, and GPS points with foreign keys and timestamps.",
      image: "/images/WALKMAP.png",
      technologies: [
        "ASP.NET Core",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "BCrypt",
      ],
      github: "https://github.com/ShubhamKafle44/WalkMap",
    },
    {
      title: "Employee Management System",
      description:
        "Developed a full-stack HR app with three user roles (Admin, User, Employee) using ASP.NET Web API and Blazor WebAssembly, ensuring role-based access control. Implemented JWT-based authentication and designed an EF Core code-first database covering employees, departments, branches, and locations. Added HR management features such as vacation, sick leave, and overtime tracking, with a Syncfusion calendar for viewing employee schedules.",
      image: "/images/EMPLOYEE_MANAGEMENT_SYSTEM.jpg",
      technologies: [
        "ASP.NET Core",
        "C#",
        "Blazor",
        "Entity Framework Core",
        "Syncfusion",
        "JWT",
      ],
      github: "https://github.com/ShubhamKafle44/EmployeeManagementSystem",
    },
    {
      title: "AI Video Sentiment Analysis SaaS",
      description:
        "Enabled users to analyze sentiment and emotion in videos using a multimodal deep learning model combining text, audio, and visual features. Trained and deployed the PyTorch model on AWS SageMaker for scalable inference, storing videos in S3 and serving them via the backend. Built a responsive frontend with Next.js, React, and Tailwind CSS, allowing users to upload videos and view results instantly.",
      image: "/images/SENTIMENT.png",
      technologies: [
        "PyTorch",
        "AWS SageMaker",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "S3",
      ],
      github: "https://github.com/ShubhamKafle44/AI-Video-Sentiment",
    },
    {
      title: "Mastercard Hackathon: Inclusive Growth Prediction",
      description:
        "Developed a Random Forest model to predict Inclusive Growth Scores, identifying key economic and social mobility drivers in Nashville neighborhoods. Leveraged machine learning and correlation analysis to provide actionable insights for entrepreneurship and community development, achieving R-squared values above 0.85.",
      image: "/images/Hackathon.png",
      technologies: [
        "Python",
        "Machine Learning",
        "Random Forest",
        "Data Analysis",
      ],
      github: "https://github.com/ShubhamKafle44/hackathon",
    },
    {
      title: "Social Media App for Developers",
      description:
        "Built a MERN stack social platform enabling developers to connect, share posts, and engage in discussions. Integrated GitHub API to showcase user repositories and implemented secure JWT authentication with role-based access control to enhance collaboration and data integrity.",
      image: "/images/DEV_SOCIAL_APP.png",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "GitHub API",
      ],
      github: "https://github.com/ShubhamKafle44/DeveloperConnect",
    },
    {
      title: "AI-Powered Coffee Shop Chatbot",
      description:
        "Developed an AI chatbot that reduced manual customer queries by 70%, streamlining coffee shop operations. Deployed LLMs on RunPod to optimize response times under 2 seconds while reducing inference costs by 25%. Built a React Native mobile app integrated with Firebase and RunPod APIs for real-time chatbot interaction.",
      image: "/images/COFFEE_CHATBOT.jpg",
      technologies: ["Python", "React Native", "RunPod", "Firebase", "LLM"],
      github: "https://github.com/ShubhamKafle44/LLM_CHATBOT",
    },
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
      {/* Navigation Tab */}
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">My Projects</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Explore my latest work and side projects. Each project represents a
          unique challenge and demonstrates different aspects of my technical
          skills.
        </p>

        {/* Projects Section */}
        <ProjectSection projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
