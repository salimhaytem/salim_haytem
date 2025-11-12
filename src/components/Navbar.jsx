import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false); // cachée au départ
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    // si l'utilisateur descend -> cacher
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } 
    // si l'utilisateur monte -> afficher
    else if (window.scrollY < lastScrollY && window.scrollY > 100) {
      setShow(true);
    } 
    // si on est tout en haut -> cacher
    else if (window.scrollY <= 100) {
      setShow(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 
      bg-[#010318]/90 backdrop-blur-xl text-white px-10 py-4 rounded-2xl border border-gray-800 shadow-lg 
      transition-all duration-500 z-50
      ${show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
    >
      <ul className="flex gap-8 text-lg font-medium">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
