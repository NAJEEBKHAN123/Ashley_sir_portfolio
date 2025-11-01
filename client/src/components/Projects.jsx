// Projects.jsx
import React from 'react';
import { EyeIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automated Voice Agent Platform",
      description: "Built a generative AI voice agent system that reduced customer service costs by 40% while improving satisfaction scores.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "PyTorch", "NLP", "AWS"],
      results: "40% cost reduction, 95% accuracy",
      category: "Generative AI",
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Computer Vision Quality Control",
      description: "Developed a real-time defect detection system for manufacturing that improved product quality by 25% and reduced inspection time by 60%.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "OpenCV", "TensorFlow", "Docker"],
      results: "25% quality improvement, 60% faster inspection",
      category: "Computer Vision",
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Created a big data analytics platform processing 1TB+ daily data, providing real-time business insights and predicting market trends with 89% accuracy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "Spark", "Kubernetes", "React"],
      results: "89% prediction accuracy, Real-time analytics",
      category: "Big Data",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering innovative AI solutions with measurable business impact across 50+ successful projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark hover:shadow-xl dark:hover:shadow-xl-dark transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    📈 {project.results}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                    <EyeIcon className="w-4 h-4 mr-2" />
                    View Demo
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200">
                    <CodeBracketIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start your next AI project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can leverage AI to solve your business challenges and drive growth.
            </p>
            <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start a Conversation
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;