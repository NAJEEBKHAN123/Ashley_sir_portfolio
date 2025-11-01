import React from 'react';
import { CheckBadgeIcon, CodeBracketIcon, ServerIcon, CloudIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "Computer Vision", level: 87 },
        { name: "Natural Language Processing", level: 85 },
        { name: "Generative AI", level: 92 },
        { name: "Deep Learning", level: 89 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <ServerIcon className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 93 },
        { name: "NumPy", level: 91 },
        { name: "Spark", level: 82 },
        { name: "SQL", level: 88 },
        { name: "Data Visualization", level: 85 },
        { name: "Big Data Analytics", level: 84 },
        { name: "ETL Pipelines", level: 83 },
        { name: "Statistical Analysis", level: 86 }
      ]
    },
    {
      title: "MLOps & Deployment",
      icon: <CloudIcon className="h-6 w-6" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "AWS", level: 82 },
        { name: "MLflow", level: 83 },
        { name: "FastAPI", level: 81 },
        { name: "CI/CD", level: 79 },
        { name: "Model Deployment", level: 87 },
        { name: "Monitoring", level: 78 }
      ]
    }
  ];

  const techStack = [
    { name: "Python", category: "Language" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "Scikit-learn", category: "ML Library" },
    { name: "Pandas", category: "Data Analysis" },
    { name: "NumPy", category: "Scientific Computing" },
    { name: "Spark", category: "Big Data" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "AWS", category: "Cloud" },
    { name: "FastAPI", category: "Backend" },
    { name: "MLflow", category: "MLOps" }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mastering the tools and technologies that power intelligent solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-soft dark:shadow-soft-dark hover:shadow-lg dark:hover:shadow-lg-dark transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-cyan-600"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Complete Technology Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive toolkit for end-to-end AI solution development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-soft dark:shadow-soft-dark hover:shadow-lg dark:hover:shadow-lg-dark transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:transform hover:scale-105"
              >
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <CheckBadgeIcon className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">20%</div>
            <div className="text-gray-600 dark:text-gray-400">Average ROI</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;