import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, MapPin, Download } from 'lucide-react';
import weddingData from '../data/weddingData';
import WhiteJasmineGarland from './WhiteJasmineGarland';
import './Events.css';

const Events = () => {
  const { wedding, reception, venue, pellikuthuru, dinner } = weddingData;

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mohana Priya & Likhith Varma Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:wedding-mohana-likhith-2026@weddinginvitation.com
DTSTAMP:20261024T000000Z
DTSTART:20261125T123000Z
DTEND:20261126T020000Z
SUMMARY:Wedding of Mohana Priya & Likhith Varma
DESCRIPTION:Sacred Wedding Reception & Sumuhurtham ceremony of Chi. La. Sow. Mohana Priya and Chi. Likhith Varma.
LOCATION:${venue.name}, ${venue.address}, ${venue.city}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MohanaPriya_LikhithVarma_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="events" className="events-section">
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
            <Calendar size={16} />
            <span>WEDDING SCHEDULE</span>
          </div>
          <h2 className="section-title gold-text font-serif">Wedding Events & Schedule</h2>
          <div className="ornament-divider">
            <span className="line"></span>
            <span className="icon font-serif">✦ 🌸 ✦</span>
            <span className="line"></span>
          </div>
        </motion.div>

        {/* 1. Pellikuthuru Ceremony Card */}
        <motion.div 
          className="event-card event-card-featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="event-header-row">
            <span className="event-icon font-serif">🌸</span>
            <div>
              <h4 className="event-title font-serif">{pellikuthuru?.name || "Pellikuthuru Ceremony"}</h4>
              <p className="event-subtitle font-serif">{pellikuthuru?.details || "Traditional Bridal Blessing Ceremony"}</p>
            </div>
          </div>

          <div className="event-meta-row font-serif">
            <div className="meta-pill">
              <Calendar size={14} />
              <span>{pellikuthuru?.displayDate || "Wednesday, 25th November 2026"}</span>
            </div>
            <div className="meta-pill">
              <Clock size={14} />
              <span>{pellikuthuru?.displayTime || "10:30 a.m."}</span>
            </div>
            <div className="meta-pill">
              <MapPin size={14} />
              <span>{pellikuthuru?.venue || "Tiruvalluru"}</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Grand Reception Card (Wednesday Evening) */}
        <motion.div 
          className="sumuhurtham-grand-card reception-grand-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-ornamental-corner top-left"></div>
          <div className="card-ornamental-corner top-right"></div>
          <div className="card-ornamental-corner bottom-left"></div>
          <div className="card-ornamental-corner bottom-right"></div>

          <div className="sumuhurtham-badge font-serif">
            <Sparkles size={16} className="sparkle" />
            <span>WEDDING RECEPTION</span>
            <Sparkles size={16} className="sparkle" />
          </div>

          <h3 className="sumuhurtham-title font-serif">Grand Wedding Reception</h3>

          <div className="time-date-box">
            <div className="date-display font-serif">
              <span className="day-name">{reception?.dayName || "WEDNESDAY"}</span>
              <span className="date-number">{reception?.dateNumber || "25"}</span>
              <span className="month-year">{reception?.monthYear || "NOVEMBER 2026"}</span>
            </div>

            <div className="time-display font-serif">
              <Clock size={20} className="clock-icon" />
              <span className="exact-time">{reception?.displayTime || "6:00 PM ONWARDS"}</span>
            </div>
          </div>

          <div className="astro-details-box reception-invitation-box">
            <p className="reception-invitation-text font-serif">
              “{reception?.message || "We cordially invite you to join us for the Reception to bless the newly wedded couple."}”
            </p>
          </div>

          <p className="venue-note font-serif">
            At <strong>{venue.name}</strong>, {venue.city}
          </p>
        </motion.div>

        {/* 3. Dinner Card */}
        <motion.div 
          className="event-card event-card-featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="event-header-row">
            <span className="event-icon font-serif">🍽️</span>
            <div>
              <h4 className="event-title font-serif">{dinner?.name || "Dinner"}</h4>
              <p className="event-subtitle font-serif">{dinner?.details || "Grand Wedding Dinner Feast"}</p>
            </div>
          </div>

          <div className="event-meta-row font-serif">
            <div className="meta-pill">
              <Calendar size={14} />
              <span>{dinner?.displayDate || "Wednesday, 25th November 2026"}</span>
            </div>
            <div className="meta-pill">
              <Clock size={14} />
              <span>{dinner?.displayTime || "7:00 p.m. Onwards"}</span>
            </div>
            <div className="meta-pill">
              <MapPin size={14} />
              <span>{dinner?.venue || `${venue.name}, ${venue.city}`}</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Main Sumuhurtham Card (Thursday Early Morning) */}
        <motion.div 
          className="sumuhurtham-grand-card main-sumuhurtham-gold"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-ornamental-corner top-left"></div>
          <div className="card-ornamental-corner top-right"></div>
          <div className="card-ornamental-corner bottom-left"></div>
          <div className="card-ornamental-corner bottom-right"></div>

          <div className="sumuhurtham-badge font-serif">
            <Sparkles size={16} className="sparkle" />
            <span>MAIN SUMUHURTHAM</span>
            <Sparkles size={16} className="sparkle" />
          </div>

          <h3 className="sumuhurtham-title font-serif">Sacred Wedding Ceremony</h3>

          <div className="time-date-box font-serif">
            <div className="date-display">
              <span className="day-name">{wedding.dayName || "THURSDAY"}</span>
              <span className="date-number">{wedding.dateNumber || "26"}</span>
              <span className="month-year">{wedding.monthYear || "NOVEMBER 2026"}</span>
            </div>

            <div className="time-display">
              <Clock size={20} className="clock-icon" />
              <span className="exact-time">{wedding.displayTime}</span>
              <span className="time-sub">Early Hours of Thursday</span>
            </div>
          </div>

          <div className="astro-details-box font-serif">
            <div className="astro-item">
              <span className="astro-label">LAGNAM</span>
              <span className="astro-value">{wedding.lagnam}</span>
            </div>
            <div className="astro-divider"></div>
            <div className="astro-item">
              <span className="astro-label">NAKSHATRAM</span>
              <span className="astro-value">{wedding.nakshatram}</span>
            </div>
          </div>

          <p className="venue-note font-serif">
            At <strong>{venue.name}</strong>, {venue.address}
          </p>

          <button className="btn-gold save-calendar-btn font-serif" onClick={handleDownloadCalendar}>
            <Download size={16} />
            <span>ADD TO CALENDAR (.ICS)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
