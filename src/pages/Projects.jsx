import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'IoT', 'Robotics', 'Power Systems', 'Embedded', 'Automation'];

  const projectsData = [
    {
      id: 1,
      title: 'Smart Home Automation System',
      category: 'IoT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IoT-based home automation using ESP32, enabling voice control and mobile app integration for lights, fans, and appliances.',
      image: 'https://via.placeholder.com/400x300/5b00b7/ffffff?text=Smart+Home',
      technologies: ['ESP32', 'Arduino', 'MQTT', 'Node-RED'],
      team: ['Rohan Verma', 'Sneha Patel', 'Amit Kumar'],
      year: '2025',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Autonomous Line Following Robot',
      category: 'Robotics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Advanced robot with PID control algorithm, capable of detecting and following colored lines with obstacle avoidance.',
      image: 'https://via.placeholder.com/400x300/8b00ff/ffffff?text=Robot',
      technologies: ['Arduino', 'IR Sensors', 'Motor Drivers', 'PID'],
      team: ['Priya Sharma', 'Karan Singh'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Solar Power Monitoring System',
      category: 'Power Systems',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Real-time monitoring and analysis of solar panel efficiency with cloud-based data logging and analytics.',
      image: 'https://via.placeholder.com/400x300/a855f7/ffffff?text=Solar+Monitor',
      technologies: ['Raspberry Pi', 'Current Sensors', 'Python', 'IoT'],
      team: ['Anjali Gupta', 'Vikram Reddy', 'Sanjay Mehta'],
      year: '2025',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Gesture Controlled Wheelchair',
      category: 'Embedded',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Assistive technology enabling wheelchair control through hand gestures using accelerometer and gyroscope sensors.',
      image: 'https://via.placeholder.com/400x300/5b00b7/ffffff?text=Wheelchair',
      technologies: ['Arduino', 'Accelerometer', 'Bluetooth', 'DC Motors'],
      team: ['Neha Kapoor', 'Rahul Joshi'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Industrial Automation PLC System',
      category: 'Automation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Programmable Logic Controller based automation for industrial processes with SCADA interface.',
      image: 'https://via.placeholder.com/400x300/8b00ff/ffffff?text=PLC+System',
      technologies: ['PLC', 'SCADA', 'Ladder Logic', 'HMI'],
      team: ['Arjun Malhotra', 'Pooja Nair', 'Deepak Kumar'],
      year: '2025',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Weather Monitoring Station',
      category: 'IoT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive weather station measuring temperature, humidity, pressure, and air quality with web dashboard.',
      image: 'https://via.placeholder.com/400x300/a855f7/ffffff?text=Weather+Station',
      technologies: ['ESP8266', 'DHT22', 'BMP180', 'ThingSpeak'],
      team: ['Ritika Sharma', 'Varun Singh'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 7,
      title: 'Drone for Agricultural Monitoring',
      category: 'Robotics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quadcopter drone equipped with cameras for crop health monitoring and pesticide spraying.',
      image: 'https://via.placeholder.com/400x300/5b00b7/ffffff?text=Agri+Drone',
      technologies: ['Arduino', 'GPS', 'Camera', 'RF Module'],
      team: ['Aditya Raj', 'Meera Iyer', 'Suresh Kumar'],
      year: '2025',
      status: 'In Progress'
    },
    {
      id: 8,
      title: 'Smart Energy Meter',
      category: 'Embedded',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Digital energy meter with GSM communication for remote monitoring and automated billing.',
      image: 'https://via.placeholder.com/400x300/8b00ff/ffffff?text=Energy+Meter',
      technologies: ['Arduino', 'GSM Module', 'Current Sensor', 'LCD'],
      team: ['Kavita Rao', 'Manish Tiwari'],
      year: '2024',
      status: 'Completed'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Innovation through hands-on learning
          </motion.p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="projects-content">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag">+{project.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="project-footer">
                      <span className="project-year">🗓️ {project.year}</span>
                      <button className="view-details-btn">
                        View Details →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />

              <div className="modal-content">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="modal-tech">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Team Members</h3>
                  <ul className="team-list">
                    {selectedProject.team.map((member, idx) => (
                      <li key={idx}>👤 {member}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer">
                  <span className="modal-year">Year: {selectedProject.year}</span>
                  <span className={`modal-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
