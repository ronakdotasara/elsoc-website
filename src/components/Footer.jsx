import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { Icon: FaFacebook, url: 'https://www.facebook.com/elsoc.nith/', label: 'Facebook' },
    { Icon: FaInstagram, url: 'https://www.instagram.com/elsoc_nith/', label: 'Instagram' },
    { Icon: FaLinkedin, url: 'https://in.linkedin.com/company/elsoc-nit-hamirpur', label: 'LinkedIn' }
  ];

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Content */}
        <div className="footer-main">
          
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="brand-name">ELSOC</h3>
            <p className="brand-tagline">Electrical Engineering Society</p>
            <p className="brand-desc">
              Empowering innovation and excellence at NIT Hamirpur through cutting-edge projects and collaborative learning.
            </p>
            
            {/* Quick Stats */}
            <div className="footer-stats">
              <div className="stat">
                <span className="stat-value">35+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-value">10+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat">
                <span className="stat-value">33</span>
                <span className="stat-label">Members</span>
              </div>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-list">
              <a href="mailto:elsoc@nith.ac.in" className="contact-item">
                <FaEnvelope size={16} />
                <span>elsoc@nith.ac.in</span>
              </a>
              <a href="tel:+911972254000" className="contact-item">
                <FaPhone size={16} />
                <span>+91-1972-254000</span>
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt size={16} />
                <span>NIT Hamirpur, HP - 177005</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            className="footer-newsletter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-title">Stay Connected</h4>
            <p className="newsletter-text">Get updates on events and projects</p>
            <div className="newsletter-input-wrapper">
              <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <motion.button 
                className="newsletter-btn"
                onClick={handleSubscribe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane size={16} />
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="copyright">
            © {currentYear} ELSOC, NIT Hamirpur. All rights reserved.
          </p>
          <p className="credits">Maintained by ELSOC Web Dev Team</p>
        </motion.div>

      </div>

      {/* Background Gradient */}
      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer;