import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fleet Route Optimization System (ACO)",
    image: "Fleet.png", // Screenshot 1 from your image
    description: "Full-stack logistics platform using Ant Colony Optimization algorithm to compute efficient delivery routes. Integrates Python optimization engine with MERN dashboard for route analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "ACO"],
    keyWork: [
      "Implemented ACO route optimization algorithm",
      "Node.js REST APIs integration", 
      "MongoDB route schemas",
      "React analytics dashboard"
    ]
  },
  {
    title: "Fitfinity – Your doctor on the go",
    image: "/Fitfinity.png", // Screenshot 2 from your image
    description: "Health & wellness platform with doctor search, appointment booking, BMI calculators, and multilingual support. Awarded Best Project during BCA.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Google Translate"],
    keyWork: [
      "Doctor search by category",
      "Appointment request forms",
      "BMI calculators (kids/adults)",
      "Multilingual accessibility"
    ]
  },
  {
    title: "Web Application Penetration Testing (OWASP Top 10)",
    image: null, // No image
    description: "Structured vulnerability testing based on OWASP Top 10 covering SQL Injection, XSS, Broken Authentication, and insecure data handling with mitigation analysis.",
    tech: ["OWASP Top 10", "HTTP Protocol", "Web Security", "Input Validation"],
    keyWork: [
      "SQL Injection analysis",
      "Cross-Site Scripting (XSS)",
      "Broken Authentication testing",
      "Secure coding practices"
    ]
  },
  {
    title: "Obstacle Avoidance Robot Car (Arduino)",
    image: null, // No image
    description: "Arduino-based robot car with ultrasonic sensors for obstacle detection, Bluetooth mobile app control, and multilingual voice commands.",
    tech: ["Arduino", "Ultrasonic Sensors", "Bluetooth", "Embedded C"],
    keyWork: [
      "Obstacle detection logic",
      "Bluetooth mobile interface",
      "Real-time path adjustment",
      "Multilingual voice control"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-6xl font-black mb-6">
              Projects
            </motion.h2>
            <motion.p className="text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              Real-world applications I've built
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl rounded-2xl p-8 hover:cursor-pointer transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {project.image && (
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                
                <h3 className="text-2xl font-black mb-4 group-hover:text-perplexity-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2 mb-4">
                  {project.keyWork.map((work, i) => (
                    <div key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 text-sm">
                      <div className="w-2 h-2 bg-perplexity-400 rounded-full flex-shrink-0" />
                      <span>{work}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="max-w-4xl max-h-[90vh] w-full bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="mb-6 text-2xl font-bold text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              × Close
            </button>
            
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              />
            )}
            
            <h2 className="text-3xl font-black mb-6">{selectedProject.title}</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
              {selectedProject.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {selectedProject.tech.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-perplexity-400/10 text-perplexity-600 font-semibold rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Key Work:</h4>
              {selectedProject.keyWork.map((work, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50/50 dark:bg-neutral-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-perplexity-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{work}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
