import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Family.css';

const Family = () => {
  const { brideParents, groomParents } = weddingData;

  return (
    <section id="family" className="family-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <Users size={16} />
          <span>BLESSINGS</span>
        </div>
        <h2 className="section-title gold-text">With the Blessings of Our Families</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-script">🪷</span>
          <span className="line"></span>
        </div>
      </motion.div>

      <div className="family-cards-grid">
        {/* Bride's Family Card */}
        <motion.div
          className="family-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-top-icon">
            <span className="family-role-tag">Bride's Family</span>
          </div>

          <h3 className="family-card-heading font-serif">Daughter of</h3>

          <div className="parent-names">
            <p className="parent-name">{brideParents.father}</p>
            <span className="and-symbol font-script">&</span>
            <p className="parent-name">{brideParents.mother}</p>
          </div>

          <div className="family-location">
            <span className="location-pin font-serif">📍 {brideParents.location}</span>
          </div>
        </motion.div>

        {/* Center Golden Floral Separator */}
        <div className="family-divider-center">
          <Heart size={20} className="heart-center-icon" />
        </div>

        {/* Groom's Family Card */}
        <motion.div
          className="family-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="card-top-icon">
            <span className="family-role-tag">Groom's Family</span>
          </div>

          <h3 className="family-card-heading font-serif">Son of</h3>

          <div className="parent-names">
            <p className="parent-name">{groomParents.father}</p>
            <span className="and-symbol font-script">&</span>
            <p className="parent-name">{groomParents.mother}</p>
          </div>

          <div className="family-location">
            <span className="location-pin font-serif">📍 {groomParents.location}</span>
          </div>
        </motion.div>
      </div>

      <motion.p
        className="inviting-relatives-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Invited with love by: Kith, Kin & Near & Dear Relatives
      </motion.p>
    </section>
  );
};

export default Family;
