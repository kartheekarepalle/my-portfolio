import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="gradient-text">Kartheeka Repalle</h3>
          <p>
            Software Engineer &amp; AI Enthusiast passionate about building scalable web
            applications and intelligent systems with modern technologies.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/kartheekarepalle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kartheeka-repalle-2139a1363/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/kartheeka313/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <i className="fas fa-code"></i>
            </a>
            <a href="mailto:kartheekarepalle313@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact-info">
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i> Chennai, India</p>
          <p><i className="fas fa-envelope"></i> kartheekarepalle313@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 9000901303</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kartheeka Repalle. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
