import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEye, 
  FaRocket, 
  FaBolt, 
  FaGraduationCap, 
  FaCheckCircle,
  FaTrophy,
  FaUsers,
  FaCalendar,
  FaLightbulb
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      Icon: FaEye,
      title: 'Our Vision',
      description: 'To be the leading technical society at NIT Hamirpur, fostering innovation, excellence, and leadership in electrical engineering, empowering students to become pioneers in emerging technologies and contribute meaningfully to society.'
    },
    {
      Icon: FaRocket,
      title: 'Our Mission',
      description: 'Empowering students through hands-on learning, industry collaborations, cutting-edge projects, and expert mentorship that bridges theoretical knowledge with practical application, preparing future-ready electrical engineers.'
    },
    {
      Icon: FaBolt,
      title: 'Core Values',
      description: 'Innovation, integrity, collaboration, excellence, and continuous learning form the foundation of ELSOC. We believe in pushing boundaries, embracing challenges, and creating solutions that make a real-world impact.'
    },
    {
      Icon: FaGraduationCap,
      title: 'Our Approach',
      description: 'Combining academic rigor with practical experience through workshops, hackathons, guest lectures, and industry visits. We focus on holistic development, technical expertise, and leadership skills for every member.'
    }
  ];

  const objectives = [
    'Foster technical excellence and innovation in electrical engineering',
    'Provide hands-on learning through workshops, labs, and real-world projects',
    'Bridge the gap between academic knowledge and industry requirements',
    'Organize technical events, competitions, and expert guest lectures',
    'Build a strong community of passionate engineers and tech enthusiasts',
    'Promote research and development in emerging technologies like IoT, AI/ML, and Renewable Energy',
    'Facilitate networking with industry professionals, alumni, and researchers',
    'Encourage interdisciplinary collaboration across engineering domains'
  ];

  const achievements = [
    { 
      year: '2020', 
      title: 'ELSOC Established', 
      description: 'Founded as the official Electrical Engineering Society at NIT Hamirpur',
      Icon: FaTrophy
    },
    { 
      year: '2022', 
      title: 'First Major Workshop', 
      description: 'Successfully conducted Blockchain Workshop with 150+ participants',
      Icon: FaUsers
    },
    { 
      year: '2023', 
      title: 'Industry Collaboration', 
      description: 'Partnered with leading companies for internship talks and tech sessions',
      Icon: FaLightbulb
    },
    { 
      year: '2025', 
      title: '5 Years of Excellence', 
      description: 'Celebrating 5 years with 33 active members, 35+ projects, and 10+ annual events',
      Icon: FaCalendar
    }
  ];

  const domains = [
    {
      Icon: FaBolt,
      title: 'Power Systems',
      description: 'Exploring smart grids, renewable energy, and advanced power distribution systems'
    },
    {
      Icon: FaLightbulb,
      title: 'IoT & Embedded Systems',
      description: 'Building connected devices, sensor networks, and intelligent automation solutions'
    },
    {
      Icon: FaRocket,
      title: 'Control & Automation',
      description: 'Designing intelligent control systems, robotics, and industrial automation'
    },
    {
      Icon: FaGraduationCap,
      title: 'Signal Processing',
      description: 'Working with AI/ML, data analysis, and advanced signal processing techniques'
    }
  ];

  const whyJoinReasons = [
    {
      Icon: FaUsers,
      title: 'Community',
      description: '33 passionate members working on cutting-edge projects'
    },
    {
      Icon: FaCalendar,
      title: 'Events',
      description: '10+ workshops, hackathons, and tech talks every year'
    },
    {
      Icon: FaLightbulb,
      title: 'Learning',
      description: 'Hands-on experience with latest technologies and tools'
    },
    {
      Icon: FaTrophy,
      title: 'Recognition',
      description: 'Certificates, networking opportunities, and portfolio projects'
    }
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
              Over the course of the year, ELSOC curates an array of workshops, expert lectures, and innovative projects and experiments, enabling members to translate conceptual understanding into tangible solutions. Students engage with advanced simulation frameworks, microcontroller-driven projects, and empirical investigations of intricate electrical phenomena.
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
                className="feature-card glass-morphism"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <feature.Icon className="feature-icon-modern" size={50} />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Domains */}
      <section className="domains-overview-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-text">Our Technical Domains</h2>
            <p className="section-subtitle">
              Explore the diverse areas where ELSOC members innovate and excel
            </p>
          </motion.div>

          <div className="domains-overview-grid">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="domain-overview-card glass-morphism"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <domain.Icon className="domain-overview-icon" size={40} />
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
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
            <h2 className="section-title gradient-text">Our Objectives</h2>
            <p className="section-subtitle">
              Key goals driving our mission to create future-ready electrical engineers
            </p>
          </motion.div>

          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="objective-item glass-morphism"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ x: 10 }}
              >
                <FaCheckCircle className="objective-icon-modern" />
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
            <h2 className="section-title gradient-text">Our Journey</h2>
            <p className="section-subtitle">
              Milestones that shaped ELSOC's legacy of excellence and innovation
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
                <div className="timeline-content glass-morphism">
                  <achievement.Icon className="timeline-icon" size={40} />
                  <span className="timeline-year">{achievement.year}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-text">Why Join ELSOC?</h2>
            <p className="section-subtitle">
              Discover the benefits of being part of NIT Hamirpur's premier technical society
            </p>
          </motion.div>

          <div className="why-join-grid">
            {whyJoinReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="why-join-card glass-morphism"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <reason.Icon className="why-join-icon" size={50} />
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content glass-morphism"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text">Ready to Join Us?</h2>
            <p>Become part of ELSOC and unlock opportunities for learning, innovation, and professional growth in electrical engineering.</p>
            <motion.button
              className="btn-primary"
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
