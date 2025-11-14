import React, { useState } from "react";
import "./Home.css";
import backgroundVideo from "../../assets/background.mp4";
import weddingData from "../../assets/weddingData.json";
import Memories from "../Memories/Memories";
import Card from "../Cards/Card";
import Footer from '../Footer/Footer';
import Journey from "../Journey/Journey";

export default function Home() {
  // State for language
  const [language, setLanguage] = useState("en"); // default English

  // Fetch data from JSON based on selected language
  const groom = weddingData.groomName[language];
  const bride = weddingData.brideName[language];
  const marriageDate = weddingData.date[language];
  const paragraph = weddingData.paragraph[language];

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ta" : "en"));
  };

  return (
    <div className="whole-container">
    <div className="home-container">
      <video autoPlay loop muted className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        {/* Language toggle button */}
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          <button className="lang-btn" onClick={toggleLanguage}>
            {language === "en" ? "English" :"தமிழ்" }
          </button>
        </div>

        <div className="wedding-text">
          <h1 className="couple-names">💍 {groom} 🖤💜 {bride} 💍</h1>
          <p className="wedding-date">{marriageDate}</p>
          <p className="wedding-desc">{paragraph}</p>
        </div>
      </div>
    </div>
    <div className="">
     <Memories/>
     <Card/>
     <Journey/>
     <Footer/>
     </div>
    </div>
  );
}
