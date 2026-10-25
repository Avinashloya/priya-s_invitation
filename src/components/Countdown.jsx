import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isArrived: false
  });

  useEffect(() => {
    // Target: 2026-11-26 at 04:40
    const targetDate = new Date(`${weddingData.wedding.date}T${weddingData.wedding.time}:00`);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isArrived: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isArrived: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section">
      <motion.div 
        className="countdown-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="countdown-header">
          <h2 className="countdown-heading gold-text font-serif">Auspicious Sumuhurtham In</h2>
          <p className="countdown-sub font-serif">Countdown to the Sacred Union</p>
        </div>

        {timeLeft.isArrived ? (
          <div className="arrived-message font-serif">
            <Heart size={32} fill="#6e1a24" color="#6e1a24" />
            <h3 className="arrived-text gold-text-bright font-serif">Today is the auspicious day! 🎉</h3>
            <p className="font-serif">The sacred wedding celebrations have begun!</p>
          </div>
        ) : (
          <div className="timer-grid font-serif">
            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text font-serif">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">DAYS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text font-serif">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">HOURS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text font-serif">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">MINS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text font-serif">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">SECS</span>
            </div>
          </div>
        )}

        <p className="countdown-footnote font-serif">
          {weddingData.wedding.displayDate} • {weddingData.wedding.displayTime}
        </p>
      </motion.div>
    </section>
  );
};

export default Countdown;
