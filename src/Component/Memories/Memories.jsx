import React, { useState } from "react";
import "./Memories.css";
import laptopImg from "../../assets/Memories/wedding.png";
import img1 from "../../assets/Memories/kp1.jpg";
import img2 from "../../assets/Memories/kp2.jpg";
import img3 from "../../assets/Memories/kp3.jpg";
import img4 from "../../assets/Memories/kp4.jpg";
import img5 from "../../assets/Memories/kp5.jpg";
import img6 from "../../assets/Memories/BP1.jpg";
import img7 from "../../assets/Memories/BP2.jpg";
import img8 from "../../assets/Memories/BP3.jpg";
import img9 from "../../assets/Memories/BP4.jpg";
import img10 from "../../assets/Memories/BP5.jpg";
import img11 from "../../assets/Memories/TP1.jpg";
import img12 from "../../assets/Memories/TP2.jpg";
import img13 from "../../assets/Memories/TP3.jpg";
import img14 from "../../assets/Memories/TP4.jpg";
import img15 from "../../assets/Memories/TP5.jpg";
import img16 from "../../assets/Memories/SP1.jpg";
import img17 from "../../assets/Memories/SP2.jpg";
import img18 from "../../assets/Memories/SP3.jpg";
import img19 from "../../assets/Memories/SP4.jpg";
import img20 from "../../assets/Memories/SP5.jpg";
import img21 from "../../assets/Memories/KRP1.jpg";
import img22 from "../../assets/Memories/kp6.jpg";
import img23 from "../../assets/Memories/kp7.jpg";
import img24 from "../../assets/Memories/KRP2.jpg";
import img25 from "../../assets/Memories/kp9.jpg";
import img26 from "../../assets/Memories/kp10.jpg";
import img27 from "../../assets/Memories/kp11.jpg";
import img28 from "../../assets/Memories/kp12.jpg";
import img29 from "../../assets/Memories/kp13.jpg";
import img30 from "../../assets/Memories/kp9.jpg";

export default function Memories() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  ];

  const firstSet = images.slice(0, 10);
  const secondSet = images.slice(10, 20);
  const thirdSet = images.slice(20, 30);

  const renderSlider = (imgs, direction) => (
    <div className={`memory-slider ${direction}`}>
      <div className="slider-track">
        {[...imgs, ...imgs].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`memory-${i}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="memory-container">
      <h3 className="memory-title">Memories</h3>
      <div className="memory-template">
        <div className="memory-image">
          <img src={laptopImg} alt="Laptop" />
        </div>

        <div className="memories-section">
          {renderSlider(firstSet, "left")}
          {renderSlider(secondSet, "right")}
          {renderSlider(thirdSet, "left")}
        </div>
      </div>

      {/* Full Image Popup */}
      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Full view"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
