import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, MapPin } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Events.css';

const Events = () => {
  const { wedding, venue, events } = weddingData;

  return (
    <section id="events" className="events-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <Calendar size={16} />
          <span>CELEBRATIONS</span>
        </div>
        <h2 className="section-title gold-text">Wedding Events & Schedule</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-serif">🪔</span>
          <span className="line"></span>
        </div>
      </motion.div>

      {/* Main Sumuhurtham Card */}
      <motion.div 
        className="sumuhurtham-grand-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-ornamental-corner top-left"></div>
        <div className="card-ornamental-corner top-right"></div>
        <div className="card-ornamental-corner bottom-left"></div>
        <div className="card-ornamental-corner bottom-right"></div>

        <div className="sumuhurtham-badge">
          <Sparkles size={16} className="sparkle" />
          <span>MAIN SUMUHURTHAM</span>
          <Sparkles size={16} className="sparkle" />
        </div>

        <h3 className="sumuhurtham-title font-serif">Divine Wedding Ceremony</h3>

        <div className="time-date-box">
          <div className="date-display">
            <span className="day-name">SATURDAY</span>
            <span className="date-number">05</span>
            <span className="month-year">SEPTEMBER 2026</span>
          </div>

          <div className="time-display">
            <Clock size={20} className="clock-icon" />
            <span className="exact-time">11:05 P.M.</span>
          </div>
        </div>

        {/* Nakshatram & Lagnam Box */}
        <div className="astro-details-box">
          <div className="astro-item">
            <span className="astro-label">NAKSHATRAM</span>
            <span className="astro-value">{wedding.nakshatram}</span>
          </div>
          <div className="astro-divider"></div>
          <div className="astro-item">
            <span className="astro-label">LAGNAM</span>
            <span className="astro-value">{wedding.lagnam}</span>
          </div>
        </div>

        <p className="venue-note font-serif">
          At <strong>{venue.name}</strong>, {venue.city}
        </p>
      </motion.div>

      {/* Events List Grid (Haldi, Pellikuthuru, Sumuhurtham, Dinner) */}
      <div className="events-grid">
        {events.map((evt, idx) => (
          <motion.div 
            key={evt.id || idx}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="event-header-row">
              <span className="event-icon font-serif">{evt.icon || "✨"}</span>
              <div>
                <h4 className="event-title font-serif">{evt.name}</h4>
                <p className="event-subtitle">{evt.details}</p>
              </div>
            </div>

            <div className="event-meta-row">
              <div className="meta-pill">
                <Calendar size={14} />
                <span>{evt.displayDate}</span>
              </div>
              <div className="meta-pill">
                <Clock size={14} />
                <span>{evt.displayTime}</span>
              </div>
              <div className="meta-pill">
                <MapPin size={14} />
                <span>{evt.venue || venue.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
