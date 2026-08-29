import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Maximize2 } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={item.url} 
                alt={item.caption || `Keerthi Priya & Venkata Ramanaiah ${index + 1}`} 
                className="gallery-image"
                loading="lazy"
              />

              <div className="gallery-hover-overlay">
                <Maximize2 size={28} color="#ffffff" className="hover-icon" />

                <span className="hover-caption font-serif">
                  {item.caption}
                </span>

                {item.subcaption && (
                  <span className="hover-subcaption">
                    {item.subcaption}
                  </span>
                )}
              </div>
            </div>

            <div className="gallery-card-caption-bar">
              <h4 className="card-caption-title font-serif">
                {item.caption}
              </h4>
            </div>

            <div className="gallery-frame-border"></div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img src={selectedImage.url} alt={selectedImage.caption} className="lightbox-image" />
              {selectedImage.caption && (
                <div className="lightbox-caption-wrapper">
                  <p className="lightbox-caption font-serif">{selectedImage.caption}</p>
                  {selectedImage.subcaption && (
                    <p className="lightbox-subcaption">{selectedImage.subcaption}</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
