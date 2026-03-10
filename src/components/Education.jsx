import React from "react";
import { motion } from "framer-motion";

const education = [
  { degree: "Master of Computer Application", percentage: "77.61%", institution: "BMS College of Engineering, Bangalore", year: "2025" },
  { degree: "Bachelor of Computer Application", percentage: "92.25%", institution: "KLE'S RLSI College of BCA, Belagavi", year: "2023" },
  { degree: "12th (Commerce)", percentage: "89.88%", institution: "St. Joseph's PU College, Karwar", year: "2020" },
  { degree: "10th", percentage: "69%", institution: "The Central School, Dubai, UAE", year: "2018" }
];

const Education = () => {
  return (
    <section id="education" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-6xl font-black mb-6">
            Education
          </motion.h2>
          <motion.p className="text-xl font-light text-neutral-600 dark:text-neutral-400">
            Academic background
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-px h-full 
                         bg-gradient-to-b from-neutral-200 to-neutral-300 
                         dark:from-neutral-700 dark:to-neutral-600" />
          
          <div className="space-y-12 relative">
            {education.map((edu, index) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                {/* Year Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-perplexity-400 
                               to-perplexity-500 rounded-2xl flex items-center justify-center 
                               font-bold text-lg text-white shadow-xl border-4 
                               border-white/50 mt-1 z-10 hover:scale-110 transition-all">
                  {edu.year}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-neutral-50/80 dark:bg-neutral-900/60 backdrop-blur-sm 
                               rounded-2xl p-6 border border-neutral-200/40 
                               dark:border-neutral-700/40 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-4 py-2 bg-emerald-400/90 text-white font-bold 
                                   rounded-xl shadow-md text-sm whitespace-nowrap">
                      {edu.percentage}
                    </span>
                  </div>
                  <h3 className="text-xl font-black mb-2 text-neutral-900 dark:text-neutral-100">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
