import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "/SampatiAnvekar(Resume).pdf"; // Your PDF in public/

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center py-20">
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto px-4">
          {/* Left - Text Content (UNCHANGED + Resume Button) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-lg"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black leading-tight mb-8 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-transparent"
            >
              Hello.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-light text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed"
            >
              I am <span className="font-black text-perplexity-400">Sampati Anvekar</span>
              <br />
              Full Stack Developer | MERN Stack | Exploring Cybersecurity | MCA Graduate
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-neutral-500 dark:text-neutral-400 mb-12 leading-relaxed max-w-md"
            >
              Building responsive web experiences with React and modern tools.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-perplexity-400 text-neutral-900 font-bold text-lg 
                           rounded-full hover:bg-perplexity-500 hover:shadow-xl 
                           transition-all duration-300 hover:-translate-y-1"
              >
                View Work
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-neutral-300 dark:border-neutral-600 
                           font-bold text-lg rounded-full hover:border-perplexity-400 
                           hover:text-perplexity-400 dark:hover:text-perplexity-300
                           transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </a>

              {/* RESUME BUTTON - NEW */}
              <motion.button
                onClick={() => setShowResume(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg 
                           rounded-full hover:shadow-xl hover:shadow-emerald-500/50
                           transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📄 View Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Your Picture (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src="/sampatiprofile.jpg"  // Fixed path (remove public/)
              alt="Sampati Anvekar - Full Stack Developer"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover 
                         rounded-3xl shadow-2xl border-4 border-white/70 dark:border-neutral-800/70
                         hover:scale-105 hover:shadow-3xl transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* RESUME MODAL - View + Download */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setShowResume(false)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-6xl max-h-[90vh] w-full mx-4 shadow-2xl border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                📄 Sampati Anvekar - Resume
              </h2>
              <div className="flex gap-4">
                {/* Download Button */}
                <a
                  href="/SampatiAnvekar(Resume).pdf"
                  download="SampatiAnvekar(Resume).pdf"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  💾 Download PDF
                </a>
                {/* Close Button */}
                <motion.button
                  onClick={() => setShowResume(false)}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  ✕ Close
                </motion.button>
              </div>
            </div>

            {/* PDF Preview */}
            <iframe
              src="/SampatiAnvekar(Resume).pdf"
              className="w-full h-[70vh] md:h-[75vh] rounded-2xl border-4 border-gray-200 shadow-inner"
              title="Sampati Anvekar Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
