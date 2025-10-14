import React from 'react';
import { motion } from 'framer-motion';
import './EventCard.css';

const EventCard = ({ event }) => {
  const {
    title = 'Event Title',
    date = 'TBA',
    time = 'TBA',
    location = 'NIT Hamirpur',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category = 'Workshop',
    image = 'https://via.placeholder.com/400x250/5b00b7/ffffff?text=Event+Image',
    status = 'upcoming',
    registrationLink = '#'
  } = event || {};

  const getStatusColor = () => {
    switch (status) {
      case 'upcoming':
        return '#00ff00';
      case 'ongoing':
        return '#ffd700';
      case 'completed':
        return '#888888';
      default:
        return '#5b00b7';
    }
  };

  const getStatusLabel = () => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <motion.div
      className="event-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="event-card-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="event-card-overlay">
          <span className="event-category">{category}</span>
          <span 
            className="event-status"
            style={{ background: getStatusColor() }}
          >
            {getStatusLabel()}
          </span>
        </div>
      </div>

      <div className="event-card-content">
        <div className="event-date-ribbon">
          <span className="event-date-icon">📅</span>
          <span className="event-date-text">{date}</span>
        </div>

        <h3 className="event-title">{title}</h3>
        
        <div className="event-details">
          <div className="event-detail-item">
            <span className="event-icon">🕒</span>
            <span>{time}</span>
          </div>
          <div className="event-detail-item">
            <span className="event-icon">📍</span>
            <span>{location}</span>
          </div>
        </div>

        <p className="event-description">{description}</p>

        {status === 'upcoming' && (
          <motion.a
            href={registrationLink}
            className="event-register-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now →
          </motion.a>
        )}

        {status === 'ongoing' && (
          <motion.button
            className="event-ongoing-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        )}

        {status === 'completed' && (
          <motion.button
            className="event-completed-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Gallery
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
