import React from "react";
import { Linkedin, Github, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-950 text-white py-32 px-8 scroll-smooth"
    >
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to take <span className="text-gray-500">your digital</span>
            <br />
            <span className="text-gray-500">presence to the next level?</span>
          </h2>

          <a
            href="mailto:salimhaytem.11@gmail.com?subject=Contact%20depuis%20le%20portfolio&body=Bonjour%20Salim,"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-600 rounded-full text-lg font-medium hover:border-white hover:bg-white hover:text-gray-950 transition-all duration-300"
          >
            Let's get in touch
            <Send size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-gray-800">
          {/* Copyright */}
          <p className="text-gray-400 text-lg">
            © 2025 Salim Haytem. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/haytem-salim-b54736339/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-gray-900 border-2 border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/salimhaytem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-gray-900 border-2 border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/salim_haytem?igsh=MTM1bzllY3NwaDQycQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-gray-900 border-2 border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
