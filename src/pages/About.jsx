import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Our Vision',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. To be the leading technical society fostering innovation, excellence, and leadership in electrical engineering and related technologies at NIT Hamirpur and beyond.'
    },
    {
      icon: '🚀',
      title: 'Our Mission',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empowering students through hands-on learning, industry exposure, cutting-edge projects, and collaborative initiatives that bridge the gap between academia and industry.'
    },
    {
      icon: '⚡',
      title: 'Core Values',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Innovation, integrity, collaboration, excellence, and continuous learning form the foundation of everything we do at ELSOC.'
    },
    {
      icon: '🎓',
      title: 'Our Approach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Combining theoretical knowledge with practical application through workshops, seminars, competitions, and real-world projects.'
    }
  ];

  const objectives = [
    'Foster technical excellence and innovation in electrical engineering',
    'Provide hands-on learning opportunities through workshops and projects',
    'Bridge the gap between academic knowledge and industry requirements',
    'Organize technical events, competitions, and guest lectures',
    'Build a strong community of tech enthusiasts and future leaders',
    'Promote research and development in emerging technologies',
    'Facilitate networking with industry professionals and alumni',
    'Encourage interdisciplinary collaboration and teamwork'
  ];

  const achievements = [
    { year: '2015', title: 'Society Founded', description: 'ELSOC established at NIT Hamirpur' },
    { year: '2018', title: 'National Recognition', description: 'Awarded Best Technical Society' },
    { year: '2021', title: '500+ Members', description: 'Reached milestone membership' },
    { year: '2025', title: 'Decade of Excellence', description: 'Celebrating 10 years of innovation' }
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About ELSOC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Electrical Society - Empowering Innovation at NIT Hamirpur
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-heading">Who We Are</h2>
            <p className="intro-text">
             ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, stands as a beacon of innovation and excellence, cultivating intellectual curiosity and analytical rigor among aspiring engineers. It provides a platform where theoretical knowledge converges with inventive exploration, inspiring students to excel in the ever-evolving domain of electrical engineering.

            </p>
            <p className="intro-text">
              Over the course of the year, ELSOC curates an array of workshops, expert lectures, and innovative projects and  experiments, enabling members to translate conceptual understanding into tangible solutions. Students engage with advanced simulation frameworks, microcontroller-driven projects, and empirical investigations of intricate electrical phenomena.

            </p>

            <p className="intro-text">
             By fostering creativity, technical acumen, and a relentless spirit of inquiry, ELSOC molds engineers capable of transcending conventional paradigms, devising pioneering solutions, and effecting transformative contributions to the rapidly advancing technological landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Objectives</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Key goals driving our mission forward.
            </p>
          </motion.div>

          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="objective-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className="objective-icon">✓</span>
                <p>{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Milestones that shaped our legacy.
            </p>
          </motion.div>

          <div className="timeline">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{achievement.year}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Join Us?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Become part of our growing community.</p>
            <motion.a
              href="/contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started →
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
