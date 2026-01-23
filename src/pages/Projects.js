import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'KindredNotes',
      subtitle: 'Commissioned note-sharing app',
      description: 'KindredNotes is a commissioned note-sharing app that I scoped and delivered as an MVP in eight weeks. It allows real groups to share "kind notes" with each other. I implemented multi-provider auth with email, Google, and Facebook, synced display names and tag preferences during onboarding, designed a composer + tag model, and added a daily email digest via scheduled functions.',
      tech: ['AngularJS', 'Node.js', 'Firebase Auth', 'Firestore', 'Firebase Hosting'],
      highlights: [
        'Multi-provider auth and onboarding with synced profiles and tags',
        'REST/Firestore flows with a daily digest job to drive engagement',
        'Built for reliability: clear errors, sensible pagination, and guardrails on write paths'
      ]
    },
    {
      title: 'Brain Tumor Detector',
      subtitle: 'ML demo app',
      description: 'An ML demo app that uses a CNN classifier to analyze MRI scans. I built a preprocessing pipeline for resizing, grayscale normalization, and noise reduction to improve dataset consistency. The project includes a Flask server for demo inference and comprehensive notes on model training and evaluation.',
      tech: ['Python', 'Flask', 'NumPy', 'TensorFlow', 'Keras', 'OpenCV'],
      highlights: [
        'CNN architecture for brain tumor classification',
        'Preprocessing pipeline for image normalization',
        'Flask API for real-time inference demos'
      ]
    }
  ];

  const skills = {
    languages: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Ruby', 'Go'],
    frameworks: ['React', 'Node.js', 'Express', 'AngularJS', 'Flask', 'TensorFlow', 'OpenCV'],
    dataInfra: ['Firebase', 'MongoDB', 'MySQL', 'AWS (S3, API Gateway, Lambda)', 'Docker', 'Heroku', 'Git'],
    practices: ['RBAC and JWT auth', 'Schema validation', 'Cursor pagination', 'Webhook signing', 'Idempotency', 'Logging and request IDs', 'SLIs and CI test gates', 'Accessibility', 'Core Web Vitals']
  };

  return (
    <div className="projects-container">
      <motion.h1 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="project-header">
              <h2>{project.title}</h2>
              <span className="project-subtitle">{project.subtitle}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="skills-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {skills.languages.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <div className="skill-tags">
              {skills.frameworks.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Data/Infra</h3>
            <div className="skill-tags">
              {skills.dataInfra.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Practices</h3>
            <div className="skill-tags">
              {skills.practices.map(skill => (
                <span key={skill} className="skill-tag practice">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
