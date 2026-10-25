import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';
import WhiteJasmineGarland from './WhiteJasmineGarland';
import './Family.css';

const Family = () => {
  const { brideParents, groomParents } = weddingData;

  return (
    <section id="family" className="family-section">
      {/* Decorative Jasmine Arch */}
      <WhiteJasmineGarland variant="arch" showBells={true} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge font-serif">
            <Users size={16} />
            <span>FAMILY BLESSINGS</span>
          </div>
          <h2 className="section-title gold-text font-serif">With the Blessings of Our Families</h2>
          <div className="ornament-divider">
            <span className="line"></span>
            <span className="icon font-serif">✦ 🪷 ✦</span>
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
              <span className="family-role-tag font-serif">Bride's Family</span>
            </div>

            <h3 className="family-card-heading font-serif">Daughter of</h3>

            <div className="parent-names">
              <p className="parent-name font-serif">{brideParents.father}</p>
              <span className="and-symbol font-serif">&</span>
              <p className="parent-name font-serif">{brideParents.mother}</p>
            </div>

            <div className="family-location">
              <span className="location-pin font-serif">📍 {brideParents.location}</span>
            </div>
          </motion.div>

          {/* Center Floral Divider */}
          <div className="family-divider-center">
            <Heart size={24} className="heart-center-icon" fill="#d4af37" color="#d4af37" />
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
              <span className="family-role-tag font-serif">Groom's Family</span>
            </div>

            <h3 className="family-card-heading font-serif">Son of</h3>

            <div className="parent-names">
              <p className="parent-name font-serif">{groomParents.father}</p>
              <span className="and-symbol font-serif">&</span>
              <p className="parent-name font-serif">{groomParents.mother}</p>
            </div>

            <div className="family-location">
              <span className="location-pin font-serif">📍 {groomParents.location}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="inviting-relatives-box"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="relatives-symbol">✦ ॐ ✦</span>
          <p className="inviting-relatives-text font-serif">
            Invited with eternal affection by: Near & Dear Family, Friends, and Well-Wishers
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Family;
