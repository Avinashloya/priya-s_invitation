import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Gallery.css';

const Gallery = () => {
  const { gallery } = weddingData;

  return (
    <section id="gallery" className="gallery-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <ImageIcon size={16} />
          <span>MEMORIES</span>
        </div>
        <h2 className="section-title gold-text">Our Moments</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-serif">📸</span>
          <span className="line"></span>
        </div>
      </motion.div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <motion.div 
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={item.url} 
                alt={item.caption || `Keerthi Priya & Venkata Ramanaiah ${index + 1}`} 
                className="gallery-image"
                loading="lazy"
              />
            </div>

            <div className="gallery-card-caption-bar">
              <h4 className="card-caption-title font-serif">
                {item.caption}
              </h4>
              {item.subcaption && (
                <p className="card-subcaption">
                  {item.subcaption}
                </p>
              )}
            </div>

            <div className="gallery-frame-border"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
