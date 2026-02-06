import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

const galleryEvents = [
  {
    id: "ai emma workshop",
    title: "AI-emma Workshop",
    year: "2024",
    images: [
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
    ]
  }
];

const Gallery = () => {
  // ✅ DEFAULT = FIRST EVENT (IMPORTANT FIX)
  const [activeEvent, setActiveEvent] = useState(galleryEvents[0]);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Event Gallery</h1>
          <p>Moments captured from our workshops, competitions & events</p>
        </div>
      </section>

      {/* Content */}
      <section className="gallery-content">
        {/* Event Buttons */}
        <div className="event-filter">
          {galleryEvents.map((event) => (
            <button
              key={event.id}
              className={`event-btn ${
                activeEvent.id === event.id ? "active" : ""
              }`}
              onClick={() => setActiveEvent(event)}
            >
              {event.title}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            className="gallery-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeEvent.images.map((img, index) => (
              <motion.div
                key={index}
                className="gallery-card"
                whileHover={{ y: -8 }}
              >
                <img src={img} alt={`${activeEvent.title} ${index + 1}`} />
                <div className="gallery-overlay">
                  <span>{activeEvent.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Gallery;
