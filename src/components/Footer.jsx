import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
    { path: '/events', label: 'Workshops', icon: '🛠️' },
    { path: '/events', label: 'Hackathons', icon: '💻' },
    { path: '/projects', label: 'Projects', icon: '📸' },
    { path: '/team', label: 'Our Team', icon: '🏆' }
  ];

  const socialLinks = [
    { 
      Icon: FaFacebook,
      label: 'Facebook', 
      url: 'https://www.facebook.com/elsoc.nith/',
      color: '#1877f2'
    },
    { 
      Icon: FaInstagram,
      label: 'Instagram', 
      url: 'https://www.instagram.com/elsoc_nith/',
      color: '#e4405f'
    },
    { 
      Icon: FaLinkedin,
      label: 'LinkedIn', 
      url: 'https://in.linkedin.com/company/elsoc-nit-hamirpur',
      color: '#0077b5'
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
              The Departmental Society of Electrical Engineering at NIT Hamirpur, empowering aspiring engineers through innovation, collaboration, and excellence.
            </p>

            {/* Stats */}
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number gradient-text">35+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number gradient-text">10+</span>
                <span className="stat-label">Events/Year</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number gradient-text">33</span>
                <span className="stat-label">Team Members</span>
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
              Explore
            </h4>
            <ul className="footer-links">
              {resources.map((link, index) => (
                <motion.li 
                  key={index}
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
                style={{ color: social.color }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  boxShadow: `0 10px 30px ${social.color}40`
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.Icon className="social-icon" size={28} />
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
              <Link to="/about" className="bottom-link">About Us</Link>
              <span className="divider">•</span>
              <Link to="/events" className="bottom-link">Events</Link>
              <span className="divider">•</span>
              <Link to="/contact" className="bottom-link">Contact</Link>
            </div>
            
            <div className="credits-section">
              <p className="credits">
                Maintained with <motion.span 
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ⚡
                </motion.span> by <span className="gradient-text">ELSOC Web Dev Team</span>
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
