import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Share2, Check, Send } from 'lucide-react';
import weddingData from '../data/weddingData';
import './RSVP.css';

const RSVP = () => {
  const [copied, setCopied] = useState(false);
  const { bride, groom } = weddingData.couple;
  const { whatsapp } = weddingData;

  // Direct WhatsApp Handler
  const handleWhatsAppRSVP = () => {
    const defaultText = `Namaste! I am delighted to accept the wedding invitation of ${bride.name} & ${groom.name}. Looking forward to celebrating with you!`;
    const encodedMsg = encodeURIComponent(whatsapp.message || defaultText);
    const phone = whatsapp.number ? whatsapp.number.replace(/\D/g, '') : '';
    
    if (phone) {
      window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank');
    } else {
      window.open(`https://wa.me/?text=${encodedMsg}`, '_blank');
    }
  };

  // Web Share API Handler
  const handleShare = async () => {
    const shareData = {
      title: `${bride.name} & ${groom.name} Wedding Invitation`,
      text: `You are cordially invited to celebrate the wedding of ${bride.name} & ${groom.name} on Saturday, 5th September 2026!`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <Send size={16} />
          <span>JOIN THE CELEBRATION</span>
        </div>
        <h2 className="section-title gold-text">We Look Forward to Seeing You!</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-serif">💌</span>
          <span className="line"></span>
        </div>
      </motion.div>

      <motion.div 
        className="rsvp-card text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="rsvp-welcome-text font-serif">
          Your presence and blessings on our auspicious wedding day will mean the world to us and our families.
        </p>

        <div className="extra-buttons-row margin-top">
          <button className="whatsapp-rsvp-btn" onClick={handleWhatsAppRSVP}>
            <MessageSquare size={18} />
            <span>RSVP via WhatsApp</span>
          </button>

          <button className="share-btn" onClick={handleShare}>
            {copied ? <Check size={18} /> : <Share2 size={18} />}
            <span>{copied ? 'Link Copied!' : 'Share Invitation'}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default RSVP;
