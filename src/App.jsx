import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";      // ✅ NEW
import Experience from "./components/Experience";    // ✅ NEW
import Achievements from "./components/Achievements";
import Research from "./components/Research";        // ✅ NEW
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Personality from "./components/Personality";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-0">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Achievements />
        <Research />
        <Projects />
        <Personality/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
