import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaCalendar, FaProjectDiagram, FaTrophy, FaFileAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showProblemModal, setShowProblemModal] = useState(false);
  const [problemImages, setProblemImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const facultyMessages = [
    {
      name: 'Dr. OP Rahi',
      position: 'HOD, EED',
      message: 'Guiding innovation with decades of expertise, Dr. Rahi inspires students to push boundaries and achieve excellence in electrical engineering research and education.',
      image: '/img/op sir.png'
    },
    {
      name: 'Dr. Bharti Bakshi Koul',
      position: 'Coordinator, ELSOC',
      image: '/img/bharti maam1.jpg',
      message: 'Dedicated to nurturing young talent, Dr. Koul mentors ELSOC members with passion, fostering creativity, leadership, and technical excellence in every initiative.',
    },
    {
      name: 'Dr. Katam Nishanth',
      position: 'Coordinator, ELSOC',
      image: '/img/nishant sir.jpg',
      message: 'With a focus on research and development, Dr. Nishanth guides students in exploring emerging technologies and developing solutions for real-world challenges.',
    },
    {
      name: 'Dr. Chandrasekaran S',
      position: 'Coordinator, ELSOC',
      image: '/img/chandru sir.jpg',
      message: 'Committed to advancing student learning, Dr. Chandrasekaran encourages innovation and practical application of electrical engineering concepts through hands-on projects.',
    }
  ];

  const galleryImages = [
    "/img/emma/emma1.jpeg",
    "/img/emma/emma2.jpeg",
    "/img/emma/emma3.jpeg",
    "/img/emma/emma4.jpeg",
    "/img/emma/emma5.jpeg",
    "/img/emma/emma6.jpeg",
    "/img/emma/emma7.jpeg",
    "/img/emma/emma8.jpeg",
    "/img/emma/emma9.jpeg",
    "/img/emma/emma10.jpeg",
    "/img/emma/emma11.jpeg",
    "/img/emma/emma12.jpeg",
  ];

  const upcomingEvents = [
    {
      title: 'Sparkathon',
      date: 'March 21-22, 2026 (Tentative)',
      time: '10:00 AM - 6:00 PM (Tentative)',
      location: 'Mini Auditorium',
      description: 'Technical quiz competition covering general science, environment, and current affairs with exciting prizes for winners.',
      category: 'Competition',
      image: '/img/emma/emma8.jpeg',
      status: 'upcoming',
      registrationLink: '#',
      participants: 'Open to All',
      problemStatements: [
        '/img/ProbStatement/1.png',
        '/img/ProbStatement/2.png',
        '/img/ProbStatement/3.png',
        '/img/ProbStatement/4.png',
        '/img/ProbStatement/5.png',
        '/img/ProbStatement/6.png',
        '/img/ProbStatement/7.png',
        '/img/ProbStatement/8.png',
        '/img/ProbStatement/9.png',
        '/img/ProbStatement/10.png',
        '/img/ProbStatement/11.png',
        '/img/ProbStatement/12.png',
        '/img/ProbStatement/13.png',
        '/img/ProbStatement/14.png',
        '/img/ProbStatement/15.png',
        '/img/ProbStatement/16.png',
        '/img/ProbStatement/17.png',
        '/img/ProbStatement/18.png',
      ],
      highlights: ['Exciting Prizes', 'Networking Opportunities', 'Skill Development']
    },
  ];

  const achievements = [
    { Icon: FaProjectDiagram, number: '35+', label: 'Projects', color: '#a855f7' },
    { Icon: FaCalendar, number: '10+', label: 'Events/Year', color: '#ec4899' },
    { Icon: FaUsers, number: '33', label: 'Team Members', color: '#8b5cf6' },
    { Icon: FaTrophy, number: '5', label: 'Years of Excellence', color: '#f472b6' }
  ];

  const domains = [
    { image: '/img/circuit.jpeg', title: 'Circuit Design', desc: 'Analog & digital circuits' },
    { image: '/img/wev dev.jpeg', title: 'Web Development', desc: 'Full-stack development' },
    { image: '/img/aiml.jpeg', title: 'AI/ML', desc: 'Artificial Intelligence & Machine Learning' },
    { image: '/img/media and marketing.jpg', title: 'Media & Marketing', desc: 'Digital content & outreach' },
    { image: '/img/finence.jpg', title: 'Finance', desc: 'Budget & fund management' },
    { image: '/img/content.webp', title: 'Content', desc: 'Technical writing & documentation' },
    { image: '/img/design.jpg', title: 'Design', desc: 'UI/UX & graphic design' },
    { image: '/img/management.jpg', title: 'Management', desc: 'Team coordination & planning' }
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

      {/* Hero Section with Background Image */}
      <motion.section className="hero-section" style={{ opacity, scale }}>
        {/* Background Image with Overlay */}
        <div className="hero-background-image"></div>
        <div className="hero-background-overlay"></div>

        {/* Corner Logos */}
        <div className="corner-logos">
          <div className="corner-logo corner-logo-left">
            <img src="/img/nithlogo.png" alt="NIT Hamirpur Logo" />
          </div>
          <div className="corner-logo corner-logo-right">
            <img src="/img/elsoc logo-modified.png" alt="ELSOC Logo" className="elsoc-corner-round" />
          </div>
        </div>

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
              <span className="gradient-text">ELSOC</span>
            </h1>

            <motion.p
              className="hero-department"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Department of Electrical Engineering
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
                <FaProjectDiagram className="stat-icon-small" />
                <span>35+ Projects</span>
              </div>
              <div className="stat-pill">
                <FaCalendar className="stat-icon-small" />
                <span>10+ Events/Year</span>
              </div>
              <div className="stat-pill">
                <FaUsers className="stat-icon-small" />
                <span>33 Members</span>
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
            <h2 className="faculty-main-title gradient-text">What's Our Faculty Say?</h2>
          </motion.div>

          <div className="faculty-cards-wrapper-4">
            {facultyMessages.map((faculty, index) => (
              <motion.div
                key={index}
                className="faculty-card-modern glass-morphism"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="faculty-image-container">
                  <img src={faculty.image} alt={faculty.name} className="faculty-photo" />
                </div>

                <div className="faculty-details">
                  <h3 className="faculty-name-large">{faculty.name}</h3>
                  <p className="faculty-position-badge">{faculty.position}</p>
                  <p className="faculty-message-text">{faculty.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                <stat.Icon className="stat-icon-large" style={{ color: stat.color }} size={50} />
                <h3 className="stat-number" style={{ color: stat.color }}>{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
                <div className="domain-image-wrapper">
                  <img src={domain.image} alt={domain.title} className="domain-image" />
                  <div className="domain-image-overlay"></div>
                </div>
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
                      <FaCalendar className="meta-icon" />
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
                      <FaUsers className="meta-icon" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <p className="event-description">{event.description}</p>

                  <div className="event-highlights">
                    {event.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-badge">{highlight}</span>
                    ))}
                  </div>

                  <div className="event-buttons">
                    <button className="event-register-btn">
                      <span>Register Now</span>
                      <span className="btn-arrow">→</span>
                    </button>

                    <button className="event-probstat-btn"
                      onClick={() => {
                        setProblemImages(event.problemStatements);
                        setCurrentImageIndex(0);
                        setShowProblemModal(true);
                      }}
                    >
                      <FaFileAlt />
                      <span>Problem Statements</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {showProblemModal && (
            <div className="problem-modal" onClick={() => setShowProblemModal(false)}>
              <div
                className="problem-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-btn"
                  onClick={() => setShowProblemModal(false)}
                >
                  ✕
                </button>

                <div className="slider-container">

                  <button
                    className="slider-btn"
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex - 1 + problemImages.length) %
                        problemImages.length
                      )
                    }
                  >
                    ◀
                  </button>

                  <img
                    src={problemImages[currentImageIndex]}
                    alt="Problem Statement"
                    className="problem-slider-image"
                  />

                  <button
                    className="slider-btn"
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex + 1) % problemImages.length
                      )
                    }
                  >
                    ▶
                  </button>

                </div>

                <p className="image-counter">
                  {currentImageIndex + 1} / {problemImages.length}
                </p>

              </div>
            </div>
          )}

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
