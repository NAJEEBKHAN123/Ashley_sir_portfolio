import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, PlayIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Senior Machine Learning Engineer",
    "Generative AI Specialist",
    "Big Data Analytics Expert",
    "AI Solutions Architect",
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Machine Learning Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
        }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Main Heading */}
            <div className="space-y-6 mt-16">
              <h1 className="text-4xl md:text-5xl flex  font-bold text-white leading-tight">
                Ashley Alex
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                  Jacob
                </span>
              </h1>

              {/* Animated Role Text */}
              <div className="h-16 flex items-center">
                <div className="relative">
                  <div className="text-xl md:text-2xl font-semibold text-white/90">
                    <span className="inline-block min-w-[320px]">
                      {roles[currentRole]}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Transforming complex data into intelligent solutions.
              <span className="font-semibold text-blue-200"> 3+ years</span> of
              expertise in
              <span className="font-semibold text-cyan-200">
                {" "}
                Generative AI
              </span>
              ,
              <span className="font-semibold text-purple-200">
                {" "}
                Machine Learning
              </span>
              , and
              <span className="font-semibold text-green-200">
                {" "}
                Big Data Analytics
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleContact}
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Hire Me
                  <PlayIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center">
                  View Projects
                  <ArrowDownTrayIcon className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
