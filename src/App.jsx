import { useState, useEffect, useCallback, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ReactCanvasConfetti from "react-canvas-confetti";
import "./App.css";

import Home from "../src/Component/Home/Home";


function App() {
  const targetDate = new Date("2025-11-01T12:35:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showCrackers, setShowCrackers] = useState(false);
  const [showRouter, setShowRouter] = useState(false);

  // Confetti instance
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current({
        ...opts,
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, { spread: 26, startVelocity: 55 });
    makeShot(0.2, { spread: 60 });
    makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    makeShot(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    makeShot(0.1, { spread: 120, startVelocity: 45 });
  }, [makeShot]);

  // Calculate remaining time
  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // Countdown + Firework logic
  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      if (!updatedTime) {
        clearInterval(timer);
        setShowCrackers(true);
        fire();

        // Show router after 4 seconds
        setTimeout(() => {
          setShowCrackers(false);
          setShowRouter(true);
        }, 4000);
      } else {
        setTimeLeft(updatedTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [fire]);

  // 1️⃣ Show countdown before time
  if (!showRouter && !showCrackers && timeLeft) {
    return (
      <div className="timer-container">
        <h1>Wedding Countdown</h1>
        <div className="timer">
          <span>{timeLeft.days}d</span> :
          <span>{timeLeft.hours}h</span> :
          <span>{timeLeft.minutes}m</span> :
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    );
  }

  // 2️⃣ Show crackers
  if (showCrackers) {
    return (
      <div className="cracker-container">
        <h1 className="celebrate-text">🎉 It’s Time! 🎊</h1>
        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: "fixed",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
      </div>
    );
  }

  return (

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
