import React, { useState, useEffect } from "react";
import { Sun, Moon, FileDown, Send, ArrowUp, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function PageActions() {
  const { darkMode, toggleTheme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed Action Buttons */}
      <div className="fixed top-36 right-5 z-50 flex flex-col items-center gap-4">
        <motion.button
          onClick={toggleTheme}
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        <motion.a
          href="/Resume.pdf"
          download="Ravichandra_Vajinepalli_Resume.pdf"
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.95 }}
          title="Download Resume"
        >
          <FileDown size={18} />
        </motion.a>

        <motion.a
          href="https://github.com/ravichandradevops2025"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          title="GitHub"
        >
          <Github size={18} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/ravichandravajinepalli/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          title="LinkedIn"
        >
          <Linkedin size={18} />
        </motion.a>

        <motion.a
          href="#contact"
          className="bg-teal-700 hover:bg-teal-600 text-white p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          title="Contact Me"
        >
          <Send size={18} />
        </motion.a>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 shadow-lg transition-all duration-300"
            title="Back to Top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}