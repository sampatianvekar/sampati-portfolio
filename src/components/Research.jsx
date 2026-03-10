import React from "react";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <section id="research" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="text-center mb-8">
          <motion.h2 className="text-3xl md:text-5xl font-black mb-3">
            Research Work
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1 flex-shrink-0">🔬</span>
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-2">
                Comparative Analysis of Deep Learning Models for Detecting AI Generated Images in Cyber Forensics
              </h3>
              <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                HybridNet Architecture Research • 2025
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            Conducted research on detecting AI-generated images using deep learning for cyber forensics. Compared LightCNN, ResNet18, and Xception models and proposed HybridNet - a hybrid architecture combining RGB, residual, and PRNU features using modified DenseNet121 backbone.
          </p>

          <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/20 border-l-4 border-emerald-400 rounded-r-lg">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-1 text-sm">
              Results:
            </h4>
            <p className="text-xl font-black text-emerald-700 dark:text-emerald-300">
              Achieved 89.7% validation accuracy 
            </p>
            <p className="text-emerald-700 dark:text-emerald-300 text-xs">
              with Grad-CAM explainable predictions for forensic analysis
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Deep Learning", "HybridNet", "DenseNet121", "Grad-CAM", "Cyber Forensics", "PRNU"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded border">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;
