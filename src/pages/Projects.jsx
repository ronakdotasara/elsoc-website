import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaUsers, FaCircle } from 'react-icons/fa';
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
      description: 'Advanced IoT-based home automation using ESP32 microcontroller, enabling voice control through Alexa and mobile app integration for controlling lights, fans, appliances, and monitoring energy consumption in real-time.',
      image: 'img/home automation.png',
      technologies: ['ESP32', 'Arduino IDE', 'MQTT Protocol', 'Node-RED', 'Alexa Integration'],
      team: ['Rohan Verma', 'Sneha Patel', 'Amit Kumar'],
      year: '2025',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Autonomous Line Following Robot',
      category: 'Robotics',
      description: 'Intelligent autonomous robot with advanced PID control algorithm, capable of detecting and following colored lines with high precision. Features include obstacle avoidance using ultrasonic sensors and adaptive speed control.',
      image: 'img/linefollowing robot.avif',
      technologies: ['Arduino Uno', 'IR Sensors Array', 'L298N Motor Driver', 'PID Controller'],
      team: ['Priya Sharma', 'Karan Singh'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Solar Power Monitoring System',
      category: 'Power Systems',
      description: 'Comprehensive real-time monitoring and analysis system for solar panel efficiency with cloud-based data logging. Tracks voltage, current, power output, and environmental conditions with predictive analytics for maintenance.',
      image: 'img/solor project.jpg',
      technologies: ['Raspberry Pi', 'ACS712 Current Sensor', 'Python', 'ThingSpeak IoT', 'Data Analytics'],
      team: ['Anjali Gupta', 'Vikram Reddy', 'Sanjay Mehta'],
      year: '2025',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Gesture Controlled Car',
      category: 'Embedded',
      description: 'Innovative gesture-controlled car using accelerometer and gyroscope sensors mounted on a glove. Hand movements control car direction wirelessly through RF communication, enabling intuitive hands-free operation.',
      image: 'img/guesture control car.png',
      technologies: ['Arduino Nano', 'MPU6050 Accelerometer', 'RF Transceiver', 'DC Motors', 'Motor Driver'],
      team: ['Neha Kapoor', 'Rahul Joshi'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Industrial Automation PLC System',
      category: 'Automation',
      description: 'Professional-grade Programmable Logic Controller based automation system for industrial manufacturing processes. Features SCADA interface for real-time monitoring, control, and data visualization with alarm management.',
      image: 'public/img/plc project.webp',
      technologies: ['Allen-Bradley PLC', 'SCADA Software', 'Ladder Logic Programming', 'HMI Touch Panel'],
      team: ['Arjun Malhotra', 'Pooja Nair', 'Deepak Kumar'],
      year: '2025',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Weather Monitoring Station',
      category: 'IoT',
      description: 'Comprehensive IoT weather station measuring temperature, humidity, atmospheric pressure, and air quality index. Data is logged to cloud platform with web dashboard for visualization and historical analysis.',
      image: 'img/wheater project.jpg',
      technologies: ['ESP8266', 'DHT22 Sensor', 'BMP180 Barometer', 'MQ135 Air Quality', 'ThingSpeak'],
      team: ['Ritika Sharma', 'Varun Singh'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 7,
      title: 'Smart Energy Meter',
      category: 'Embedded',
      description: 'Digital energy meter with GSM/GPRS communication for remote monitoring and automated billing system. Measures real-time power consumption, detects theft, and sends SMS alerts for anomalies.',
      image: 'img/smart meter .jpeg',
      technologies: ['Arduino Mega', 'GSM SIM800L Module', 'ACS712 Current Sensor', '16x2 LCD Display'],
      team: ['Kavita Rao', 'Manish Tiwari'],
      year: '2024',
      status: 'Completed'
    },
    {
      id: 8,
      title: 'Fire Detection & Alert System',
      category: 'IoT',
      description: 'Intelligent fire detection system using multiple sensors (smoke, temperature, flame) with automatic fire extinguisher activation. Sends real-time alerts via SMS and mobile app with GPS location.',
      image: 'img/fire alaram project.jpg',
      technologies: ['ESP32', 'MQ-2 Smoke Sensor', 'Flame Sensor', 'GSM Module', 'Servo Motor'],
      team: ['Aditya Raj', 'Meera Iyer'],
      year: '2025',
      status: 'In Progress'
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
            Innovative solutions through hands-on learning and collaborative engineering excellence
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
                className={`category-btn glass-morphism ${selectedCategory === category ? 'active' : ''}`}
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
                  className="project-card glass-morphism"
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
                        <FaCircle size={8} /> {project.status}
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
                      <span className="project-year">
                        <FaCalendar /> {project.year}
                      </span>
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
              className="project-modal glass-morphism"
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
                  <h3>
                    <FaUsers /> Team Members
                  </h3>
                  <ul className="team-list">
                    {selectedProject.team.map((member, idx) => (
                      <li key={idx}>👤 {member}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer">
                  <span className="modal-year">
                    <FaCalendar /> Year: {selectedProject.year}
                  </span>
                  <span className={`modal-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                    <FaCircle size={8} /> {selectedProject.status}
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
