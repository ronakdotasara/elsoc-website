import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const eventsData = {
    upcoming: [
      {
        title: 'Workshop #1 - AI-emma Robot',
        date: 'October 31, 2025 (Tentative)',
        time: '2:00 PM - 4:00 PM',
        location: 'Main Lab, EE Department',
        description: 'Comprehensive hands-on workshop covering Robotics fundamentals, electrical project simulations, and practical applications for engineering students.',
        category: 'Workshop',
        image: 'img/16.webp',
        status: 'upcoming',
        registrationLink: '#'
      },
      
    ],
    past: [
      {
        title: 'Blockchain Workshop',
        date: 'February 4, 2022',
        time: '3:00 PM',
        location: 'YouTube Live',
        description: 'Interactive online workshop on blockchain technology and cryptocurrency fundamentals, featuring a live quiz competition with exciting prizes for participants.',
        category: 'Workshop',
        image: 'img/blockchain.png',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'Intern Talk - Research Internships',
        date: 'August 29, 2022',
        time: '6:00 PM',
        location: 'Auditorium, NIT Hamirpur',
        description: 'Inspiring session with ELSOC members sharing their research internship experiences at DRDO, RWTH Aachen Germany, NTU Singapore, TU Darmstadt, and IISc Bangalore.',
        category: 'Seminar',
        image: 'https://via.placeholder.com/400x250/8b00ff/ffffff?text=Intern+Talk',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'MATLAB Workshop',
        date: 'October 21, 2022',
        time: '4:00 PM - 6:00 PM',
        location: 'NEW-LH, NIT Hamirpur',
        description: 'Programming platform workshop designed for engineers and scientists to analyze systems, design products, and create solutions using MATLAB simulations.',
        category: 'Workshop',
        image: 'img/15.jpeg',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'Lightning Unleashed (ELSOC X OJAS)',
        date: 'February 10, 2023',
        time: '5:00 PM',
        location: 'Electrical Department, NIT Hamirpur',
        description: 'Collaborative event showcasing high-voltage demonstrations including insulation breakdown, corona discharge, power transformers, earth testing, and 33kV transformer limbs.',
        category: 'Exhibition',
        image: 'img/corona.jpeg',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'KUIZZ-i-THON',
        date: 'September 1, 2023',
        time: '5:30 PM',
        location: 'LH G2, NIT Hamirpur',
        description: 'Technical quiz competition covering general science, space exploration, history of engineering, and current affairs with exciting prizes for winners.',
        category: 'Competition',
        image: 'img/kuiz.png',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'Circuits of Opportunities Workshop',
        date: 'October 18, 2023',
        time: '5:00 PM',
        location: 'LH G2, NIT Hamirpur',
        description: 'Career guidance workshop exploring diverse opportunities in finance, civil services, IT, core engineering, and defence sectors for electrical engineers.',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x250/5b00b7/ffffff?text=Career+Workshop',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'TECHLETICS (OJAS X ELSOC)',
        date: 'April 10, 2024',
        time: '5:00 PM',
        location: 'SAC, NIT Hamirpur',
        description: 'Thrilling fusion of innovation and competition featuring technical challenges, robotics demonstrations, and collaborative engineering projects.',
        category: 'Competition',
        image: 'img/techictics.png',
        status: 'completed',
        registrationLink: '#'
      }
    ]
  };

  const filteredEvents = eventsData[activeTab] || [];

  return (
    <motion.div
      className="events-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Events & Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover ELSOC's technical events, workshops, and learning opportunities designed to empower aspiring electrical engineers
          </motion.p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="events-content">
        <div className="container">
          <div className="events-tabs">
            <button
              className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <span className="tab-icon">📅</span>
              Upcoming Events
              <span className="tab-count">{eventsData.upcoming.length}</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <span className="tab-icon">📚</span>
              Past Events
              <span className="tab-count">{eventsData.past.length}</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="events-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))
              ) : (
                <div className="no-events">
                  <span className="no-events-icon">📭</span>
                  <h3>No Events Found</h3>
                  <p>Check back later for exciting updates!</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Events;
