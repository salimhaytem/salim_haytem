import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import de Framer Motion

const PortfolioProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Données des projets
  const allProjects = [
    {
  id: 11,
  category: "Web App",
  title: "HR Manager Pro – Plateforme de Ressource Humaine",
  description:
    "HRMaster est une application web professionnelle de gestion des ressources humaines incluant la gestion des employés, départements, demandes de congés avec validation, suivi de présence, fiches de paie, dashboards RH et employé, ainsi qu’un chatbot intelligent basé sur Ollama.",
  image: "p14.jpg",
  tags: ["Django", "JavaScript" ,"Tailwind CSS", "MySQL", "XAMPP", "Ollama"],
  link: "#",
},
{
    id: 7,
    category: "Web app ",
    title: "EduMatch – Plateforme IA de mise en relation étudiant-tuteur",
    description:
      "EduMatch est une plateforme web permettant aux étudiants de trouver des tuteurs en fonction de leurs matières, disponibilités et évaluations, avec un système de chat en temps réel et un calendrier intégré.",
    image: "p7.jpg",
    tags: ["Next.js", "Node.js", "Express.js", "Tailwind", "MongoDB"],
    link: "#",
  },
  {
  id: 1,
  category: "web app ",
  title: "CharityPlus – Plateforme de Don Caritatif en Ligne",
  description:
    "CharityPlus est une solution web complète de collecte de dons avec paiements sécurisés via Stripe, gestion et suivi des donateurs, gamification (badges et points de contribution), tableau de bord d’analyse avancée et interface moderne pour faciliter l’engagement caritatif.",
  image: "p10.jpg",
  tags: ["Spring Boot", "Stripe", "JPA", "Thymeleaf", "Bootstrap"],
  link: "#",
},
 {
  id: 11,
  category: "Data",
  title: "Fertilizer ETL – Dashboard Interactif",
  description:
    "Projet ETL pour l'analyse des données de fertilisants : extraction depuis CSV, transformation (coûts par tonne, coûts totaux) et visualisation via un dashboard interactif avec filtres temps réel et export CSV.",
  image: "p11.jpg",
  tags: ["Python", "Flask", "Pandas", "Chart.js", "Tailwind CSS", "Streamlit", "CSV", "ETL"],
  link: "#",
},
{
  id: 12,
  category: "AI / Machine Learning",
  title: "Diabetes Detector – Machine Learning Prediction App",
  description:
    "Application d'analyse médicale basée sur le Machine Learning permettant de prédire le risque de diabète à partir de données cliniques. Entraînée sur un dataset Kaggle avec visualisations, preprocessing avancé et évaluation du modèle.",
  image: "p12.jpg",
  tags: ["Python", "Scikit-Learn", "Pandas", "Flask", "Machine Learning", "Kaggle"],
  link: "#",
},
{
  id: 13,
  category: "AI / Machine Learning",
  title: "Heart Disease Prediction – Advanced ML Analysis & Web App",
  description:
    "Application de prédiction de maladies cardiaques basée sur plusieurs modèles de Machine Learning, avec preprocessing avancé, analyse exploratoire, comparaison des performances et interfaces web Streamlit & Flask.",
  image: "p13.jpg",
  tags: ["Python", "Scikit-Learn", "Flask", "Streamlit", "Pandas", "Machine Learning", "EDA"],
  link: "#",
},
{
  "id": 13,
  "category": "AI / Chatbot",
  "title": "RAG Chatbot – Assistant de Connaissances Local avec Ollama",
  "description": "Ce projet implémente un chatbot basé sur l'architecture RAG (Retrieval-Augmented Generation) qui permet de répondre à des questions en se basant sur des documents locaux.",
  "image": "p16.jpg",
  "tags": [
    "Python",
    "LangChain",
    "Ollama",
    "Chroma",
  ],
  "link": "#"
},
{
  id: 12,
  category: "Mobile App",
  title: "Smart Presence – Application Mobile de Gestion de Présence",
  description:
    "Smart Presence est une application mobile complète développée pour moderniser et automatiser le suivi des présences dans les établissements scolaires. ",
  image: "p15.jpg",
  tags: [
    "Java", "XML UI","SQLite","Firebase","Google Maps API","Gemini AI",],
  link: "#",
},{
      id: 10,
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
