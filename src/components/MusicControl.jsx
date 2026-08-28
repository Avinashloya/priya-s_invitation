import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import weddingData from '../data/weddingData';
import './MusicControl.css';

const MusicControl = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const attemptPlayAudio = () => {
    if (audioRef.current) {
      return audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          return true;
        })
        .catch((err) => {
          console.log("Autoplay waiting for first touch/scroll interaction:", err);
          return false;
        });
    }
    return Promise.resolve(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      attemptPlayAudio();
    }
  };

  // Trigger audio playback when autoPlayTrigger is fired
  useEffect(() => {
    if (autoPlayTrigger) {
      attemptPlayAudio().then((success) => {
        if (!success) {
          // If browser blocked initial autoplay, play on very first click/touch/scroll
          const handleFirstInteraction = () => {
            attemptPlayAudio();
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
          };
          window.addEventListener('click', handleFirstInteraction);
          window.addEventListener('touchstart', handleFirstInteraction);
          window.addEventListener('scroll', handleFirstInteraction);
        }
      });
    }
  }, [autoPlayTrigger]);

  return (
    <div className="music-control-floating">
      {/* EXCLUSIVELY play WhatsApp Audio file */}
      <audio ref={audioRef} loop src={weddingData.music.file} />

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
