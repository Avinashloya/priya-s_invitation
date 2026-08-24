import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import weddingData from '../data/weddingData';
import './MusicControl.css';

const MusicControl = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Initialize Web Audio API Synthesizer fallback (South Indian Nadaswaram / Shehnai drone melody)
  const playSynthesizedWeddingShehnai = () => {
    try {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;

      // Yaman / Hamsadhwani Shehnai Scale Frequencies: C# (277), F (349), G# (415), A# (466), C (523)
      const scale = [277.18, 349.23, 415.30, 466.16, 523.25, 554.37];
      let noteIndex = 0;

      // Drone Tanpura background
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = 'sine';
      droneOsc.frequency.setValueAtTime(138.59, ctx.currentTime); // C#3 drone
      droneGain.gain.setValueAtTime(0.04, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc.start();

      // Melody loop
      synthIntervalRef.current = setInterval(() => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Sawtooth with lowpass filter gives an authentic Shehnai timbre
        osc.type = 'sawtooth';

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, ctx.currentTime);

        const freq = scale[noteIndex % scale.length];
        noteIndex = (noteIndex + Math.floor(Math.random() * 2) + 1) % scale.length;

        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Gentle shehnai envelope
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.25);
      }, 1000);

    } catch (e) {
      console.warn("Web Audio API synthesis not supported", e);
    }
  };

  const stopSynthesizedShehnai = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthesizedShehnai();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Fallback to synthesis if mp3 fails
            playSynthesizedWeddingShehnai();
            setIsPlaying(true);
          });
      } else {
        playSynthesizedWeddingShehnai();
        setIsPlaying(true);
      }
    }
  };

  // Trigger audio playback when user unlocks invitation
  useEffect(() => {
    if (autoPlayTrigger) {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            playSynthesizedWeddingShehnai();
            setIsPlaying(true);
          });
      } else {
        playSynthesizedWeddingShehnai();
        setIsPlaying(true);
      }
    }
  }, [autoPlayTrigger]);

  return (
    <div className="music-control-floating">
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
