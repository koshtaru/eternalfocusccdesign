'use client';

import { useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'phosphor-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const skipBack = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, v.currentTime - 10);
  };

  const skipForward = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.min(v.duration || 0, v.currentTime + 10);
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
        className="w-full h-full object-cover object-[center_35%] block"
      />
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-8 py-4 bg-black/40">
        <button
          onClick={skipBack}
          aria-label="Skip back 10 seconds"
          className="text-white/90 hover:text-white transition-colors"
        >
          <SkipBack size={22} weight="fill" />
        </button>
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
          className="text-white hover:text-white/80 transition-colors"
        >
          {playing ? <Pause size={30} weight="fill" /> : <Play size={30} weight="fill" />}
        </button>
        <button
          onClick={skipForward}
          aria-label="Skip forward 10 seconds"
          className="text-white/90 hover:text-white transition-colors"
        >
          <SkipForward size={22} weight="fill" />
        </button>
      </div>
    </div>
  );
}
