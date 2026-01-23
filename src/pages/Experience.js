import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Knowbie',
      period: 'Jan 2025 – Aug 2025',
      location: 'Remote',
      description: 'Worked on the core product that connects head office to stores. Led the multi-location announcements flow so HQ could target specific regions or stores and managers could message their own teams.',
      achievements: [
        'Introduced a safer user management model with clear roles for admins, managers, and frontline staff',
        'Centralized HQ-to-store communication used across 250+ client locations',
        '40% faster mobile cold start by optimizing the launch animation',
        'Zero-downtime cutover from MongoDB Realm to Firebase with token verification and secure password reset',
        'Replaced bulk deletions with a paginated cron that cut the working set dramatically each run',
        'Routed image uploads through a backend proxy to Firebase Storage with JWT checks'
      ],
      stack: ['React', 'Node/Express', 'Firebase', 'MongoDB Realm', 'AWS/Heroku']
    },
    {
      role: 'Software Developer Intern',
      company: 'PAIM AI',
      period: 'May 2024 – Aug 2024',
      location: 'Remote',
      description: 'Built an analytics dashboard with account access, time filters, and CSV export to replace spreadsheet reporting.',
      achievements: [
        'Stabilized flaky tests by fixing async issues',
        'Added a small suite of Postman checks wired into CI to block bad deploys',
        'Shipped a responsive marketing site with basic SEO improvements'
      ],
      stack: ['React', 'Node', 'Postman', 'CI tooling']
    },
    {
      role: 'Full-Stack Developer',
      company: 'BAPS Charities',
      period: 'May 2023 – Aug 2023',
      location: 'Remote',
      description: 'Built a React + Node announcement site with live updates, automated spreadsheet ingestion with a small Flask service.',
      achievements: [
        'JWT-secured REST API on AWS handling volunteer and event data',
        'Supported thousands of attendee check-ins during large events',
        'Cut weekly admin time by automating repetitive data work'
      ],
      stack: ['React', 'Node/Express', 'Flask', 'AWS']
    }
  ];

  const howIWork = [
    {
      title: 'Ownership',
      description: 'I like taking a problem from blank repo to running service, with tests and instrumentation so others can trust it.'
    },
    {
      title: 'Reliability Mindset',
      description: 'Auth with roles, validated inputs, idempotent webhooks, logging, request IDs, and a few SLIs.'
    },
    {
      title: 'Product Sense',
      description: 'Small UIs that make complex steps obvious, helpful empty states and errors, and attention to performance.'
    },
    {
      title: 'Team Habits',
      description: 'Small PRs, readable commits, tight docs and runbooks, follow-ups after deploys.'
    }
  ];

  return (
    <div className="experience-container">
      <motion.h1 
        className="experience-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="experience-header">
              <h2>{exp.role}</h2>
              <h3>{exp.company}</h3>
              <p className="period">{exp.period}</p>
              <p className="location">{exp.location}</p>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            <div className="stack-tags">
              {exp.stack.map(tech => (
                <span key={tech} className="stack-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="how-i-work"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="how-title">How I Work</h2>
        <div className="work-grid">
          {howIWork.map((item, index) => (
            <div key={item.title} className="work-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
