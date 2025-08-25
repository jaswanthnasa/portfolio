import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  FileDown, 
  Send, 
  Phone, 
  Calendar,
  MessageCircle,
  ExternalLink 
} from "lucide-react";
import { fadeRotateZoom } from "../utils/animations";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending...");
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Message sent successfully!");
      e.target.reset();
      
      setTimeout(() => {
        setFormStatus("");
      }, 3000);
    }, 1000);
  };

  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-20 space-y-16 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeRotateZoom}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-cyan-600/5 rounded-3xl"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <motion.div 
        className="text-center space-y-4 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Ready to discuss your next cloud transformation project? Let's build something amazing together.
        </p>
        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-teal-500/20">
          <p className="text-sm text-gray-300 italic">
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." 
            <span className="text-teal-400">~John F. Woods</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 gap-16 items-start z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            
            <motion.div 
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-teal-600/20 rounded-lg">
                <Mail className="text-teal-400" size={20} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <a 
                  href="mailto:ravichandra.devops2025@gmail.com" 
                  className="text-white hover:text-teal-400 transition-colors font-medium"
                >
                  ravichandra.devops2025@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-teal-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-teal-600/20 rounded-lg">
                <MapPin className="text-teal-400" size={20} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="text-white font-medium">Hyderabad, India</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-teal-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-teal-600/20 rounded-lg">
                <MessageCircle className="text-teal-400" size={20} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Response Time</p>
                <p className="text-white font-medium">Within 24 hours</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-teal-300">Quick Actions</h4>
            <div className="grid grid-cols-1 gap-3">
              <motion.a 
                href="./Resume.pdf" 
                download="Ravichandra_Vajinepalli_Resume.pdf"
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-teal-500/20 hover:border-teal-400/40 text-gray-300 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <FileDown size={18} className="text-teal-400" />
                  <span>Download Resume</span>
                </div>
                <ExternalLink size={16} className="group-hover:text-teal-400 transition-colors" />
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/ravichandravajinepalli/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-teal-500/20 hover:border-teal-400/40 text-gray-300 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink size={16} className="group-hover:text-teal-400 transition-colors" />
              </motion.a>

              <motion.a 
                href="https://github.com/ravichandradevops2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-teal-500/20 hover:border-teal-400/40 text-gray-300 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-gray-400" />
                  <span>GitHub Repository</span>
                </div>
                <ExternalLink size={16} className="group-hover:text-teal-400 transition-colors" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Form */}
        <motion.div
          className="bg-slate-800/30 p-8 rounded-2xl border border-teal-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
          
          <form 
            action="https://formsubmit.co/ravichandra.devops2025@gmail.com" 
            method="POST" 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full p-4 rounded-xl bg-slate-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full p-4 rounded-xl bg-slate-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <input 
                type="text" 
                name="subject" 
                className="w-full p-4 rounded-xl bg-slate-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                placeholder="Project Discussion"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Message *
              </label>
              <textarea 
                name="message" 
                rows="6" 
                required 
                className="w-full p-4 rounded-xl bg-slate-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                placeholder="Tell me about your project requirements, timeline, and how I can help..."
              />
            </div>
            
            <motion.button 
              type="submit" 
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-3 rounded-lg ${
                  formStatus.includes("success") 
                    ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                    : "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                }`}
              >
                {formStatus}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16 p-8 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl border border-teal-500/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Let's discuss how we can modernize your cloud architecture, implement DevOps best practices, 
          and accelerate your digital transformation journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-teal-600/20 text-teal-400 rounded-full text-sm font-medium">
            Cloud Migration
          </span>
          <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-sm font-medium">
            DevOps Automation
          </span>
          <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
            Infrastructure as Code
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}