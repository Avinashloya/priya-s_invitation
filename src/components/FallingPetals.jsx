import React from 'react';
import './FallingPetals.css';

const FallingPetals = () => {
  // Generate 18 random ambient petals & gold sparkles
  const petals = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 92 + 4}%`,
    animationDelay: `${Math.random() * 7}s`,
    animationDuration: `${7 + Math.random() * 7}s`,
    size: `${14 + Math.random() * 12}px`,
    type: i % 3 === 0 ? 'rose' : i % 3 === 1 ? 'marigold' : 'sparkle'
  }));

  return (
    <div className="falling-petals-container" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className={`petal ${p.type}`}
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            width: p.size,
            height: p.size
          }}
        >
          {p.type === 'rose' && (
            <svg viewBox="0 0 30 30" fill="none">
              <path d="M15 2 C22 2, 28 8, 28 15 C28 22, 22 28, 15 28 C8 28, 2 22, 2 15 C2 8, 8 2, 15 2 Z" fill="#b81d33" opacity="0.75" />
            </svg>
          )}
          {p.type === 'marigold' && (
            <svg viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="12" fill="#f39c12" opacity="0.8" />
              <circle cx="15" cy="15" r="8" fill="#e67e22" opacity="0.9" />
            </svg>
          )}
          {p.type === 'sparkle' && (
            <svg viewBox="0 0 24 24" fill="#D6B978" opacity="0.85">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
