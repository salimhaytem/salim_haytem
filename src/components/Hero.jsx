import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import myImage from "../assets/moi.jpeg";
import cvFile from "../assets/CV_Salim_Haytem.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#05050A] to-[#0B0F19] text-white min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 scroll-smooth overflow-hidden"
    >
      {/* === SPOTLIGHTS - Effets de lumière === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Spotlight gauche haut - bleu */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        {/* Spotlight gauche milieu - indigo */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl"></div>
        
        {/* Spotlight droite haut - cyan */}
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        {/* Spotlight droite bas - indigo/purple */}
        <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-3xl"></div>
        
        {/* Spotlight centre - subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* === CONTENU PRINCIPAL === */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* === Texte animé === */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hey! I'm <span className="text-indigo-400">Salim Haytem</span>
          </h1>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I Design the Future!
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I'm a passionate and dedicated Software Engineer & AI Enthusiast
            with a love for turning ideas into impactful solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href={cvFile}
              download
              className="bg-transparent border-2 border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition-all duration-300"
            >
              <FaDownload className="text-lg" /> Download Resume
            </a>
            <p className="text-gray-400 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for Work
            </p>
          </motion.div>
        </motion.div>

        {/* === Image avec spotlight autour === */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow derrière l'image */}
            <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-2xl scale-105"></div>
            
            <img
              src={myImage}
              alt="Salim Haytem"
              className="relative rounded-3xl shadow-2xl w-[380px] h-[480px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;