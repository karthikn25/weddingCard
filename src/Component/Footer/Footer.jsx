import React from "react";
import "./Footer.css";
import { FaInstagram, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} | Made with{" "}
          <FaHeart className="heart-icon" /> by <strong>Karthikeyan</strong>
        </p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/karthikn75/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="instagram-link"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
