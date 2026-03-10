import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/50 
                 hover:bg-neutral-300 dark:hover:bg-neutral-700 
                 backdrop-blur-sm border border-neutral-200/50 
                 dark:border-neutral-800/50 transition-all duration-300
                 hover:scale-110 active:scale-95 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className={`w-5 h-5 rounded-full transition-all duration-300 ${
        theme === "light" 
          ? "bg-neutral-900 shadow-lg shadow-neutral-500/50" 
          : "bg-yellow-400 shadow-lg shadow-yellow-400/50"
      }`} />
    </button>
  );
};

export default ThemeToggle;
