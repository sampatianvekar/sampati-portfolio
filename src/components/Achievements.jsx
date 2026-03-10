import React, { useState } from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Batch Rank Holder in BCA (92%)",
    image: "rankholder.png", 
    alt: "Batch Rank Holder BCA 92%"
  },
  {
    title: "Best Project Award - Fitfinity",  // Fixed "Infinity" → "Fitfinity"
    image: "bestproject.jpeg", 
    alt: "Best Project Award Fitfinity"
  },
  {
    title: "Best IT Manager - Inter College Event",
    image: "bestmanager.jpeg", 
    alt: "Best IT Manager Inter College"
  },
  {
    title: "AWS Cloud Computing Certification",  // ✅ NEW CERTIFICATION
    image: "AWS.png",  // Add your AWS cert image to public/
    alt: "AWS Cloud Computing Certification"
  }
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="achievements" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
            >
              Achievements
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"> {/* Adjusted for 4 items */}
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 bg-white/70 dark:bg-neutral-900/70 rounded-2xl overflow-hidden"
                onClick={() => openModal(achievement.image, achievement.title)}
              >
                {/* Image - Full visibility */}
                <div className="overflow-hidden h-64">
                  <img
                    src={achievement.image}
                    alt={achievement.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Title BELOW image - Exactly like your design */}
                <div className="p-4 border-t border-neutral-200/50 dark:border-neutral-700/50">
                  <h3 className="font-bold text-lg md:text-xl text-neutral-900 dark:text-neutral-100 text-center leading-tight">
                    {achievement.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fullscreen Modal - UNCHANGED */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-6xl max-h-[95vh] w-full relative mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-14 right-0 text-white text-4xl font-bold hover:scale-110 transition-transform z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[95vh] max-w-full object-contain mx-auto block rounded shadow-2xl"
            />
            <p className="mt-6 text-white text-2xl font-bold text-center bg-black/70 px-8 py-4 rounded-xl max-w-2xl mx-auto">
              {selectedImage.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Achievements;
