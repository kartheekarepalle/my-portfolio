import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Floating crystal orbs */}
      <div className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      {/* Particles */}
      <div className="hero-particles">
        {[...Array(30)].map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${6 + Math.random() * 12}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }} />
        ))}
      </div>

      <div className="hero-content" data-aos="fade-up">
        <div className="hero-img-wrapper">
          <img src="assets/images/pic 3.jpg" alt="Kartheeka Repalle" className="profile-pic" />
          <div className="profile-ring" />
          <div className="profile-ring profile-ring-2" />
          <div className="profile-glow" />
        </div>

        <h1 className="hero-name gradient-text">Kartheeka Repalle</h1>
        <h3 className="hero-subtitle">
          <span className="typing-text">AI & Data Science</span>
          <span className="hero-divider">|</span>
          <span className="typing-text">Full Stack Web Development</span>
        </h3>

        <p className="hero-intro">
          Motivated Computer Science undergraduate with hands-on experience in Python, React.js, 
          and AI/ML technologies. Passionate about building scalable web applications 
          and intelligent systems that solve real-world problems.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">9.4</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-number">12+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-number">2</span>
            <span className="stat-label">Internships</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            <i className="fas fa-rocket"></i> View Projects
          </a>
          <a href="#contact" className="btn-outline">
            <i className="fas fa-paper-plane"></i> Get in Touch
          </a>
        </div>

        <div className="hero-socials">
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

      <div className="hero-scroll-indicator">
        <a href="#about">
          <div className="mouse">
            <div className="mouse-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
