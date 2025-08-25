import React from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom, staggerContainer } from "../utils/animations";

import {
  FaAws,
  FaDocker,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCode,
  FaCogs,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGithubactions,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiGo,
  SiShell,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiNginx,
  SiApache,
  SiSonarqube,
  SiMaven,
  SiHelm,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";

// Professional skills organized by expertise level and category
const skillsData = {
  "Cloud Platforms": [
    { 
      icon: <FaAws size={40} className="text-orange-400" />, 
      title: "AWS", 
      level: "expert",
      years: "8+"
    },
    { 
      icon: <SiMicrosoftazure size={40} className="text-blue-500" />, 
      title: "Azure", 
      level: "intermediate",
      years: "2+"
    },
    { 
      icon: <SiGooglecloud size={40} className="text-blue-400" />, 
      title: "GCP", 
      level: "intermediate",
      years: "1+"
    },
  ],
  
  "Infrastructure as Code": [
    { 
      icon: <SiTerraform size={40} className="text-purple-500" />, 
      title: "Terraform", 
      level: "expert",
      years: "6+"
    },
    { 
      icon: <FaCloud size={40} className="text-orange-500" />, 
      title: "CloudFormation", 
      level: "advanced",
      years: "5+"
    },
    { 
      icon: <SiAnsible size={40} className="text-red-600" />, 
      title: "Ansible", 
      level: "expert",
      years: "5+"
    },
  ],

  "CI/CD & Automation": [
    { 
      icon: <SiJenkins size={40} className="text-blue-600" />, 
      title: "Jenkins", 
      level: "expert",
      years: "7+"
    },
    { 
      icon: <SiGithubactions size={40} className="text-gray-300" />, 
      title: "GitHub Actions", 
      level: "expert",
      years: "3+"
    },
    { 
      icon: <SiGitlab size={40} className="text-orange-600" />, 
      title: "GitLab CI", 
      level: "advanced",
      years: "4+"
    },
  ],

  "Containerization": [
    { 
      icon: <FaDocker size={40} className="text-blue-400" />, 
      title: "Docker", 
      level: "expert",
      years: "6+"
    },
    { 
      icon: <SiKubernetes size={40} className="text-blue-500" />, 
      title: "Kubernetes", 
      level: "expert",
      years: "5+"
    },
    { 
      icon: <SiHelm size={40} className="text-blue-300" />, 
      title: "Helm", 
      level: "advanced",
      years: "3+"
    },
  ],

  "Programming & Scripting": [
    { 
      icon: <FaPython size={40} className="text-yellow-400" />, 
      title: "Python", 
      level: "advanced",
      years: "5+"
    },
    { 
      icon: <SiGo size={40} className="text-cyan-400" />, 
      title: "Golang", 
      level: "advanced",
      years: "3+"
    },
    { 
      icon: <SiShell size={40} className="text-green-400" />, 
      title: "Shell/Bash", 
      level: "expert",
      years: "8+"
    },
  ],

  "Monitoring & Observability": [
    { 
      icon: <SiPrometheus size={40} className="text-orange-500" />, 
      title: "Prometheus", 
      level: "advanced",
      years: "4+"
    },
    { 
      icon: <SiGrafana size={40} className="text-orange-400" />, 
      title: "Grafana", 
      level: "advanced",
      years: "4+"
    },
    { 
      icon: <SiElasticsearch size={40} className="text-yellow-500" />, 
      title: "ELK Stack", 
      level: "advanced",
      years: "3+"
    },
  ],

  "Version Control": [
    { 
      icon: <FaGitAlt size={40} className="text-orange-600" />, 
      title: "Git", 
      level: "expert",
      years: "8+"
    },
    { 
      icon: <SiGithub size={40} className="text-gray-300" />, 
      title: "GitHub", 
      level: "expert",
      years: "6+"
    },
    { 
      icon: <SiBitbucket size={40} className="text-blue-600" />, 
      title: "Bitbucket", 
      level: "advanced",
      years: "5+"
    },
  ]
};

const getLevelColor = (level) => {
  switch (level) {
    case 'expert': return 'text-green-400';
    case 'advanced': return 'text-blue-400';
    case 'intermediate': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
};

const getLevelWidth = (level) => {
  switch (level) {
    case 'expert': return 'w-[95%]';
    case 'advanced': return 'w-[80%]';
    case 'intermediate': return 'w-[65%]';
    default: return 'w-[40%]';
  }
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="space-y-12 z-10 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="text-center space-y-4" variants={fadeRotateZoom}>
        <h2 className="text-4xl font-bold text-gradient">
          Technical Expertise
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          8+ years of hands-on experience with modern cloud technologies and DevOps practices
        </p>
      </motion.div>

      <motion.div 
        className="space-y-12"
        variants={fadeRotateZoom}
      >
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-teal-300 text-center">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map(({ icon, title, level, years }, index) => (
                <motion.div
                  key={title}
                  className="skill-card p-6 rounded-xl group cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-lg">{title}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className={`capitalize ${getLevelColor(level)} font-medium`}>
                          {level}
                        </span>
                        <span className="text-gray-400">{years}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expertise level bar */}
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full ${getLevelWidth(level)}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: getLevelWidth(level).replace('w-[', '').replace(']', '') }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Professional summary */}
      <motion.div
        className="mt-16 text-center bg-card-gradient p-8 rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Professional Focus
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Specialized in <span className="text-teal-400 font-semibold">AWS cloud architecture</span>, 
          <span className="text-teal-400 font-semibold"> infrastructure automation</span>, and 
          <span className="text-teal-400 font-semibold"> enterprise DevOps transformation</span>. 
          Led 50+ successful cloud migrations and automation initiatives, consistently delivering 
          measurable business value through modern engineering practices.
        </p>
      </motion.div>
    </motion.section>
  );
}