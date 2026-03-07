import React from 'react';
import './Achievements.css';

const achievements = [
  {
    icon: 'fas fa-trophy',
    title: 'Hack2Hire 1st Place Winner',
    description: 'Won 1st place in the Hack2Hire: AI-Powered Interview Hackathon organized by UNSAID TALKS, competing against top developers.',
    highlight: true,
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Academic Excellence – 9.4 CGPA',
    description: 'Maintaining a distinguished CGPA of 9.4/10 in B.E. Computer Science and Engineering at Saveetha University.',
    highlight: false,
  },
  {
    icon: 'fas fa-certificate',
    title: '7+ Industry Certifications',
    description: 'Earned certifications from Oracle, Google Cloud, Infosys, Cisco, and Unstop in Java, SQL, AI, GenAI, and Data Science.',
    highlight: false,
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'AI & Full Stack Projects',
    description: 'Built production-level projects including an AI Interview Platform, GenAI Studio, and AutoML Dashboard using cutting-edge technologies.',
    highlight: false,
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Dual Internship Experience',
    description: 'Completed internships as both a Software Engineer (Bengaluru) and AI Intern (Hyderabad), gaining industry-level experience.',
    highlight: false,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <h2 className="section-title" data-aos="fade-up">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((ach, idx) => (
          <div
            className={`achievement-card glass-card ${ach.highlight ? 'ach-highlight' : ''}`}
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="achievement-icon">
              <i className={ach.icon}></i>
            </div>
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
