import React, { useRef, useState } from "react";
import "./Journey.css";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import image from "../../assets/wedding1.jpg";
import journey from '../../assets/journey.mp4'

export default function Journey() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgress = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = time;
    setProgress(e.target.value);
  };

  return (
    <div className="journey-container">
      <h2 className="journey-title">Our Beautiful Journey 💫</h2>

      <div className="journey-template">
        {/* ===== Left Side Image ===== */}
        <div className="journey-image">
          <img src={image} alt="Our Journey" />
          <p className="journey-text">
            Every step we took together brought us closer 💖
          </p>
        </div>

        {/* ===== Right Side Video ===== */}
        <div className="journey-video">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              onTimeUpdate={handleProgress}
              poster="/assets/journey-thumbnail.jpg"
            >
              <source src={journey} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="custom-controls">
              <input
                type="range"
                className="progress-bar"
                value={progress}
                onChange={handleSeek}
              />
              <div className="controls-row">
                <button className="control-btn" onClick={handlePlayPause}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="control-btn" onClick={handleMute}>
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
