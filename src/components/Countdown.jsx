import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hourglass, Heart } from 'lucide-react';
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
    // Target: 2026-09-05 at 23:05
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
          <Hourglass className="hourglass-icon spin-slow" size={22} />
          <h2 className="countdown-heading gold-text">Our New Beginning Starts In</h2>
        </div>

        {timeLeft.isArrived ? (
          <div className="arrived-message">
            <Heart size={32} fill="#6e1a24" color="#6e1a24" />
            <h3 className="arrived-text gold-text-bright">Today is the day! 🎉</h3>
            <p>The auspicious wedding celebrations have begun!</p>
          </div>
        ) : (
          <div className="timer-grid">
            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">DAYS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">HOURS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">MINS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">SECS</span>
            </div>
          </div>
        )}

        <p className="countdown-footnote font-serif">
          Saturday, 5th September 2026 • 11:05 PM
        </p>
      </motion.div>
    </section>
  );
};

export default Countdown;
