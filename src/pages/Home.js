import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="title-container">
            <h1 className="main-title">JAIVIK JOSHI</h1>
          </div>
          
          <p className="description">
            CS student who ships reliable, user-facing software. React/TypeScript on the web, Node/Express on the service side. Focus on solid auth, validated APIs, safe webhooks, and observability.
          </p>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="https://github.com/jaivikjoshi" target="_blank" rel="noopener noreferrer">
              <span>GITHUB</span>
            </a>
            <a href="https://www.linkedin.com/in/jaivikjoshi/" target="_blank" rel="noopener noreferrer">
              <span>LINKEDIN</span>
            </a>
            <a href="mailto:jaivik.joshi@queensu.ca">
              <span>EMAIL</span>
            </a>
          </motion.div>

          <motion.div 
            className="resume-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="/Jaivik_Resume___Jan_2026.pdf" download className="resume-btn">
              <span className="resume-icon">↓</span>
              <span>DOWNLOAD RESUME</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
