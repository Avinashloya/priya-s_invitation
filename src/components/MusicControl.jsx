import React, { useEffect, useRef } from 'react';
import weddingData from '../data/weddingData';

const MusicControl = ({ autoPlayTrigger }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch((err) => {
        console.log("Waiting for user interaction to autoplay audio:", err);
      });
    }
  };

  useEffect(() => {
    // Attempt playback immediately when component mounts
    playAudio();

    // Register global interaction listeners to start audio automatically on first touch/scroll/click
    const handleUserInteraction = () => {
      playAudio();
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('pointerdown', handleUserInteraction);
    window.addEventListener('scroll', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger) {
      playAudio();
    }
  }, [autoPlayTrigger]);

  return (
    <audio 
      ref={audioRef} 
      loop 
      src={weddingData.music.file} 
      preload="auto"
    />
  );
};

export default MusicControl;
