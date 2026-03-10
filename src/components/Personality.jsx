"use client";

import React from "react";
import { motion } from "framer-motion";

const Personality = () => {
  const skills = [
    { name: "Communication", icon: "💬", color: "from-pink-400 to-rose-500" },
    { name: "Adaptability", icon: "🔄", color: "from-blue-400 to-cyan-500" },
    { name: "Problem-Solving", icon: "🧩", color: "from-purple-400 to-violet-500" },
    { name: "Networking", icon: "🌐", color: "from-emerald-400 to-teal-500" },
    { name: "Leadership", icon: "🚀", color: "from-orange-400 to-red-500" },
    { name: "Quick Learning", icon: "⚡", color: "from-yellow-400 to-amber-500" },
    { name: "Dance", icon: "💃", color: "from-fuchsia-400 to-pink-500" },
    { name: "Sports Champion", icon: "🏆", color: "from-gold-400 to-yellow-500" },
    { name: "Team Player", icon: "🤝", color: "from-indigo-400 to-blue-500" }
  ];

  return (
    <section id="personality" className="py-16 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-900 via-purple-500 to-emerald-600 dark:from-white dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Ultimate Versatility
          </motion.h2>
          <motion.p className="text-lg md:text-xl font-light text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto px-6 py-3 rounded-2xl bg-white/90 dark:bg-neutral-800/90 backdrop-blur">
            "From coding sprints → dance stages → sports fields. I deliver anywhere."
          </motion.p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {/* TECH BEAST */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-slate-800 via-blue-900 to-emerald-900 bg-cover bg-center rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-48 md:h-56 p-6 md:p-8"
            style={{ backgroundImage: "url('/Trophy.jpeg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col h-full justify-end">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex-shrink-0">
                  <span className="text-2xl md:text-3xl">💻</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 whitespace-nowrap">
                  Tech Beast
                </h3>
              </div>
              <ul className="text-sm md:text-base leading-tight text-white/95 space-y-1 max-w-[90%] list-none">
                <li>• AI/ML Research (89.7%)</li>
                <li>• Full-stack development</li>
                <li>• Quick learning algorithms</li>
              </ul>
            </div>
          </motion.div>

          {/* STAGE STAR */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-slate-800 via-pink-900 to-purple-900 bg-cover bg-center rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-48 md:h-56 p-6 md:p-8"
            style={{ backgroundImage: "url('/Stage.jpeg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col h-full justify-end">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex-shrink-0">
                  <span className="text-2xl md:text-3xl">💃</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 whitespace-nowrap">
                  Stage Star
                </h3>
              </div>
              <ul className="text-sm md:text-base leading-tight text-white/95 space-y-1 max-w-[90%] list-none">
                <li>• Hosted & anchored events</li>
                <li>• Dance performances</li>
                <li>• Communication mastery</li>
              </ul>
            </div>
          </motion.div>

          {/* SPORTS CHAMP */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-slate-800 via-orange-900 to-yellow-900 bg-cover bg-center rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-48 md:h-56 p-6 md:p-8"
            style={{ backgroundImage: "url('/Sports.jpeg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col h-full justify-end">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex-shrink-0">
                  <span className="text-2xl md:text-3xl">🏆</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 whitespace-nowrap">
                  Sports Champ
                </h3>
              </div>
              <ul className="text-sm md:text-base leading-tight text-white/95 space-y-1 max-w-[90%] list-none">
                <li>• Sports winning record</li>
                <li>• Team leadership</li>
                <li>• Thrives under pressure</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ✅ FIXED Skills Grid - Dark Mode Perfect */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-3 justify-items-center max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [-3, 3, -3][Math.floor(index/3) % 3] }}
              whileHover={{ scale: 1.15, y: -15 }}
              transition={{ type: "spring", stiffness: 400, delay: index * 0.06 }}
              className="group relative p-4 bg-white/95 dark:bg-neutral-800/95 via-neutral-50/90 dark:via-neutral-800/90 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-400 flex flex-col items-center justify-center min-w-[110px] max-w-[140px] h-[85px]"
            >
              {/* Fixed backdrop overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 dark:bg-neutral-700/80 backdrop-blur-sm rounded-xl" />
              <div className="relative z-10 flex flex-col items-center gap-1 text-center w-full px-1">
                <motion.span 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-2xl group-hover:scale-125 transition-transform flex-shrink-0"
                >
                  {skill.icon}
                </motion.span>
                {/* ✅ FIXED TEXT - Perfect Dark Mode Contrast */}
                <span className="font-black text-sm leading-tight break-words tracking-tight px-1 text-neutral-900 dark:text-neutral-50">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Personality;
