import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import weddingData from '../data/weddingData';
import './MusicControl.css';

/**
 * MusicControl Component
 * Plays the chosen wedding audio ONLY after the user clicks "OPEN INVITATION".
 * Provides a floating luxury gold toggle button to pause/play at any time.
 */
const MusicControl = ({ autoPlayTrigger, isOpened }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    audio.muted = false;
    audio.volume = 1.0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play error, retrying on first user interaction:", err);
          // If browser restricted, try once more with muted then unmute
          audio.muted = true;
          audio.play().then(() => {
            setIsPlaying(true);
            setTimeout(() => {
              audio.muted = false;
            }, 100);
          }).catch(() => {});
        });
    }
  };

  // Triggered when "OPEN INVITATION" button is clicked
  useEffect(() => {
    if (autoPlayTrigger) {
      startPlayback();
    }
  }, [autoPlayTrigger]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.volume = 1.0;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => console.log("Play failed:", err));
    }
  };

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        playsInline
        preload="auto"
        onEnded={handleAudioEnded}
        style={{ display: 'none' }}
      >
        <source src="/assets/music/wedding-song.mpeg" type="audio/mpeg" />
        <source src="/assets/music/wedding-song.mp3" type="audio/mp3" />
      </audio>

      {/* Floating Gold Music Toggle (Visible once invitation is opened) */}
      {(isOpened || autoPlayTrigger) && (
        <div className="music-control-floating">
          <button 
            className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <Volume2 size={20} color="#D6B978" />
            ) : (
              <VolumeX size={20} color="#D6B978" />
            )}
            <span className={`music-note-icon ${isPlaying ? 'pulse' : ''}`}>
              <Music size={11} color="#6e1a24" />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default MusicControl;
