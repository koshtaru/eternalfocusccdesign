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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        disablePictureInPicture
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
        className="w-full h-full object-cover object-[center_35%] block"
      />
      <div className="absolute bottom-0 inset-x-0 bg-black/40 px-4 pt-2 pb-3">
        {/* Seek bar */}
        <div className="relative h-1 mb-3 rounded-full bg-white/30">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-white/80 pointer-events-none"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={seek}
            aria-label="Seek"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center gap-8">
          <button onClick={skipBack} aria-label="Skip back 10 seconds" className="text-white/90 hover:text-white transition-colors">
            <SkipBack size={22} weight="fill" />
          </button>
          <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} className="text-white hover:text-white/80 transition-colors">
            {playing ? <Pause size={30} weight="fill" /> : <Play size={30} weight="fill" />}
          </button>
          <button onClick={skipForward} aria-label="Skip forward 10 seconds" className="text-white/90 hover:text-white transition-colors">
            <SkipForward size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
