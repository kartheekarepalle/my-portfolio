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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 19.5L21.5 12L2.5 4.5L2.5 10.5L17.5 12L2.5 13.5L2.5 19.5Z"/></svg> View Projects
          </a>
          <a href="assets/Resume_Kartheeka.pdf" download className="btn-download">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg> Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-6 20-7-7 13-13z"/></svg> Get in Touch
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/kartheekarepalle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/kartheeka-repalle-2139a1363/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
          <a href="https://leetcode.com/u/kartheeka313/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <svg width="22" height="22" viewBox="0 0 50 50" fill="currentColor"><path d="M44.6 20.7L29.3 5.4c-2.1-2.1-5.5-2.1-7.6 0l-3.8 3.8c-0.8 0.8-0.8 2 0 2.8s2 0.8 2.8 0l3.8-3.8c0.5-0.5 1.3-0.5 1.8 0l15.3 15.3c0.5 0.5 0.5 1.3 0 1.8l-3.8 3.8c-0.8 0.8-0.8 2 0 2.8s2 0.8 2.8 0l3.8-3.8c2.1-2.1 2.1-5.5 0-7.6z"/><path d="M20.7 44.6l-15.3-15.3c-0.5-0.5-0.5-1.3 0-1.8l3.8-3.8c0.8-0.8 0.8-2 0-2.8s-2-0.8-2.8 0l-3.8 3.8c-2.1 2.1-2.1 5.5 0 7.6l15.3 15.3c2.1 2.1 5.5 2.1 7.6 0l3.8-3.8c0.8-0.8 0.8-2 0-2.8s-2-0.8-2.8 0l-3.8 3.8c-0.5 0.5-1.3 0.5-1.8 0z"/><path d="M35.4 35.4c-0.8-0.8-2-0.8-2.8 0l-3.8 3.8c-0.5 0.5-1.3 0.5-1.8 0l-15.3-15.3c-0.5-0.5-0.5-1.3 0-1.8l3.8-3.8c0.8-0.8 0.8-2 0-2.8s-2-0.8-2.8 0l-3.8 3.8c-2.1 2.1-2.1 5.5 0 7.6l15.3 15.3c2.1 2.1 5.5 2.1 7.6 0l3.8-3.8c0.8-0.8 0.8-2 0-2.8z"/></svg>
          </a>
          <a href="mailto:kartheekarepalle313@gmail.com" aria-label="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13 20 6.01V6H4zm0 12h16V8.99l-8 6.99-8-6.99V18z"/></svg>
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
