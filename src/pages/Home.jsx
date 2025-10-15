import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // ADD THIS IMPORT
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // ADD THIS LINE
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const facultyMessages = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      position: 'Head of Department',
      department: 'Electrical Engineering',
      message: 'ELSOC has been instrumental in bridging the gap between theoretical knowledge and practical application. Our students are not just learning; they are innovating and creating solutions for tomorrow.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      expertise: 'Power Systems & Smart Grid'
    },
    {
      name: 'Dr. Priya Malhotra',
      position: 'Faculty Coordinator',
      department: 'Electrical Engineering',
      message: 'The dedication and passion I witness in ELSOC members is truly inspiring. They embody the spirit of continuous learning and collaboration, pushing boundaries in electrical engineering.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      expertise: 'Control Systems & Automation'
    },
    {
      name: 'Dr. Amit Verma',
      position: 'Technical Advisor',
      department: 'Electrical Engineering',
      message: 'ELSOC represents the future of engineering excellence. The projects and initiatives undertaken here are preparing our students to be industry leaders and innovators.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      expertise: 'Renewable Energy & IoT'
    }
  ];

  const galleryImages = [
    'src/img/3.jpeg',
    'src/img/4.jpeg',
    'src/img/5.jpeg',
    'src/img/6.jpeg',
    'src/img/7.jpeg',
    'src/img/11.jpeg',
    'src/img/14.jpeg',
    'src/img/15.jpeg',
    'src/img/16.webp',
    'src/img/17.webp',
    'src/img/18.webp',      
    'src/img/19.webp',
  ];

  const upcomingEvents = [
    {
      title: 'IoT & Smart Systems Workshop 2025',
      date: 'November 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium, NIT Hamirpur',
      description: 'Dive deep into the world of Internet of Things and Smart Systems. Learn to build connected devices, implement sensor networks, and create real-world IoT applications with hands-on experience.',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
      status: 'upcoming',
      registrationLink: '#',
      participants: '150+ Expected',
      highlights: ['Hands-on Projects', 'Industry Experts', 'Certification']
    },
    {
      title: 'Circuit Design Hackathon 2025',
      date: 'December 5, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Electronics Lab, NIT Hamirpur',
      description: 'Push your limits in this intensive 24-hour hackathon. Design innovative circuits, solve real-world problems, and compete for exciting prizes. Teams will work on cutting-edge analog and digital circuit challenges.',
      category: 'Competition',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      status: 'upcoming',
      registrationLink: '#',
      participants: '200+ Teams',
      highlights: ['₹50k Prize Pool', '24hr Challenge', 'Industry Mentors']
    },
    {
      title: 'Future of Renewable Energy - Industry Expert Talk',
      date: 'October 25, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Seminar Hall, NIT Hamirpur',
      description: 'Join us for an enlightening session with leading industry professionals discussing the future of renewable energy, sustainable power systems, and career opportunities in green technology.',
      category: 'Seminar',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
      status: 'upcoming',
      registrationLink: '#',
      participants: 'Open to All',
      highlights: ['Industry Insights', 'Q&A Session', 'Networking']
    }
  ];

  const achievements = [
    { icon: '👥', number: '800+', label: 'Active Members', color: '#a855f7' },
    { icon: '🎯', number: '75+', label: 'Events Organized', color: '#ec4899' },
    { icon: '🚀', number: '150+', label: 'Projects Completed', color: '#8b5cf6' },
    { icon: '🏆', number: '12+', label: 'Years of Excellence', color: '#f472b6' }
  ];

  const domains = [
    { icon: '⚡', title: 'Power Systems', desc: 'Advanced grid technologies' },
    { icon: '🤖', title: 'Automation', desc: 'Smart control systems' },
    { icon: '🌱', title: 'Renewable Energy', desc: 'Sustainable solutions' },
    { icon: '💡', title: 'IoT & Embedded', desc: 'Connected devices' },
    { icon: '🔌', title: 'Circuit Design', desc: 'Analog & digital circuits' },
    { icon: '📡', title: 'Signal Processing', desc: 'Data analysis & AI' }
  ];

  return (
    <div className="home-page">
      {/* Animated Background */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}
      ></div>

      {/* Hero Section */}
      <motion.section className="hero-section" style={{ opacity, scale }}>
        <div className="hero-grid-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-pulse"></span>
              NIT Hamirpur's Premier Tech Society
            </motion.div>
            
            <h1 className="hero-title">
              <motion.span 
                className="hero-icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span className="gradient-text">ELSOC</span>
            </h1>
            
            <motion.p 
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Electrical Society
            </motion.p>
            
            <motion.p 
              className="hero-mission"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, empowers aspiring engineers through innovation, collaboration, and excellence. We bridge theoretical knowledge with practical application through hands-on workshops, expert lectures, cutting-edge projects, and industry collaborations. Our community fosters creativity, technical expertise, and problem-solving skills, preparing students to lead in the rapidly evolving field of electrical engineering and make meaningful contributions to technology and society.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button 
                className="btn-primary glass-morphism"
                onClick={() => navigate('/contact')}
              >
                <span>Join Our Community</span>
                <span className="btn-arrow">→</span>
              </button>
              <button 
                className="btn-secondary glass-morphism"
                onClick={() => navigate('/about')}
              >
                <span>Explore More</span>
              </button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="stat-pill">
                <span className="stat-icon">🎓</span>
                <span>800+ Members</span>
              </div>
              <div className="stat-pill">
                <span className="stat-icon">🏆</span>
                <span>75+ Events</span>
              </div>
              <div className="stat-pill">
                <span className="stat-icon">🚀</span>
                <span>150+ Projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Discover More</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.section>

      {/* Faculty Messages Section */}
      <section className="faculty-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <span className="section-tag glass-morphism">Words of Wisdom</span>
            <h2 className="section-title gradient-text">Messages from Our Faculty</h2>
            <p className="section-subtitle">
              Insights and guidance from our esteemed faculty members who mentor and inspire the next generation of electrical engineers
            </p>
          </motion.div>

          <div className="faculty-grid">
            {facultyMessages.map((faculty, index) => (
              <motion.div
                key={index}
                className="faculty-card glass-morphism"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="faculty-card-glow"></div>
                <div className="faculty-header">
                  <div className="faculty-image-wrapper">
                    <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                    <div className="faculty-image-ring"></div>
                  </div>
                  <div className="faculty-info">
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-position">{faculty.position}</p>
                    <span className="faculty-expertise">{faculty.expertise}</span>
                  </div>
                </div>
                <div className="faculty-quote-mark">"</div>
                <p className="faculty-message">{faculty.message}</p>
                <div className="faculty-footer">
                  <span className="faculty-dept">{faculty.department}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="view-team-container"
          >
            <button 
              className="btn-view-team glass-morphism"
              onClick={() => navigate('/team')}
            >
              <span className="team-icon">👥</span>
              <span>View ELSOC Team</span>
              <span className="btn-arrow">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="domains-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <span className="section-tag glass-morphism">Our Expertise</span>
            <h2 className="section-title gradient-text">Technical Domains</h2>
            <p className="section-subtitle">
              Explore diverse areas where ELSOC members innovate and excel
            </p>
          </motion.div>

          <div className="domains-grid">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="domain-card glass-morphism"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="domain-icon">{domain.icon}</div>
                <h3 className="domain-title">{domain.title}</h3>
                <p className="domain-desc">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rolling Gallery Section */}
      <section className="rolling-gallery-section">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <span className="section-tag glass-morphism">Memories</span>
            <h2 className="section-title gradient-text">Our Journey in Pictures</h2>
            <p className="section-subtitle">
              Capturing moments of innovation, collaboration, and excellence
            </p>
          </motion.div>

          <div className="gallery-wrapper">
            <motion.div 
              className="gallery-scroll"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[...galleryImages, ...galleryImages].map((img, index) => (
                <motion.div 
                  key={index} 
                  className="gallery-item"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <img src={img} alt={`Gallery ${index + 1}`} />
                  <div className="gallery-overlay">
                    <span className="gallery-icon">🔍</span>
                    <span className="gallery-text">View</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="highlights-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <span className="section-tag glass-morphism">What's Next</span>
            <h2 className="section-title gradient-text">Upcoming Events & Highlights</h2>
            <p className="section-subtitle">
              Join us for transformative workshops, competitions, and seminars designed to elevate your technical skills
            </p>
          </motion.div>

          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="event-card glass-morphism"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="event-image-wrapper">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="event-category">{event.category}</div>
                  <div className="event-image-overlay"></div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <span className="meta-icon">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <span className="meta-icon">🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="event-meta-item">
                      <span className="meta-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="event-meta-item">
                      <span className="meta-icon">👥</span>
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <p className="event-description">{event.description}</p>

                  <div className="event-highlights">
                    {event.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-badge">{highlight}</span>
                    ))}
                  </div>

                  <button className="event-register-btn">
                    <span>Register Now</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="view-all-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <button 
              className="btn-view-all glass-morphism"
              onClick={() => navigate('/events')}
            >
              <span>View All Events</span>
              <span className="btn-arrow">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <span className="section-tag glass-morphism">Our Impact</span>
            <h2 className="section-title gradient-text">ELSOC by the Numbers</h2>
          </motion.div>

          <div className="stats-grid">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item glass-morphism"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="stat-glow" style={{ background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)` }}></div>
                <div className="stat-icon-large">{stat.icon}</div>
                <h3 className="stat-number" style={{ color: stat.color }}>{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-content glass-morphism"
          >
            <div className="cta-glow"></div>
            <h2 className="cta-title gradient-text">Ready to Innovate?</h2>
            <p className="cta-text">
              Join ELSOC and be part of a community that's shaping the future of electrical engineering. 
              Access exclusive workshops, collaborate on cutting-edge projects, and network with industry leaders.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn-primary glass-morphism"
                onClick={() => navigate('/contact')}
              >
                <span>Become a Member</span>
                <span className="btn-arrow">→</span>
              </button>
              <button 
                className="btn-secondary glass-morphism"
                onClick={() => navigate('/contact')}
              >
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
