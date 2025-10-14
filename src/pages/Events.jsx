import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const eventsData = {
    upcoming: [
      {
        title: 'IoT Workshop 2025',
        date: 'November 15, 2025',
        time: '10:00 AM - 4:00 PM',
        location: 'Main Auditorium, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive hands-on workshop on Internet of Things, covering sensor integration, microcontrollers, and cloud connectivity.',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x250/5b00b7/ffffff?text=IoT+Workshop',
        status: 'upcoming',
        registrationLink: '#'
      },
      {
        title: 'Circuit Design Hackathon',
        date: 'December 5, 2025',
        time: '9:00 AM - 6:00 PM',
        location: 'Electronics Lab, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 24-hour intensive hackathon focused on innovative circuit design and PCB development challenges.',
        category: 'Competition',
        image: 'https://via.placeholder.com/400x250/8b00ff/ffffff?text=Hackathon',
        status: 'upcoming',
        registrationLink: '#'
      },
      {
        title: 'Industry Expert Talk',
        date: 'October 25, 2025',
        time: '2:00 PM - 4:00 PM',
        location: 'Seminar Hall, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interactive session with industry professionals discussing emerging technologies and career opportunities.',
        category: 'Seminar',
        image: 'https://via.placeholder.com/400x250/a855f7/ffffff?text=Expert+Talk',
        status: 'upcoming',
        registrationLink: '#'
      },
      {
        title: 'Robotics Competition 2025',
        date: 'November 30, 2025',
        time: '10:00 AM - 5:00 PM',
        location: 'Tech Arena, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inter-college robotics competition featuring autonomous bots and line-following challenges.',
        category: 'Competition',
        image: 'https://via.placeholder.com/400x250/5b00b7/ffffff?text=Robotics',
        status: 'upcoming',
        registrationLink: '#'
      },
      {
        title: 'PCB Design Masterclass',
        date: 'December 15, 2025',
        time: '11:00 AM - 3:00 PM',
        location: 'Lab 3, EE Department',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Advanced workshop on PCB design using industry-standard tools like Altium and Eagle.',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x250/8b00ff/ffffff?text=PCB+Design',
        status: 'upcoming',
        registrationLink: '#'
      }
    ],
    past: [
      {
        title: 'Arduino Workshop 2024',
        date: 'September 20, 2024',
        time: '10:00 AM - 4:00 PM',
        location: 'Main Auditorium, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beginner-friendly workshop introducing Arduino programming and electronics prototyping.',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x250/5b00b7/ffffff?text=Arduino',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'Technical Symposium 2024',
        date: 'August 10, 2024',
        time: '9:00 AM - 6:00 PM',
        location: 'Convention Center, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Annual flagship event featuring paper presentations, project exhibitions, and technical competitions.',
        category: 'Seminar',
        image: 'https://via.placeholder.com/400x250/8b00ff/ffffff?text=Symposium',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'Smart Grid Technology Seminar',
        date: 'July 15, 2024',
        time: '2:00 PM - 5:00 PM',
        location: 'Auditorium, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expert session on modern smart grid technologies and sustainable energy solutions.',
        category: 'Seminar',
        image: 'https://via.placeholder.com/400x250/a855f7/ffffff?text=Smart+Grid',
        status: 'completed',
        registrationLink: '#'
      },
      {
        title: 'MATLAB Programming Workshop',
        date: 'June 5, 2024',
        time: '10:00 AM - 4:00 PM',
        location: 'Computer Lab, NIT Hamirpur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Intensive workshop covering MATLAB fundamentals and simulation techniques.',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x250/5b00b7/ffffff?text=MATLAB',
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our technical events and learning opportunities
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
                  <p>Check back later for updates!</p>
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
