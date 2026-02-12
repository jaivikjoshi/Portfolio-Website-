import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Research.css';

const Research = () => {
  const papers = [
    {
      title: 'RAG Pipeline Ablation Report',
      authors: 'Jaivik Joshi',
      date: '2026',
      status: 'Completed',
      description: 'Ablation study on Retrieval-Augmented Generation pipeline components and their impact on performance.',
      tags: ['RAG', 'NLP', 'Ablation Study', 'LLM'],
      pdfUrl: '/Research/RAG_Pipeline_Ablation_Report_Jaivik.pdf'
    },
    {
      title: 'CISC 322 — A3 Report',
      authors: 'Jaivik Joshi',
      date: '2026',
      status: 'Completed',
      description: 'Software architecture analysis and design report.',
      tags: ['Software Architecture', 'CISC 322', 'Design Patterns'],
      pdfUrl: '/Research/CISC_322___A3_report.pdf'
    }
  ];

  return (
    <div className="research-container">
      <motion.h1 
        className="research-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Research
      </motion.h1>

      <div className="research-content">
        {papers.map((paper, index) => (
          <motion.div 
            key={paper.title}
            className="research-paper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
          >
            {/* Paper Header */}
            <div className="paper-header">
              <div className="paper-header-bar">
                <span className="paper-header-title">{paper.title}</span>
              </div>
              <div className="paper-info">
                <div className="paper-info-row">
                  <span className="paper-status-badge">{paper.status.toUpperCase()}</span>
                  <span className="paper-meta-item">AUTHORS: {paper.authors}</span>
                  <span className="paper-meta-item">DATE: {paper.date}</span>
                </div>
                <p className="paper-description">{paper.description}</p>
                <div className="paper-tags">
                  {paper.tags.map(tag => (
                    <span key={tag} className="paper-tag">{tag}</span>
                  ))}
                </div>
                <a 
                  href={paper.pdfUrl} 
                  download 
                  className="paper-download-btn"
                >
                  <span className="paper-download-icon">↓</span>
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="pdf-viewer-wrapper">
              <div className="pdf-viewer-toolbar">
                <span>$ open {paper.pdfUrl}</span>
              </div>
              <iframe
                src={paper.pdfUrl}
                className="pdf-viewer"
                title={paper.title}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Research;
