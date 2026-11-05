import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import HandicraftCaseStudy from './components/sections/HandicraftCaseStudy';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="portfolio-app-root">
      {/* Cinematic Ambient Atmosphere */}
      <div className="ambient-backdrop" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <HandicraftCaseStudy />
        <Projects />
        <Contact />
      </main>

      {/* Cinematic Footer */}
      <Footer />
    </div>
  );
}

export default App;
