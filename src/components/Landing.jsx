import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ReactTyped } from "react-typed";
import { fadeRotateZoom } from "../utils/animations";

export default function Landing() {
  return (
    <motion.section
      id="home"
      className="relative text-center space-y-6 z-10 max-w-3xl mx-auto pt-10"
      variants={fadeRotateZoom}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
        Jaswanth Kumar Karuturi
      </motion.h1>

      <ReactTyped
        className="text-xl text-gray-400"
        strings={[
          "Cloud & DevOps Engineer",
          "AWS | Docker | Kubernetes | Terraform",
          "CI/CD Automation Specialist",
          "Infrastructure as Code specialist"
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />

      <p className="text-base sm:text-lg text-gray-500 px-4 leading-relaxed">
        👋 Hi! I design, automate, and optimize cloud-native infrastructure and DevOps pipelines for scalable, secure, and high-performing applications. Passionate about AWS, CI/CD, containers, and modern engineering practices.
      </p>

      <motion.div className="flex flex-wrap justify-center gap-4 pt-4">
        {[
          ['GitHub', Github, "https://github.com/jaswanthnasa"],
          ['LinkedIn', Linkedin, "https://www.linkedin.com/in/jaswanth-kumar-82442752/"],
          ['Email', Mail, "mailto:n.jaswanthkumar@gmail.com"],
        ].map(([label, Icon, hrefPath], idx) => (
          <motion.a
            key={idx}
            href={hrefPath}
            target="_blank"
            className="group bg-black hover:bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            rel="noopener noreferrer"
          >
            <Icon size={18} className="group-hover:-translate-y-1 group-hover:scale-110 transition" />
            {label}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="absolute -top-8 right-0 text-sm flex items-center gap-2 bg-blue-800/40 px-4 py-2 rounded-full text-blue-200 shadow-lg animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        title="Cloud & DevOps Portfolio"
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Sparkles className="w-4 h-4" />
        {/* Cloud & DevOps Portfolio */}
      </motion.div>
    </motion.section>
  );
}
