"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <motion.h2 
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8" // BIGGER header
        >
          About
        </motion.h2>
        
        {/* BIG FONT - TIGHT SPACING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3 text-2xl md:text-3xl font-light text-neutral-600 mb-8 max-w-3xl mx-auto leading-tight" // 2xl→3xl!
        >
          <p>MCA graduate passionate about coding, building future-ready technologies focused on security and accessibility.</p>
          
          <p>Full-stack developer creating logically sound, scalable, accessible, maintainable, and secure systems.</p>
          
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 px-6 py-4 rounded-xl font-semibold text-neutral-800 dark:text-neutral-200 text-lg md:text-xl border mt-2"> {/* BIGGER card */}
            Mission: Learn in dynamic environments, deliver reliable, user-friendly, security-driven solutions.
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-tight font-light" // xl→2xl!
        >
          Currently mastering React, Tailwind CSS, and modern JavaScript.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
