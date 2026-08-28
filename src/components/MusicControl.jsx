import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import weddingData from '../data/weddingData';
import './MusicControl.css';

const MusicControl = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const attemptPlay = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      return audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          return true;
        })
        .catch((err) => {
          console.log("Autoplay blocked until user interaction:", err);
          setIsPlaying(false);
          return false;
        });
    }
    return Promise.resolve(false);
  };

  const toggleMusic = (e) => {
    if (e) e.stopPropagation();
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      attemptPlay();
    }
  };

  useEffect(() => {
    // Attempt playback immediately
    attemptPlay();

    // Register user interaction handlers to unlock audio on mobile Safari & Chrome
    const handleUserInteraction = () => {
      if (!isPlaying) {
        attemptPlay();
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && isPlaying && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', attemptPlay);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', attemptPlay);
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger) {
      attemptPlay();
    }
  }, [autoPlayTrigger]);

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="music-control-floating">
      <audio 
        ref={audioRef} 
        loop 
        playsInline
        autoPlay
        preload="auto"
        onEnded={handleAudioEnded}
      >
        <source src="/assets/music/wedding-audio.mp3" type="audio/mp3" />
        <source src="/assets/music/wedding-audio.mpeg" type="audio/mpeg" />
      </audio>

      <button 
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        aria-label="Toggle Wedding Music"
        title={isPlaying ? "Mute Music" : "Play Wedding Music"}
      >
        <Music size={16} className={`music-note-icon ${isPlaying ? 'pulse' : ''}`} />
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default MusicControl;
