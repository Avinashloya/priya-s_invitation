import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Compass } from 'lucide-react';
import weddingData from '../data/weddingData';
import Thoranam from './Thoranam';
import WhiteJasmineGarland from './WhiteJasmineGarland';
import './Hero.css';

const Hero = () => {
  const { bride, groom } = weddingData.couple;
  const { wedding, reception, venue } = weddingData;

  const handleDirectionsClick = () => {
    window.open(venue.mapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="hero-section">
      {/* 1. Overhead Entrance Thoranam with Mango Leaves & White Jasmine */}
      <div className="hero-entrance-thoranam">
        <Thoranam />
        <WhiteJasmineGarland variant="arch" showBells={true} />
      </div>

      <div className="container hero-content">
        <motion.div 
          className="hero-mandapam-frame"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Auspicious Sacred Telugu Header (Same as old one) */}
          <div className="hero-sacred-header">
            <span className="om-symbol font-serif">॥ శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు ॥</span>
            <p className="hero-sub-blessing font-serif">Srirastu Subhamastu Avighnamastu</p>
          </div>

          <div className="ornament-divider">
            <span className="line"></span>
            <span className="icon">✦ ॐ ✦</span>
            <span className="line"></span>
          </div>

          {/* Invitation Callout */}
          <p className="hero-cordial-invite font-serif">
            With the divine blessings of our elders and almighty, we cordially invite your gracious presence at the Wedding of
          </p>

          {/* Bride Details */}
          <div className="person-block bride-block">
            <p className="person-title font-serif">{bride.title}</p>
            <h1 className="person-name gold-text font-serif">{bride.name}</h1>
            {bride.qualification && <p className="person-qual font-serif">{bride.qualification}</p>}
            <p className="family-lineage-sub font-serif">
              Daughter of {weddingData.brideParents.mother} & {weddingData.brideParents.father}
            </p>
          </div>

          {/* Sacred Wedding Knot Motif */}
          <div className="wedding-knot">
            <span className="knot-line"></span>
            <div className="knot-center-badge">
              <span className="knot-icon">💍</span>
              <span className="weds-text font-serif">weds</span>
            </div>
            <span className="knot-line"></span>
          </div>

          {/* Groom Details */}
          <div className="person-block groom-block">
            <p className="person-title font-serif">{groom.title}</p>
            <h1 className="person-name gold-text font-serif">{groom.name}</h1>
            {groom.qualification && <p className="person-qual font-serif">{groom.qualification}</p>}
            <p className="family-lineage-sub font-serif">
              Son of {weddingData.groomParents.mother} & {weddingData.groomParents.father}
            </p>
          </div>

          {/* 2. Wedding Artwork Image (Restored exactly as previous website) */}
          <div className="illustration-wrapper">
            <img 
              src={weddingData.illustration} 
              alt={`${bride.name} and ${groom.name} Wedding Artwork`} 
              className="hero-wedding-artwork" 
            />
            <div className="artwork-gold-frame"></div>
          </div>

          {/* 3. Highlighted Reception Summary Card (Wednesday, 25th November 2026) */}
          <div className="hero-event-summary reception-highlight">
            <div className="hero-summary-badge font-serif">
              <Sparkles size={13} />
              <span>WEDDING RECEPTION</span>
            </div>

            <div className="summary-item">
              <Calendar className="summary-icon" size={18} />
              <div>
                <span className="summary-label font-serif">Date</span>
                <p className="summary-value font-serif">{reception?.displayDate || "Wednesday, 25th November 2026"}</p>
              </div>
            </div>

            <div className="summary-item">
              <Clock className="summary-icon" size={18} />
              <div>
                <span className="summary-label font-serif">Reception Time</span>
                <p className="summary-value font-serif">{reception?.displayTime || "6:00 PM onwards"}</p>
              </div>
            </div>

            <div className="summary-item">
              <MapPin className="summary-icon" size={18} />
              <div>
                <span className="summary-label font-serif">Venue</span>
                <p className="summary-value font-serif">{venue.name}, {venue.city}</p>
              </div>
            </div>
          </div>

          {/* 4. Main Sumuhurtham Summary Card (Thursday, 26th November 2026) */}
          <div className="hero-event-summary sumuhurtham-highlight">
            <div className="hero-summary-badge sumuhurtham-header-badge font-serif">
              <Sparkles size={13} />
              <span>MAIN SUMUHURTHAM</span>
            </div>

            <div className="summary-item">
              <Calendar className="summary-icon" size={18} />
              <div>
                <span className="summary-label font-serif">Date</span>
                <p className="summary-value font-serif">{wedding.displayDate}</p>
              </div>
            </div>

            <div className="summary-item">
              <Clock className="summary-icon" size={18} />
              <div>
                <span className="summary-label font-serif">Auspicious Lagnam</span>
                <p className="summary-value font-serif">{wedding.displayTime} ({wedding.lagnam})</p>
                <span className="summary-subtext font-serif">{wedding.nakshatram}</span>
              </div>
            </div>

            <div className="summary-item">
              <MapPin className="summary-icon" size={18} />
              <div>
                <span className="summary-label font-serif">Venue</span>
                <p className="summary-value font-serif">{venue.name}, {venue.address}</p>
              </div>
            </div>
          </div>

          {/* Directions Quick Action Button */}
          <div className="hero-action-container">
            <button className="btn-gold hero-map-btn font-serif" onClick={handleDirectionsClick}>
              <Compass size={17} />
              <span>GET DIRECTIONS TO VENUE</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
