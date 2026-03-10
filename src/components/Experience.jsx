import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "AIROBOSOFT Products and Services LLP",
    duration: "March 2025 – April 2025",
    description: "Worked on AI and data science workflows including data preprocessing, experimentation, and evaluation. Gained exposure to structured development practices and collaborative environments.",
    github: "https://github.com/sampatianvekar/INTERNSOFTcodefiles", // Replace with your GitHub repo
    tech: ["AI/ML", "Data Science", "Python", "Data Preprocessing"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-6xl font-black mb-6">
            Experience
          </motion.h2>
          <motion.p className="text-xl font-light text-neutral-600 dark:text-neutral-400">
            Professional journey
          </motion.p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative pl-12"
            >
              <div className="absolute left-0 top-4 w-4 h-4 bg-gradient-to-r from-perplexity-400 to-perplexity-500 rounded-full shadow-lg" />
              
              <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-neutral-200/30 dark:border-neutral-700/30">
                <h3 className="text-3xl font-black group-hover:text-perplexity-400 transition-colors">
                  {exp.title}
                </h3>
                <span className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
                {exp.company}
              </p>
              
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-perplexity-400 to-perplexity-500 text-white font-semibold rounded-full text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    View GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
