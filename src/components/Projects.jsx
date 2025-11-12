import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import de Framer Motion

const PortfolioProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Données des projets
  const allProjects = [
    {
      id: 1,
      category: "AI",
      title: "GigBooster – AI-Powered Fiverr Gig SEO Generator",
      description:
        "GigBooster is an AI-based platform that automatically generates SEO-optimized Fiverr service descriptions tailored to the user's expertise and freelance domain.",
      image: "p1.jpg",
      tags: ["Next.js", "Gemini", "Neon DB"],
      link: "#",
    },
    {
      id: 2,
      category: "Web Development",
      title: "Luxedrive – Luxury Car Rental Platform",
      description:
        "Luxedrive is a premium web app for booking luxury cars with a modern interface, customized reservation system, dynamic car management, and responsive design for optimal user experience.",
      image: "p2.jpg",
      tags: ["Next.js", "Tailwind CSS", "GraphQL"],
      link: "#",
    },
    {
      id: 3,
      category: "Finance",
      title: "FragranceAI – Personalized Fragrance Generator",
      description:
        "FragranceAI uses user inputs to generate personalized fragrance recommendations based on preferences, leveraging AI for unique results.",
      image: "p3.jpg",
      tags: ["Next.js", "Tailwind CSS", "Chart.js", "Firebase"],
      link: "#",
    },
    {
      id: 4,
      category: "Finance",
      title: "Trackify – Personal Finance Management App",
      description:
        "Trackify is an intuitive web app for tracking income, expenses, goals, and balances in real-time with interactive visualizations and a personalized dashboard.",
      image: "p4.jpg",
      tags: ["React", "Node.js", "MongoDB" , "Gemini"],
      link: "#",
    },
    {
      id: 5,
      category: "E-commerce",
      title: "Ethernal Scents – Perfume Store Landing Page",
      description:
        "Ethernal Scents is a landing page for a perfume store, providing a stylish and user-friendly interface for product exploration and purchases.",
      image: "p5.jpg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 6,
      category: "Web Development",
      title: "Data Pulse – Data Business Landing Page",
      description:
        "Data Pulse is a landing page for a business specializing in data analytics, offering services and solutions in an engaging format.",
      image: "p6.jpg",
      tags: ["React", "Bootstrap"],
      link: "#",
    },
  ];

  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 py-20 px-6 scroll-smooth"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-40 mb-20">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Alternance gauche-droite */}
              {index % 2 === 0 ? (
                <>
                  {/* Texte à gauche */}
                  <div className="flex flex-col justify-center">
                    <p className="text-slate-400 text-sm font-medium mb-3 uppercase tracking-wider">
                      {project.category}
                    </p>

                    <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image à droite */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image à gauche */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </div>

                  {/* Texte à droite */}
                  <div className="flex flex-col justify-center">
                    <p className="text-slate-400 text-sm font-medium mb-3 uppercase tracking-wider">
                      {project.category}
                    </p>

                    <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {!showAllProjects && allProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAllProjects(true)}
              className="px-10 py-4 bg-transparent border-2 border-slate-700 hover:border-purple-600 rounded-lg font-semibold text-white hover:bg-slate-900 transition-all duration-300 text-lg"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Back Button */}
        {showAllProjects && (
          <div className="text-center">
            <button
              onClick={() => setShowAllProjects(false)}
              className="px-10 py-4 bg-transparent border-2 border-slate-700 hover:border-purple-600 rounded-lg font-semibold text-white hover:bg-slate-900 transition-all duration-300 text-lg"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioProjects;
