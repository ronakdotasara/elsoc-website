import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '📖' },
    { path: '/events', label: 'Events', icon: '🎯' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/team', label: 'Team', icon: '👥' },
    { path: '/contact', label: 'Contact', icon: '📬' }
  ];

  const resources = [
    { path: '#', label: 'Documentation', icon: '📄' },
    { path: '#', label: 'Newsletters', icon: '📰' },
    { path: '#', label: 'Gallery', icon: '📸' },
    { path: '#', label: 'Achievements', icon: '🏆' }
  ];

  const socialLinks = [
    { 
      icon: '📘', 
      label: 'Facebook', 
      url: 'https://facebook.com/elsoc',
      color: '#1877f2'
    },
    { 
      icon: '🐦', 
      label: 'Twitter', 
      url: 'https://twitter.com/elsoc',
      color: '#1da1f2'
    },
    { 
      icon: '📷', 
      label: 'Instagram', 
      url: 'https://instagram.com/elsoc',
      color: '#e4405f'
    },
    { 
      icon: '💼', 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/company/elsoc',
      color: '#0a66c2'
    },
    { 
      icon: '▶️', 
      label: 'YouTube', 
      url: 'https://youtube.com/@elsoc',
      color: '#ff0000'
    },
    { 
      icon: '💬', 
      label: 'Discord', 
      url: '#',
      color: '#5865f2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer">
      {/* Decorative Top Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="footer-section footer-brand" variants={itemVariants}>
            <div className="footer-logo-wrapper">
              <motion.div
                className="footer-logo-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
              <h3 className="footer-logo gradient-text">ELSOC</h3>
            </div>
            
            <p className="footer-tagline">Electrical Society</p>
            
            <p className="footer-description">
              A government-recognized technical society at NIT Hamirpur fostering 
              innovation, excellence, and leadership in electrical engineering and technology.
            </p>

            {/* Stats */}
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number gradient-text">800+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number gradient-text">75+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number gradient-text">12+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4 className="footer-title">
              <span className="title-icon">🔗</span>
              Quick Links
            </h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="footer-link">
                    <span className="link-icon">{link.icon}</span>
                    <span>{link.label}</span>
                    <span className="link-arrow">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4 className="footer-title">
              <span className="title-icon">📚</span>
              Resources
            </h4>
            <ul className="footer-links">
              {resources.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.path} className="footer-link">
                    <span className="link-icon">{link.icon}</span>
                    <span>{link.label}</span>
                    <span className="link-arrow">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4 className="footer-title">
              <span className="title-icon">📞</span>
              Get in Touch
            </h4>
            <ul className="footer-info">
              <li className="info-item">
                <span className="info-icon glass-morphism">📍</span>
                <div className="info-content">
                  <span className="info-label">Address</span>
                  <span className="info-text">NIT Hamirpur, HP, India - 177005</span>
                </div>
              </li>
              <li className="info-item">
                <span className="info-icon glass-morphism">📧</span>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href="mailto:elsoc@nith.ac.in" className="info-text info-link">
                    elsoc@nith.ac.in
                  </a>
                </div>
              </li>
              <li className="info-item">
                <span className="info-icon glass-morphism">📞</span>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <a href="tel:+911972254000" className="info-text info-link">
                    +91-1972-254000
                  </a>
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="newsletter-box glass-morphism">
              <h5 className="newsletter-title">Stay Updated</h5>
              <p className="newsletter-text">Subscribe to our newsletter</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="newsletter-input"
                />
                <motion.button 
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="footer-social-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="social-title">Connect With Us</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social-link glass-morphism"
                aria-label={social.label}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  boxShadow: `0 10px 30px ${social.color}40`
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-tooltip">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="footer-bottom-content">
            <div className="copyright-section">
              <p className="copyright">
                © {currentYear} <span className="gradient-text">ELSOC</span> - Electrical Society, NIT Hamirpur.
              </p>
              <p className="rights">All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <span className="divider">•</span>
              <a href="#" className="bottom-link">Terms of Service</a>
              <span className="divider">•</span>
              <a href="#" className="bottom-link">Sitemap</a>
            </div>
            
            <div className="credits-section">
              <p className="credits">
                Crafted with <motion.span 
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ⚡
                </motion.span> by <span className="gradient-text">ELSOC Tech Team</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="footer-bg-elements">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>
      </div>
    </footer>
  );
};

export default Footer;