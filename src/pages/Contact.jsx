import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'elsoc@nith.ac.in',
      link: 'mailto:elsoc@nith.ac.in'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91-1972-254000',
      link: 'tel:+911972254000'
    },
    {
      icon: '📍',
      title: 'Address',
      content: 'NIT Hamirpur, Himachal Pradesh, India - 177005',
      link: 'https://maps.google.com/?q=NIT+Hamirpur'
    }
  ];

  const socialLinks = [
    { 
      platform: 'Facebook', 
      Icon: FaFacebook, 
      url: 'https://www.facebook.com/elsoc.nith/', 
      color: '#1877f2' 
    },
    { 
      platform: 'Instagram', 
      Icon: FaInstagram, 
      url: 'https://www.instagram.com/elsoc_nith/', 
      color: '#e4405f' 
    },
    { 
      platform: 'LinkedIn', 
      Icon: FaLinkedin, 
      url: 'https://in.linkedin.com/company/elsoc-nit-hamirpur', 
      color: '#0077b5' 
    }
  ];

  const faqs = [
    {
      question: 'How can I become a member of ELSOC?',
      answer: 'ELSOC conducts interviews for first-year and second-year students during the recruitment drive at the beginning of each academic year. Students from all branches are welcome to apply through our official recruitment process.'
    },
    {
      question: 'Do I need to be from Electrical Engineering to join?',
      answer: 'No! ELSOC welcomes students from all branches of engineering who have a genuine interest in electrical engineering, technology, and innovation. We believe in diversity and cross-disciplinary collaboration.'
    },
    {
      question: 'What kind of events does ELSOC organize?',
      answer: 'ELSOC organizes a wide variety of events including technical workshops, hackathons, guest lectures by industry experts, coding competitions, project exhibitions, and hands-on training sessions throughout the year.'
    },
    {
      question: 'Is there any membership fee?',
      answer: 'No, membership in ELSOC is completely free for all NIT Hamirpur students. There are no fees to join or participate in most of our activities, ensuring accessibility for everyone interested.'
    }
  ];

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or want to collaborate? We'd love to hear from you and help you explore the world of electrical engineering.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                target={info.title === 'Address' ? '_blank' : '_self'}
                rel={info.title === 'Address' ? 'noopener noreferrer' : ''}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-subtitle">
                Whether you have a question about events, membership, or anything else, our team is ready to answer all your questions.
              </p>

              {formStatus.message && (
                <motion.div
                  className={`form-status ${formStatus.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              className="map-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8543814537745!2d76.52677631512648!3d31.469450981397936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a9%3A0x80b2347d4280e84d!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="NIT Hamirpur Location"
                ></iframe>
              </div>

              <div className="social-section">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for updates on events, workshops, and exciting projects!</p>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-card"
                      style={{ color: social.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.Icon className="social-card-icon" size={32} />
                      <span className="social-card-name">{social.platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about ELSOC membership, events, and activities
            </p>
          </motion.div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="faq-question">
                  <span className="faq-icon">❓</span>
                  {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
