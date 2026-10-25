import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import WhiteJasmineGarland from './WhiteJasmineGarland';
import BananaLeafPillar from './BananaLeafPillar';
import './Closing.css';

const Closing = () => {
  const { bride, groom } = weddingData.couple;

  return (
    <footer className="closing-section">
      {/* Decorative Jasmine Arch */}
      <WhiteJasmineGarland variant="arch" showBells={true} />

      <motion.div 
        className="closing-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Flanking Banana Tree Accents */}
        <div className="closing-banana-flank left">
          <BananaLeafPillar side="left" variant="tree" />
        </div>
        <div className="closing-banana-flank right">
          <BananaLeafPillar side="right" variant="tree" />
        </div>

        <div className="closing-gold-frame">
          <div className="closing-corner top-l"></div>
          <div className="closing-corner top-r"></div>
          <div className="closing-corner bottom-l"></div>
          <div className="closing-corner bottom-r"></div>

          <p className="closing-blessing font-serif">
            With Sacred Vows & Eternal Love
          </p>

          <h2 className="closing-message gold-text-bright font-serif">
            We earnestly seek your gracious presence, blessings & love as we embark on this sacred journey
          </h2>

          <div className="couple-closing-name-block">
            <h3 className="closing-name-line font-serif">{bride.name}</h3>
            <div className="closing-amp-wrapper">
              <span className="and-symbol-closing font-serif">weds</span>
            </div>
            <h3 className="closing-name-line font-serif">{groom.name}</h3>
          </div>

          <div className="closing-divider">
            <span className="line"></span>
            <Sparkles size={14} className="sparkle" />
            <span className="line"></span>
          </div>

          <p className="closing-footer-date font-serif">
            Reception: 25th Nov 2026 • Sumuhurtham: 26th Nov 2026
          </p>
          <p className="closing-venue-line font-serif">
            MR Convention, Podalakur, Andhra Pradesh
          </p>

          <p className="copyright-notice font-serif">
            Auspicious Wedding of {bride.name} & {groom.name}
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Closing;
