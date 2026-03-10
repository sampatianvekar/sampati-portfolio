import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'achievements', 'research', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                       border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-3xl font-black tracking-tight hover:text-perplexity-400 
                     dark:hover:text-perplexity-300 transition-colors duration-300"
        >
          Sampati Anvekar 

        </a>


        {/* Desktop Menu + Theme Toggle */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-xl font-medium">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className={`py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-perplexity-400 dark:text-perplexity-300 bg-perplexity-400/10 dark:bg-perplexity-900/30 border border-perplexity-300/50 dark:border-perplexity-700/50 shadow-sm'
                      : 'hover:text-perplexity-400 dark:hover:text-perplexity-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 
                       hover:bg-neutral-300 dark:hover:bg-neutral-700 
                       backdrop-blur-sm border border-neutral-200/50 
                       dark:border-neutral-800/50 transition-all duration-300
                       hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-neutral-900/95 border-t 
                        border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
          <ul className="px-4 py-6 space-y-4 text-lg font-medium">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-perplexity-400 dark:text-perplexity-300 bg-perplexity-400/20 dark:bg-perplexity-900/40 border border-perplexity-300/50 shadow-sm font-semibold'
                      : 'hover:text-perplexity-400 dark:hover:text-perplexity-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
