import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Building2 } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Venue.css';

const Venue = () => {
  const { venue } = weddingData;
  const [iframeError, setIframeError] = useState(false);

  const handleOpenMap = () => {
    if (venue.mapUrl) {
      window.open(venue.mapUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const mapEmbedSrc = venue.embedUrl || "https://maps.google.com/maps?q=16.634621,80.957519&z=15&output=embed";

  return (
    <section id="venue" className="venue-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <MapPin size={16} />
          <span>LOCATION</span>
        </div>
        <h2 className="section-title gold-text">Wedding Venue</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-serif">🏰</span>
          <span className="line"></span>
        </div>
      </motion.div>

      <motion.div 
        className="venue-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="venue-header-decor">
          <Building2 className="venue-building-icon" size={28} />
          <h3 className="venue-name gold-text">{venue.name}</h3>
        </div>

        <div className="venue-address-details">
          <p className="venue-complex font-serif">{venue.complex}</p>
          <p className="venue-street">{venue.address}</p>
          <p className="venue-city-state">
            <strong>{venue.city}</strong>, {venue.state}, {venue.country}
          </p>
        </div>

        {/* Embedded Interactive Map */}
        <div className="map-frame-container">
          {!iframeError ? (
            <iframe 
              title="Wedding Venue Map"
              src={mapEmbedSrc}
              className="venue-map-iframe"
              loading="lazy"
              allowFullScreen
              onError={() => setIframeError(true)}
            ></iframe>
          ) : (
            <div className="map-fallback-box" onClick={handleOpenMap}>
              <MapPin size={32} className="fallback-pin" />
              <p className="fallback-text">Tap to view Google Map for R.K. Convention</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {venue.mapUrl && (
          <div className="venue-actions-row">
            <button className="btn-gold" onClick={handleOpenMap}>
              <Navigation size={16} />
              <span>Get Directions</span>
            </button>

            <button className="btn-outline-gold" onClick={handleOpenMap}>
              <ExternalLink size={16} />
              <span>View on Map</span>
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Venue;
