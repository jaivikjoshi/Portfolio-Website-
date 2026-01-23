import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_rc74b2e';
const EMAILJS_TEMPLATE_ID = 'template_mjuaand';
const EMAILJS_PUBLIC_KEY = '1hzs4dWFKQJS8d0H1';

const Contact = () => {
  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Template parameters matching your EmailJS template
      const templateParams = {
        title: 'Portfolio Contact',
        name: formData.name,
        from_email: formData.email,
        email: formData.email, // For Reply To
        message: formData.message,
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again or email me directly.' 
      });
    }
  };

  const contactInfo = {
    email: 'jaivik.joshi@queensu.ca',
    location: 'Toronto, Canada',
    links: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jaivikjoshi/', icon: 'fab fa-linkedin' },
      { name: 'GitHub', url: 'https://github.com/jaivikjoshi', icon: 'fab fa-github' },
      { name: 'Email', url: 'mailto:jaivik.joshi@queensu.ca', icon: 'fas fa-envelope' }
    ]
  };

  return (
    <div className="contact-container">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-info">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's Connect
          </motion.h1>
          
          <motion.div 
            className="info-details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p><i className="fas fa-envelope"></i> {contactInfo.email}</p>
            <p><i className="fas fa-map-marker-alt"></i> {contactInfo.location}</p>
          </motion.div>

          <motion.div 
            className="social-links-horizontal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {contactInfo.links.map((link, index) => (
              <a 
                key={link.name} 
                href={link.url} 
                target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="social-link-btn"
              >
                <i className={link.icon}></i>
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.form 
          ref={formRef}
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={status.submitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={status.submitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              disabled={status.submitting}
            />
          </div>

          {status.error && (
            <div className="form-status error">
              <i className="fas fa-exclamation-circle"></i> {status.error}
            </div>
          )}

          {status.submitted && (
            <div className="form-status success">
              <i className="fas fa-check-circle"></i> Message sent successfully!
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={status.submitting}>
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
