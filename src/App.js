import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { ref: homeRef, name: 'home' },
    { ref: experienceRef, name: 'experience' },
    { ref: projectsRef, name: 'projects' },
    { ref: contactRef, name: 'contact' }
  ];

  const scrollToSection = (ref, index = null) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    // Update active section immediately when clicking
    if (index !== null) {
      setActiveSection(index);
    }
  };

  const scrollToNext = () => {
    const nextIndex = Math.min(activeSection + 1, sections.length - 1);
    scrollToSection(sections[nextIndex].ref, nextIndex);
  };

  const scrollToPrev = () => {
    const prevIndex = Math.max(activeSection - 1, 0);
    scrollToSection(sections[prevIndex].ref, prevIndex);
  };

  // Track active section on scroll
  useEffect(() => {
    const container = document.querySelector('.horizontal-scroll-container');
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const currentSection = Math.round(scrollLeft / sectionWidth);
      setActiveSection(currentSection);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref, index) => {
    scrollToSection(ref, index);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container" ref={containerRef}>
      {/* Fixed Navigation */}
      <nav className="cyber-nav">
        <span className="nav-prompt">jaivik@portfolio:~$</span>
        
        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <button 
            className={activeSection === 0 ? 'active' : ''} 
            onClick={() => scrollToSection(homeRef, 0)}
          >
            ./HOME
          </button>
          <button 
            className={activeSection === 1 ? 'active' : ''} 
            onClick={() => scrollToSection(experienceRef, 1)}
          >
            ./EXPERIENCE
          </button>
          <button 
            className={activeSection === 2 ? 'active' : ''} 
            onClick={() => scrollToSection(projectsRef, 2)}
          >
            ./PROJECTS
          </button>
          <button 
            className={activeSection === 3 ? 'active' : ''} 
            onClick={() => scrollToSection(contactRef, 3)}
          >
            ./CONTACT
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              <button 
                className={activeSection === 0 ? 'active' : ''} 
                onClick={() => handleNavClick(homeRef, 0)}
              >
                ./HOME
              </button>
              <button 
                className={activeSection === 1 ? 'active' : ''} 
                onClick={() => handleNavClick(experienceRef, 1)}
              >
                ./EXPERIENCE
              </button>
              <button 
                className={activeSection === 2 ? 'active' : ''} 
                onClick={() => handleNavClick(projectsRef, 2)}
              >
                ./PROJECTS
              </button>
              <button 
                className={activeSection === 3 ? 'active' : ''} 
                onClick={() => handleNavClick(contactRef, 3)}
              >
                ./CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots - Fixed Position */}
      <div className="navigation-dots">
        {sections.map((section, index) => (
          <motion.div
            key={section.name}
            className={`nav-dot ${activeSection === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => scrollToSection(section.ref, index)}
          />
        ))}
      </div>

      {/* Scroll Indicators - Fixed Position */}
      <div className="scroll-indicators">
        {/* Left Arrow - Go Back */}
        {activeSection > 0 && (
          <motion.div 
            className="scroll-indicator-fixed scroll-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={scrollToPrev}
          >
            <span>Back</span>
          </motion.div>
        )}
        
        {/* Right Arrow - Go Forward */}
        {activeSection < sections.length - 1 && (
          <motion.div 
            className="scroll-indicator-fixed scroll-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={scrollToNext}
          >
            <span>Explore</span>
          </motion.div>
        )}
      </div>

      {/* Horizontal Sections Container */}
      <div className="horizontal-scroll-container">
        <section ref={homeRef} className="horizontal-section" id="home">
          <Home />
        </section>
        
        <section ref={experienceRef} className="horizontal-section" id="experience">
          <Experience />
        </section>
        
        <section ref={projectsRef} className="horizontal-section" id="projects">
          <Projects />
        </section>
        
        <section ref={contactRef} className="horizontal-section" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
