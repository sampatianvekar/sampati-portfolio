import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  "💻 Programming": ["Python", "C", "C++", "Javascript", "Java"],
  "🌐 Web": ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
  "🖥️ OS": ["Windows", "Linux"],
  "🗄️ Backend": ["SQL/NoSQL databases"],
  "🔧 Core": ["DSA", "Agile Methodology"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-6xl font-black mb-6">
            Skills
          </motion.h2>
          <motion.p className="text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Technologies I work with
          </motion.p>
        </div>

        {/* Horizontal Scrollable Layout */}
        <div className="flex flex-col lg:flex-row lg:overflow-x-auto lg:pb-8 gap-12 lg:gap-8 items-start lg:items-stretch">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-1 min-w-[300px] lg:min-w-0 flex flex-col items-center text-center lg:hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 pb-4">
                <span className="text-4xl">{category.split(' ')[0]}</span>
                <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-100">
                  {category.split(' ').slice(1).join(' ')}
                </h3>
              </div>

              {/* Horizontal Skill Tags */}
              <div className="flex flex-wrap justify-center gap-3 w-full">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-5 py-3 bg-neutral-100/80 dark:bg-neutral-800/80 border border-neutral-200/50 dark:border-neutral-700/50 rounded-xl font-semibold text-base shadow-sm hover:bg-perplexity-400/20 hover:border-perplexity-400/50 hover:text-perplexity-500 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
