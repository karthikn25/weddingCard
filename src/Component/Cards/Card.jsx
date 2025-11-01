import React, { useRef, useState, useEffect } from "react";
import "./Cards.css";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import wedding from "../../assets/wedding.jpg";
import wish from "../../assets/wish.mp4";

export default function Wishes() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

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

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    }
  };

  const handleProgressChange = (e) => {
    const video = videoRef.current;
    const newTime = (e.target.value / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="wishes-container">
      <h2 className="wishes-title">Wishes 💫</h2>

      <div className="wishes-template">
        {/* ===== Video Section ===== */}
        <div className="wishes-video">
          <div className="video-wrapper">
            <video ref={videoRef} src={wish} muted={isMuted} loop playsInline />

            <div className="custom-controls">
              <input
                type="range"
                ref={progressRef}
                className="progress-bar"
                value={progress}
                onChange={handleProgressChange}
              />

              <div className="controls-row">
                <button
                  onClick={handlePlayPause}
                  className="control-btn"
                  aria-label="Play or Pause"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <button
                  onClick={handleMuteUnmute}
                  className="control-btn"
                  aria-label="Mute or Unmute"
                >
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                <button
                  onClick={handleFullScreen}
                  className="control-btn"
                  aria-label="Fullscreen"
                >
                  <FaExpand />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Image Section ===== */}
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
