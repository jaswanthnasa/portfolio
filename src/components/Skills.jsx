import React from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom, staggerContainer } from "../utils/animations";

import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaLinux,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaTools,
  FaServer,
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiKubernetes,
  SiAmazonaws,
  SiAnsible,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

// ✅ Updated skills array with safe icons
const skills = [
  { icon: <FaAws size={40} className="text-yellow-400" />, title: "AWS" },
  { icon: <FaTools size={40} className="text-purple-500" />, title: "Terraform" }, // fallback
  { icon: <SiAnsible size={40} className="text-red-600" />, title: "Ansible" },
  { icon: <FaDocker size={40} className="text-blue-400" />, title: "Docker" },
  { icon: <SiKubernetes size={40} className="text-blue-500" />, title: "Kubernetes" },
  { icon: <FaJenkins size={40} className="text-red-500" />, title: "Jenkins" },
  { icon: <FaJava size={40} className="text-orange-500" />, title: "Maven" }, // fallback for Maven
  { icon: <FaTools size={40} className="text-blue-600" />, title: "SonarQube" }, // fallback
  { icon: <FaGitAlt size={40} className="text-orange-600" />, title: "Git" },
  { icon: <SiGithub size={40} className="text-gray-300" />, title: "GitHub" },
  { icon: <FaTools size={40} className="text-blue-700" />, title: "Bitbucket" }, // fallback
  { icon: <FaPython size={40} className="text-yellow-400" />, title: "Python" },
  { icon: <FaJava size={40} className="text-orange-400" />, title: "Java" },
  { icon: <FaLinux size={40} className="text-yellow-600" />, title: "Linux" },
  { icon: <SiPostgresql size={40} className="text-blue-700" />, title: "PostgreSQL" },
  { icon: <SiMysql size={40} className="text-blue-500" />, title: "MySQL" },
  { icon: <FaDatabase size={40} className="text-red-700" />, title: "Oracle DB" }, // fallback
  { icon: <FaServer size={40} className="text-green-600" />, title: "Nginx" }, // fallback
  { icon: <FaServer size={40} className="text-red-600" />, title: "Apache" }, // fallback
  { icon: <FaServer size={40} className="text-orange-600" />, title: "Tomcat" }, // fallback
  { icon: <FaTools size={40} className="text-green-700" />, title: "Splunk" }, // fallback
  { icon: <FaTools size={40} className="text-blue-400" />, title: "AppDynamics" }, // fallback
  { icon: <FaTools size={40} className="text-green-400" />, title: "New Relic" }, // fallback
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="space-y-10 z-10 relative text-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl font-bold text-teal-300" variants={fadeRotateZoom}>
        Technical Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
        variants={fadeRotateZoom}
      >
        {skills.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            className="w-28 h-28 hover:bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center justify-center transition duration-200 hover:scale-105"
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            title={title}
          >
            {icon}
            <p className="mt-2 text-sm text-center text-gray-300">{title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
// Note: Some icons like Terraform, Maven, SonarQube, Bitbucket, Oracle DB, Nginx, Apache, Tomcat, Splunk, AppDynamics, and New Relic do not have direct icons in react-icons. I've used FaTools or FaServer as fallbacks for these. You can replace them with custom SVGs or images if needed.