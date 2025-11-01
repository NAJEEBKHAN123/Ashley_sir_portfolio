import React from 'react';
import { CalendarIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Machine Learning Engineer",
      company: "TechInnovate AI",
      period: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      achievements: [
        "Led development of generative AI voice agents that reduced operational costs by 40% for enterprise clients",
        "Architectured computer vision systems achieving 99.2% accuracy in real-time quality control",
        "Mentored 3 junior engineers and established MLops practices across the organization",
        "Delivered 15+ projects with average ROI improvement of 25%"
      ],
      tech: ["Python", "PyTorch", "TensorFlow", "AWS", "Docker", "Kubernetes"],
      category: "Generative AI"
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "DataDriven Solutions",
      period: "2021 - 2022",
      location: "Austin, TX",
      type: "Full-time",
      achievements: [
        "Developed predictive analytics models processing 1TB+ daily data with 89% accuracy",
        "Implemented automated ML pipelines reducing model deployment time from 2 weeks to 2 days",
        "Collaborated with cross-functional teams to deliver 12 client projects on schedule",
        "Optimized Spark workflows achieving 60% faster data processing"
      ],
      tech: ["Python", "Spark", "Scikit-learn", "Pandas", "MLflow"],
      category: "Big Data Analytics"
    },
    {
      id: 3,
      title: "Junior ML Engineer",
      company: "AI Startup Labs",
      period: "2020 - 2021",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Built and deployed first production ML model serving 10,000+ daily predictions",
        "Created data preprocessing pipelines improving model accuracy by 15%",
        "Participated in end-to-end project lifecycle from research to deployment",
        "Contributed to open-source ML libraries and documentation"
      ],
      tech: ["Python", "TensorFlow", "FastAPI", "MySQL", "Git"],
      category: "Traditional ML"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            3+ years of delivering impactful AI solutions across startups and enterprise environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft dark:shadow-soft-dark hover:shadow-lg dark:hover:shadow-lg-dark transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mt-1">
                          <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                          {exp.company}
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                        {exp.category}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="text-gray-500 dark:text-gray-500">
                        {exp.type}
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Progress Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20%</div>
            <div className="text-gray-600 dark:text-gray-400">Avg. ROI Improvement</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;