import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub, FaTrophy } from "react-icons/fa";
import { Calendar, Building, TrendingUp } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { fadeRotateZoom } from "../utils/animations";
import { allProjects } from "../data/content";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const allSkills = ["All", ...new Set(allProjects.flatMap(p => p.skills))];
  const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.skills.includes(filter));

  return (
    <motion.section 
      id="projects" 
      className="max-w-7xl mx-auto px-4 space-y-12" 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }} 
      variants={fadeRotateZoom}
    >
      <motion.div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing enterprise-level cloud transformations and DevOps automation initiatives
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {allSkills.slice(0, 8).map((skill, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(skill)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              filter === skill 
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-teal-400 shadow-lg shadow-teal-600/25" 
                : "bg-slate-800/50 text-gray-300 border-gray-600 hover:bg-teal-600/20 hover:border-teal-400/50 hover:text-teal-300"
            }`}
          >
            {skill}
          </button>
        ))}
      </motion.div>

      {/* Projects Swiper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={filteredProjects.length > 1}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false 
          }}
          pagination={{ 
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active"
          }}
          navigation={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
          className="!pb-12"
        >
          {filteredProjects.map((proj, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="bg-card-gradient rounded-2xl border border-teal-500/20 shadow-xl p-8 space-y-6 h-auto min-h-[500px] group hover:shadow-2xl hover:shadow-teal-600/10 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                {/* Project Header */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{proj.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building size={14} />
                        <span>{proj.platform}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 hover:bg-teal-600/20 rounded-lg transition-all duration-300 group/icon"
                        title="View Project"
                      >
                        <FaExternalLinkAlt className="text-gray-400 group-hover/icon:text-teal-400 transition-colors" size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Impact Badge */}
                {proj.impact && (
                  <div className="p-4 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl border border-teal-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-teal-400" size={16} />
                      <span className="text-teal-400 font-semibold text-sm">Business Impact</span>
                    </div>
                    <p className="text-white font-medium">{proj.impact}</p>
                  </div>
                )}

                {/* Technology Stack */}
                <div className="space-y-3">
                  <h4 className="text-white font-medium">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-teal-600/20 text-teal-300 text-sm rounded-full border border-teal-500/20 hover:bg-teal-600/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Project Stats */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center p-6 bg-card-gradient rounded-2xl border border-teal-500/20">
          <div className="text-3xl font-bold text-teal-400 mb-2">{allProjects.length}+</div>
          <div className="text-gray-300">Enterprise Projects</div>
        </div>
        <div className="text-center p-6 bg-card-gradient rounded-2xl border border-teal-500/20">
          <div className="text-3xl font-bold text-teal-400 mb-2">8+</div>
          <div className="text-gray-300">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-card-gradient rounded-2xl border border-teal-500/20">
          <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
          <div className="text-gray-300">Success Rate</div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12 p-8 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl border border-teal-500/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Next Project?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Let's discuss how I can help transform your infrastructure and accelerate your cloud journey.
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Conversation
          <FaExternalLinkAlt size={14} />
        </motion.a>
      </motion.div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(20, 184, 166, 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #14b8a6;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #14b8a6;
          background: rgba(15, 23, 42, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(20, 184, 166, 0.2);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(20, 184, 166, 0.1);
          border-color: rgba(20, 184, 166, 0.4);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </motion.section>
  );
}