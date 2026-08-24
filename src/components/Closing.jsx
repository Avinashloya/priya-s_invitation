import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Closing.css';

const Closing = () => {
  const { bride, groom } = weddingData.couple;

  return (
    <footer className="closing-section">
      <motion.div 
        className="closing-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="closing-gold-frame">
          <div className="closing-corner top-l"></div>
          <div className="closing-corner top-r"></div>
          <div className="closing-corner bottom-l"></div>
          <div className="closing-corner bottom-r"></div>

          {/* Mandap / Lotus Symbol */}
          <div className="closing-symbol font-serif">
            🪷
          </div>

          <h2 className="closing-message gold-text-bright font-serif">
            We can't wait to celebrate this beautiful day with you
          </h2>

          <div className="heart-pulse-container">
            <Heart className="heart-icon-closing" size={28} fill="#d4af37" color="#d4af37" />
          </div>

          <div className="couple-closing-name-block">
            <h3 className="closing-name-line">{bride.name}</h3>
            <div className="closing-amp-wrapper">
              <span className="and-symbol-closing">&</span>
            </div>
            <h3 className="closing-name-line">{groom.name}</h3>
          </div>

          <div className="closing-divider">
            <span className="line"></span>
            <Sparkles size={14} className="sparkle" />
            <span className="line"></span>
          </div>

          <p className="closing-footer-date font-serif">
            {weddingData.wedding.displayDate} • {weddingData.venue.city}
          </p>

          <p className="copyright-notice">
            Designed with devotion for Keerthi Priya & Venkata Ramanaiah Wedding
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Closing;
