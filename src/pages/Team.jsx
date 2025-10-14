import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const teamData = {
    faculty: [
      {
        name: 'Dr. Rajesh Kumar',
        position: 'Faculty Advisor',
        department: 'Electrical Engineering',
        image: 'https://via.placeholder.com/250/5b00b7/ffffff?text=RK',
        bio: 'PhD in Power Systems with 15+ years of experience in renewable energy and smart grids.',
        email: 'rajesh.kumar@nith.ac.in',
        social: {
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'Prof. Anita Sharma',
        position: 'Co-Advisor',
        department: 'Electronics & Communication',
        image: 'https://via.placeholder.com/250/8b00ff/ffffff?text=AS',
        bio: 'Expert in VLSI Design and Embedded Systems with numerous research publications.',
        email: 'anita.sharma@nith.ac.in',
        social: {
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'Dr. Amit Verma',
        position: 'Technical Mentor',
        department: 'Computer Science',
        image: 'https://via.placeholder.com/250/a855f7/ffffff?text=AV',
        bio: 'Specializes in AI/ML and IoT applications with industry collaboration experience.',
        email: 'amit.verma@nith.ac.in',
        social: {
          linkedin: '#',
          github: '#'
        }
      }
    ],
    core: [
      {
        name: 'Rinku',
        position: 'President',
        year: 'Final Year',
        image: 'src/img/beee26bc-fde7-40bf-8bda-f10662152132 - Rinku Kumar.jpeg',
        bio: 'Leading ELSOC with a vision for innovation and technical excellence.',
        social: {
          linkedin: 'https://www.linkedin.com/in/rinku-kumar-12b11b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          github: '#'
        }
      },
      {
        name: 'Vikash Kumar Jakhar',
        position: 'Vice-President',
        year: 'Final Year',
        image: 'src/img/IMG-20250703-WA0002 - VIKASH KUMAR JAKHAR.jpg',
        bio: 'Driving technical initiatives and fostering collaborative learning.',
        social: {
          linkedin: 'https://www.linkedin.com/in/vikash-kumar-jakhar-81ab60258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Pratibha Bajia',
        position: 'General Secretary',
        year: '3rd Year',
        image: 'src/img/Pratibha Bajia~2 - PRATIBHA BAJIA-2.jpg',
        bio: 'Organizing and managing the society\'s functions and communications.',
        social: {
            linkedin: 'https://www.linkedin.com/in/pratibha-bajia-62b3a12b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Pratibha100'
        }
      },
    ],
    thirdYear: [
      {
        name: 'Suhani Dhiman',
        position: 'Coordinator- Event Organisation',
        image: 'src/img/IMG-20250913-WA0009 - SUHANI DHIMAN.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/suhani-dhiman-036b9a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'NITIN',
        position: 'Joint Secretary',
        image: 'src/img/IMG_5164 - NITIN K.jpeg',
        social: {
          linkedin: 'https://www.linkedin.com/in/nitin-21767a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          github: '#'
        }
      },
      {
        name: 'Sahil Dhiman',
        position: 'Technical Coordinator',
        image: 'src/img/IMG-20241110-WA0114 - SAHIL DHIMAN.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/sahil-dhiman-1a6b922aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'SAHIL JASWAL',
        position: 'Content Coordinator',
        image: 'src/img/Screenshot_20230309-002153~5 - SAHIL JASWAL.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/sahil-jaswal-250a51318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/SahilJaswal709'
        }
      },
      {
        name: 'Kriti Benjwal',
        position: 'Media and Marketing Head',
        image: 'src/img/IMG_20250524_175529 - KRITI BENJWAL.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/kriti-benjwal-b82864290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Vaani Chona',
        position: 'Project and Design Coordinator',
        image: 'src/img/IMG_20250913_105245 - VAANI CHONA.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/vaani-chona-6b69322b3',
          github: '#'
        }
      },
      {
        name: 'Mohit Kumar',
        position: 'Finance Coordinator',
        image: 'src/img/IMG-20250912-WA0017 - MOHIT KUMAR.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/public-profile/settings',
          github: '#'
        }
      },
      {
        name: 'Neha Singh',
        position: 'Technical Head',
        image: 'https://via.placeholder.com/200/8b00ff/ffffff?text=NS',
        specialization: 'IoT & Robotics',
        social: { linkedin: '#', github: '#' }
      },
      {
        name: 'Rohan Verma',
        position: 'Events Coordinator',
        image: 'https://via.placeholder.com/200/a855f7/ffffff?text=RV',
        specialization: 'Event Management',
        social: { linkedin: '#', github: '#' }
      }
    ],
    executive: [
      {
        name: 'Ronak Dotasara',
        year: 'Second Year',
        image: 'src/img/ronak.webp',
        social: {
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'Aryan Dhaka',
        year: 'Second Year',
        image: 'src/img/IMG_5294 - ARYAN DHAKA.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/aryan-dhaka-20635b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Sanyam Vats',
        year: 'Second Year',
        image: 'src/img/image - SANYAM VATS(1).jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/sanyam-vats-5899b4270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/sanyamvats'
        }
      },
      {
        name: 'Ritesh Maurya',
        year: 'Second Year',
        image: 'src/img/IMG_20250923_104509 - RITESH MAURYA-2.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/ritesh-maurya-953385335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Skandh Nagar',
        year: 'Second Year',
        image: 'src/img/IMG_20251014_135252 - SKANDH NAGAR.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/skandh-nagar-73b18a312/',
          github: '#'
        }
      },
      {
        name: 'Riya Choudhary',
        year: 'Second Year',
        image: 'src/img/DSC03412 - RIYA CHOUDHARY.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/riya-choudhary-0882a230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/riyachoudhary06'
        }
      },
    ]
  };

  const filters = [
    { id: 'all', label: 'All Team' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'core', label: 'Core Team' },
    { id: 'thirdYear', label: '3rd Year' },
    { id: 'executive', label: 'Executive' }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="hero-gradient"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Meet Our Team</h1>
          <p>The brilliant minds driving innovation and excellence at ELSOC</p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <motion.div
        className="filter-tabs"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="filter-container">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="team-container">
        {/* Faculty Section */}
        {(activeFilter === 'all' || activeFilter === 'faculty') && (
          <section className="team-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Faculty Advisors</h2>
              <p>Guiding us towards excellence</p>
            </motion.div>

            <div className="faculty-grid">
              {teamData.faculty.map((faculty, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="faculty-card"
                >
                  <div className="faculty-image-wrapper">
                    <img src={faculty.image} alt={faculty.name} />
                    <div className="position-badge">{faculty.position}</div>
                  </div>
                  <div className="faculty-info">
                    <h3>{faculty.name}</h3>
                    <p className="department">{faculty.department}</p>
                    <p className="bio">{faculty.bio}</p>
                    <a href={`mailto:${faculty.email}`} className="email">
                      📧 {faculty.email}
                    </a>
                    <div className="social-links">
                      <a href={faculty.social.linkedin} className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={faculty.social.github} className="social-icon github" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Core Team Section */}
        {(activeFilter === 'all' || activeFilter === 'core') && (
          <section className="team-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Core Team</h2>
              <p>Leadership that inspires</p>
            </motion.div>

            <div className="core-grid">
              {teamData.core.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="core-card"
                >
                  <div className="core-image-wrapper">
                    <img src={member.image} alt={member.name} />
                    <div className="core-overlay">
                      <div className="social-links">
                        <motion.a
                          href={member.social.linkedin}
                          className="social-icon linkedin"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </motion.a>
                        <motion.a
                          href={member.social.github}
                          className="social-icon github"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="core-details">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="year">{member.year}</p>
                    <p className="bio">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Third Year Members */}
        {(activeFilter === 'all' || activeFilter === 'thirdYear') && (
          <section className="team-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Third Year Team</h2>
              <p>Department heads and coordinators</p>
            </motion.div>

            <div className="third-year-grid">
              {teamData.thirdYear.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="member-card"
                >
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p className="position">{member.position}</p>
                    <p className="specialization">{member.specialization}</p>
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={member.social.github} className="social-icon github" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Executive Members */}
        {(activeFilter === 'all' || activeFilter === 'executive') && (
          <section className="team-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Executive Members</h2>
              <p>The backbone of ELSOC</p>
            </motion.div>

            <div className="executive-grid">
              {teamData.executive.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ scale: 1.1 }}
                  className="executive-card"
                >
                  <div className="executive-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h5>{member.name}</h5>
                  <p className="year">{member.year}</p>
                  <div className="social-links">
                    <a href={member.social.linkedin} className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={member.social.github} className="social-icon github" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Join CTA */}
      <section className="team-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for passionate individuals who want to make a difference</p>
          <motion.a
            href="/contact"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch →
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;

