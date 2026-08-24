import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import weddingData from '../data/weddingData';
import Thoranam from './Thoranam';
import './Hero.css';

const Hero = () => {
  const { bride, groom } = weddingData.couple;
  const { wedding, venue } = weddingData;

  return (
    <section id="hero" className="hero-section">
      {/* Traditional South Indian Mango Leaf Thoranam Entrance Decoration */}
      <Thoranam />

      <motion.div 
        className="invitation-card-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="invitation-card-border">
          <div className="corner-decor top-left"></div>
          <div className="corner-decor top-right"></div>
          <div className="corner-decor bottom-left"></div>
          <div className="corner-decor bottom-right"></div>

          {/* Sacred Symbol */}
          <div className="hero-sacred-header">
            <span className="om-symbol font-serif">॥ శ్రీరామచంద్ర పరబ్రహ్మణే నమః ॥</span>
          </div>

          <div className="ornament-divider">
            <span className="line"></span>
            <span className="icon font-serif">❖</span>
            <span className="line"></span>
          </div>

          {/* Invitation Greeting */}
          <p className="solicit-text">
            With the divine blessings of Almighty & Our Beloved Ancestors, we cordially solicit your esteemed presence and blessings on the auspicious occasion of the Wedding Ceremony of
          </p>

          {/* Bride Details */}
          <div className="person-block bride-block">
            <p className="person-title">{bride.title}</p>
            <h1 className="person-name gold-text">{bride.name}</h1>
            <p className="person-qual">{bride.qualification}</p>
          </div>

          {/* Grand Wedding Knot Icon */}
          <div className="wedding-knot">
            <span className="knot-line"></span>
            <span className="weds-text font-script">weds</span>
            <span className="knot-line"></span>
          </div>

          {/* Groom Details */}
          <div className="person-block groom-block">
            <p className="person-title">{groom.title}</p>
            <h1 className="person-name gold-text">{groom.name}</h1>
            <p className="person-qual">{groom.qualification}</p>
          </div>

          {/* Wedding Artwork Illustration */}
          <div className="illustration-wrapper">
            <img 
              src={weddingData.illustration} 
              alt="Keerthi Priya and Venkata Ramanaiah Wedding Illustration" 
              className="hero-wedding-artwork" 
            />
            <div className="artwork-gold-frame"></div>
          </div>

          {/* Date & Time Highlights */}
          <div className="hero-event-summary">
            <div className="summary-item">
              <Calendar className="summary-icon" size={18} />
              <div>
                <span className="summary-label">Date</span>
                <p className="summary-value">{wedding.displayDate}</p>
              </div>
            </div>

            <div className="summary-item">
              <Clock className="summary-icon" size={18} />
              <div>
                <span className="summary-label">Sumuhurtham Time</span>
                <p className="summary-value">{wedding.displayTime}</p>
              </div>
            </div>

            <div className="summary-item">
              <MapPin className="summary-icon" size={18} />
              <div>
                <span className="summary-label">Venue</span>
                <p className="summary-value">{venue.name}, {venue.city}</p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
