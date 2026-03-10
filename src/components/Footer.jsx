import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 pt-24 pb-12 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight hover:text-perplexity-400 transition-colors"
          >
            Sampati
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 text-sm text-neutral-500"
          >
            <a href="mailto:your.email@example.com" className="hover:text-perplexity-400 transition-colors">
              Email
            </a>
            <a href="https://github.com/yourusername" className="hover:text-perplexity-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="hover:text-perplexity-400 transition-colors">
              LinkedIn
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-neutral-400 border-t border-neutral-200 pt-8"
        >
          <p>&copy; {new Date().getFullYear()} Sampati Anvekar. Built with React & Tailwind CSS.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
