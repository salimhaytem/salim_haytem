import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-32 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Animation du titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* Animation du texte */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          I'm <span className="font-semibold">Salim Haytem</span>, a 5th year engineering student at{" "}
          <span className="font-semibold">EMSI Casablanca</span> and a software developer passionate 
          about building intuitive and efficient web applications. With a strong foundation in both 
          front-end and back-end technologies, I've developed projects like a financial dashboard, 
          an AI-powered gig generator, and a luxury car rental platform. I'm always learning, adapting, 
          and looking to create impactful digital experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
