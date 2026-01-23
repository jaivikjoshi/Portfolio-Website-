import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button onClick={() => handleNavigation('/')} className="nav-logo">JJ</button>
      <div className="nav-links">
        <button 
          onClick={() => handleNavigation('/')} 
          className={pathname === '/' ? 'active' : ''}
        >
          Home
        </button>
        <button 
          onClick={() => handleNavigation('/projects')} 
          className={pathname === '/projects' ? 'active' : ''}
        >
          Projects
        </button>
        <button 
          onClick={() => handleNavigation('/experience')} 
          className={pathname === '/experience' ? 'active' : ''}
        >
          Experience
        </button>
        <button 
          onClick={() => handleNavigation('/contact')} 
          className={pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
