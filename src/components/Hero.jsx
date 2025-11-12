import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import { FaDownload } from "react-icons/fa";
import myImage from "../assets/moi.png";
import cvFile from "../assets/CV_Salim_Haytem.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#05050A] to-[#0B0F19] text-white min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 scroll-smooth"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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

        {/* === Image non animée === */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={myImage}
              alt="Salim Haytem"
              className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
