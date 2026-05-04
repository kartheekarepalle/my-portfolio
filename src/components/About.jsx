import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-float-shapes">
        <div className="float-shape shape-1" />
        <div className="float-shape shape-2" />
      </div>
      <h2 className="section-title" data-aos="fade-up">About Me</h2>
      <div className="about-container">
        <div className="about-img" data-aos="fade-right">
          <div className="about-img-frame">
            <img src="assets/images/pic 4.jpg" alt="Kartheeka Repalle" />
            <div className="about-img-glow" />
          </div>
          <div className="about-experience-badge glass-card">
            <span className="badge-number">B.E.</span>
            <span className="badge-text">CSE Student</span>
          </div>
        </div>
        <div className="about-content" data-aos="fade-left">
          <div className="about-card glass-card">
            <h3 className="about-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12l-10-7-10 7 10 7 10-7z"/><path d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7"/></svg> Who I Am
            </h3>
            <p>
              Motivated and detail-oriented Computer Science undergraduate at Saveetha Institute 
              of Technical and Medical Sciences with a strong CGPA of 9.4. Passionate about leveraging 
              technology to solve real-world problems through innovative software solutions.
            </p>
          </div>
          <div className="about-card glass-card">
            <h3 className="about-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="16.24" y1="7.76" x2="17.66" y2="6.34"/><line x1="6.34" y1="17.66" x2="7.76" y2="16.24"/><line x1="7.76" y1="7.76" x2="6.34" y2="6.34"/><line x1="16.24" y1="16.24" x2="17.66" y2="17.66"/></svg> What I Do
            </h3>
            <p>
              I specialize in full-stack web development and AI/ML applications. 
              From building AI-powered interview platforms to creating no-code AutoML solutions, 
              I enjoy turning complex problems into elegant, user-friendly applications using 
              Python, React.js, FastAPI, and deep learning technologies.
            </p>
          </div>
          <div className="about-card glass-card">
            <h3 className="about-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> My Focus
            </h3>
            <p>
              Currently focused on software engineering, artificial intelligence, and building 
              scalable web applications. I thrive in collaborative environments and am always 
              eager to learn emerging technologies and contribute to innovative projects.
            </p>
          </div>
          <div className="about-languages">
            <h4>Languages I Speak</h4>
            <div className="language-chips">
              <span className="language-chip">Telugu</span>
              <span className="language-chip">Tamil</span>
              <span className="language-chip">English</span>
              <span className="language-chip">Kannada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
