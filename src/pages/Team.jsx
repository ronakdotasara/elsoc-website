import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const teamData = {
    faculty: [
      {
        name: 'Dr. OP Rahi',
        position: 'HOD, EED',
        department: 'Electrical Engineering Department',
        image: '/img/op sir.png',
        bio: 'Guiding innovation with decades of expertise, Dr. Rahi inspires students to push boundaries and achieve excellence in electrical engineering research and education.',
        email: 'oprahi@nith.ac.in'
      },
      {
        name: 'Dr. Bharti Bakshi Koul',
        position: 'Faculty Incharge, ELSOC',
        department: 'Electrical Engineering Department',
        image: '/img/BHarti maam.jpg',
        bio: 'Dedicated to nurturing young talent, Dr. Koul mentors ELSOC members with passion, fostering creativity, leadership, and technical excellence in every initiative.',
        email: 'bhartibakshi@nith.ac.in'
      },
      {
        name: 'Dr. Chandrasekaran S',
        position: 'Coordinator, ELSOC',
        department: 'Electrical Engineering Department',
        image: '/img/chandru sir.jpg',
        bio: 'Committed to advancing student learning, Dr. Chandrasekaran encourages innovation and practical application of electrical engineering concepts through hands-on projects.',
        email: 'chandru@nith.ac.in'
      },
      {
        name: 'Dr. Katam Nishanth',
        position: 'Coordinator, ELSOC',
        department: 'Electrical Engineering Department',
        image: '/img/nishant sir.jpg',
        bio: 'With a focus on research and development, Dr. Nishanth guides students in exploring emerging technologies and developing solutions for real-world challenges.',
        email: 'katam@nith.ac.in'
      }
    ],
    core: [
      {
        name: 'Rinku',
        position: 'President',
        year: 'Final Year',
        image: 'img/beee26bc-fde7-40bf-8bda-f10662152132 - Rinku Kumar.jpeg',
        bio: 'Leading ELSOC with a vision for innovation and technical excellence.',
        social: {
          linkedin: 'https://www.linkedin.com/in/rinku-kumar-12b11b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          github: '#'
        }
      },
      {
        name: 'Vikash Kumar Jakhar',
        position: 'Vice-President and Finance Secretary',
        year: 'Final Year',
        image: 'img/IMG-20250703-WA0002 - VIKASH KUMAR JAKHAR.jpg',
        bio: 'Driving technical initiatives and fostering collaborative learning.',
        social: {
          linkedin: 'https://www.linkedin.com/in/vikash-kumar-jakhar-81ab60258',
          github: '#'
        }
      },
      {
        name: 'Tanvi',
        position: 'Content and Technical head',
        year: 'Final Year',
        image: 'img/Tanvi maam-2.jpg',
        bio: 'Organizing and managing the society\'s functions and communications.',
        social: {
          linkedin: 'https://www.linkedin.com/in/tanvi-batta-a85aa726a/',
          github: 'https://github.com/Pratibha100'
        }
      }
    ],
    thirdYear: [
      {
        name: 'Pratibha Bajia',
        position: 'General Secretary',
        year: '3rd Year',
        image: 'img/Pratibha Bajia~2 - PRATIBHA BAJIA-2.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/pratibha-bajia-62b3a12b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/Pratibha100'
        }
      },
      {
        name: 'NITIN',
        position: 'Joint Secretary',
        year: '3rd Year',
        image: 'img/IMG_5164 - NITIN K-2.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/nitin-21767a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          github: '#'
        }
      },
      {
        name: 'Suhani Dhiman',
        position: 'Coordinator- Event Organisation',
        year: '3rd Year',
        image: 'img/IMG-20250913-WA0009 - SUHANI DHIMAN.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/suhani-dhiman-036b9a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Sahil Dhiman',
        position: 'Technical Coordinator',
        year: '3rd Year',
        image: 'img/IMG-20241110-WA0114 - SAHIL DHIMAN.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/sahil-dhiman-1a6b922aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'SAHIL JASWAL',
        position: 'Content Coordinator',
        year: '3rd Year',
        image: 'img/Screenshot_20230309-002153~5 - SAHIL JASWAL.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/sahil-jaswal-250a51318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/SahilJaswal709'
        }
      },
      {
        name: 'Kriti Benjwal',
        position: 'Media and Marketing Head',
        year: '3rd Year',
        image: 'img/WhatsApp Image 2025-10-14 at 22.32.14.jpeg',
        social: {
          linkedin: 'https://www.linkedin.com/in/kriti-benjwal-b82864290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Vaani Chona',
        position: 'Project and Design Coordinator',
        year: '3rd Year',
        image: 'img/IMG_20250913_105245 - VAANI CHONA.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/vaani-chona-6b69322b3',
          github: '#'
        }
      },
      {
        name: 'Mohit Kumar',
        position: 'Finance Coordinator',
        year: '3rd Year',
        image: 'img/IMG-20250912-WA0017 - MOHIT KUMAR.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/public-profile/settings',
          github: '#'
        }
      }
    ],
    executive: [
      {
        name: 'Ronak Dotasara',
        year: 'Second Year',
        image: 'img/ronak.webp',
        social: {
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'Aryan Dhaka',
        year: 'Second Year',
        image: 'img/IMG_5294 - ARYAN DHAKA.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/aryan-dhaka-20635b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Sanyam Vats',
        year: 'Second Year',
        image: 'img/image - SANYAM VATS(1).jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/sanyam-vats-5899b4270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/sanyamvats'
        }
      },
      {
        name: 'Ritesh Maurya',
        year: 'Second Year',
        image: 'img/IMG_20250923_104509 - RITESH MAURYA-2.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/ritesh-maurya-953385335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Skandh Nagar',
        year: 'Second Year',
        image: 'img/IMG_20251014_135252 - SKANDH NAGAR.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/skandh-nagar-73b18a312/',
          github: '#'
        }
      },
      {
        name: 'Riya Choudhary',
        year: 'Second Year',
        image: 'img/DSC03412 - RIYA CHOUDHARY.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/riya-choudhary-0882a230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/riyachoudhary06'
        }
      },
      {
        name: 'Vikalp chaudhary ',
        year: 'Second Year',
        image: 'img/vikalp.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/vikalp-chaudhary-581287345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
        }
      },
      {
        name: 'Priya',
        year: 'Second Year',
        image: 'img/priya.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/priya-ghangas-54a95338a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: '#'
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

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  return (
    <div className="team-page">
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
        {(activeFilter === 'all' || activeFilter === 'faculty') && (
          <section className="team-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Faculty Mentors</h2>
              <p>Guiding us towards excellence with decades of expertise</p>
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
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

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
                          <LinkedInIcon />
                        </motion.a>
                        <motion.a
                          href={member.social.github}
                          className="social-icon github"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
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

            <div className="third-year-top-row">
              {teamData.thirdYear.slice(0, 2).map((member, idx) => (
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
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                      </a>
                      <a href={member.social.github} className="social-icon github" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="third-year-grid">
              {teamData.thirdYear.slice(2).map((member, idx) => (
                <motion.div
                  key={idx + 2}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 2) * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="member-card"
                >
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p className="position">{member.position}</p>
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                      </a>
                      <a href={member.social.github} className="social-icon github" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

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
                      <LinkedInIcon />
                    </a>
                    <a href={member.social.github} className="social-icon github" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

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
