import React, { useRef, useState } from "react";
import "./Cards.css";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import wedding from "../../assets/wedding.jpg";
import wish from "../../assets/wish.mp4";

export default function Wishes() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) video.pause();
    else video.play();
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="wishes-container">
      <h2 className="wishes-title">Wishes 💫</h2>

      <div className="wishes-template">
        {/* ===== Video Section (Left on Desktop) ===== */}
        <div className="wishes-video">
          <video ref={videoRef} src={wish} muted={isMuted} loop />
          {/* Controls outside video */}
          <div className="video-controls">
            <button
              onClick={handlePlayPause}
              className={`control-btn ${isPlaying ? "pause" : "play"}`}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button
              onClick={handleMuteUnmute}
              className={`control-btn mute ${isMuted ? "off" : "on"}`}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>

        {/* ===== Image Section (Right on Desktop) ===== */}
        <div className="wishes-image">
          <img src={wedding} alt="Wishes" />
          <p className="wishes-text">
            Heartfelt wishes filled with love and joy ✨💖
          </p>
        </div>
      </div>
    </div>
  );
}
