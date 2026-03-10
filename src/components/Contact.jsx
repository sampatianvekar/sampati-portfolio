import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-8"
        >
          Connect with me
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-light text-neutral-600 mb-12"
        >

        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-neutral-500 mb-12 leading-relaxed"
        >
          I am open to entry-level full-stack development opportunities, cyber security and software engineer roles.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="sampatianvekar@gamil.com"
            className="px-8 py-4 border-2 border-neutral-200 rounded-full text-xl font-medium hover:border-perplexity-300 hover:text-perplexity-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            sampatianvekar@gmail.com
          </a>
          <a
            href="https://github.com/sampatianvekar"
            className="px-8 py-4 border-2 border-neutral-200 rounded-full text-xl font-medium hover:border-perplexity-300 hover:text-perplexity-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sampati-anvekar/"
            className="px-8 py-4 border-2 border-neutral-200 rounded-full text-xl font-medium hover:border-perplexity-300 hover:text-perplexity-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
