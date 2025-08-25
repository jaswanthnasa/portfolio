import React from 'react';
import { motion } from 'framer-motion';
import { keyAchievements } from '../data/content';

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Key Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering measurable impact through cloud innovation and automation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="text-3xl font-bold text-teal-400 mb-2">{achievement.metric}</div>
              <div className="text-gray-300 text-sm">{achievement.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;