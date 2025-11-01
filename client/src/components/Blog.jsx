import React from 'react';
import { CalendarIcon, ClockIcon, ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Generative AI Systems: Best Practices and Pitfalls",
      excerpt: "Learn how to design and deploy production-ready generative AI systems that can handle real-world workloads while maintaining quality and reliability.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Generative AI",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      tags: ["AI Engineering", "System Design", "Best Practices"]
    },
    {
      id: 2,
      title: "MLOps in Production: From Experiment to Enterprise Deployment",
      excerpt: "A comprehensive guide to implementing MLOps practices that ensure smooth transition from research experiments to stable production deployments.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "MLOps",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      tags: ["MLOps", "Deployment", "Kubernetes"]
    },
    {
      id: 3,
      title: "Optimizing PyTorch Models for Real-time Inference",
      excerpt: "Advanced techniques for reducing latency and improving throughput of PyTorch models in production environments.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Performance",
      readTime: "6 min read",
      date: "Nov 15, 2024",
      tags: ["PyTorch", "Optimization", "Inference"]
    },
    {
      id: 4,
      title: "The Business Impact of Machine Learning: Measuring ROI in AI Projects",
      excerpt: "How to quantify and communicate the business value of machine learning initiatives to stakeholders and decision-makers.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Business AI",
      readTime: "10 min read",
      date: "Oct 30, 2024",
      tags: ["ROI", "Business Strategy", "AI Value"]
    },
    {
      id: 5,
      title: "Building Robust Computer Vision Pipelines with Limited Data",
      excerpt: "Strategies for developing accurate computer vision models when labeled data is scarce or expensive to obtain.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Computer Vision",
      readTime: "9 min read",
      date: "Oct 18, 2024",
      tags: ["Computer Vision", "Data Augmentation", "Transfer Learning"]
    },
    {
      id: 6,
      title: "The Future of AI Engineering: Trends to Watch in 2024",
      excerpt: "Exploring emerging technologies and methodologies that are shaping the next generation of AI systems and applications.",
      image: "https://images.unsplash.com/photo-1677442135330-959009b222e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Industry Trends",
      readTime: "11 min read",
      date: "Oct 5, 2024",
      tags: ["Future Trends", "AI Research", "Innovation"]
    }
  ];

  const categories = [
    { name: "Generative AI", count: 8 },
    { name: "MLOps", count: 6 },
    { name: "Computer Vision", count: 5 },
    { name: "Business AI", count: 4 },
    { name: "Research", count: 3 },
    { name: "Tutorials", count: 7 }
  ];

  const popularTags = [
    "Machine Learning", "Deep Learning", "AI Engineering", "Python", 
    "PyTorch", "TensorFlow", "Data Science", "MLOps", "Deployment",
    "Best Practices", "Research", "Business Impact"
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI <span className="text-blue-600 dark:text-blue-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge, research, and practical insights from the frontier of artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Blog Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark hover:shadow-xl dark:hover:shadow-xl-dark transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden hover:transform hover:scale-105"
                >
                  {/* Blog Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <button className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                      Read Article
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                View All Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* About Blog */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                About This Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Practical insights, research findings, and technical deep-dives from my journey in AI and machine learning. 
                Focused on real-world applications and scalable solutions.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {category.name}
                    </span>
                    <span className="px-2 py-1 text-xs bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Get the latest AI insights and articles delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
                <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;