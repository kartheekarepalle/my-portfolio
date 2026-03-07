import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Hack2Hire: AI Interview Hackathon',
    description: '1st Place Winner – Built an AI-powered interview platform in a competitive hackathon by UNSAID TALKS.',
    icon: 'fas fa-trophy',
    highlight: true,
    link: 'assets/certificates/Hack2Hire%20Winner.png',
  },
  {
    title: 'Oracle Java SE 11 Developer',
    description: 'Proficient in Java programming, OOP concepts, and enterprise application development.',
    icon: 'fab fa-java',
    highlight: false,
    link: 'assets/certificates/Oracle%20Java.jpg',
  },
  {
    title: 'Oracle Database SQL Certified',
    description: 'Advanced SQL queries, database design, and performance optimization techniques.',
    icon: 'fas fa-database',
    highlight: false,
    link: 'assets/certificates/oracle%20dbms.jpg',
  },
  {
    title: 'Infosys – Introduction to AI',
    description: 'Comprehensive understanding of AI concepts including supervised and unsupervised learning.',
    icon: 'fas fa-brain',
    highlight: false,
    link: 'assets/certificates/ai%20certificate.jpg',
  },
  {
    title: 'Google Cloud – Generative AI Studio',
    description: 'Hands-on experience with generative AI models, prompt engineering, and cloud ML tools.',
    icon: 'fab fa-google',
    highlight: false,
    link: 'assets/certificates/Generative%20AI%20Studio.jpg',
  },
  {
    title: 'Data Science – Cisco Networking Academy',
    description: 'Completed comprehensive data science program covering analytics, visualization, and ML fundamentals.',
    icon: 'fas fa-chart-pie',
    highlight: false,
    link: 'assets/certificates/DS%20Cisco1.jpg',
  },
  {
    title: 'Internet of Things – NPTEL',
    description: 'Certified in IoT fundamentals, architectures, and connected device ecosystems.',
    icon: 'fas fa-wifi',
    highlight: false,
    link: 'assets/certificates/Internet%20of%20Things%20NPTEL.jpg',
  },
  {
    title: 'IIM Bangalore Hackathon',
    description: 'Competed in a hackathon organized by IIM Bangalore, showcasing innovation and technical problem-solving.',
    
    icon: 'fas fa-university',
    highlight: false,
    link: 'assets/certificates/IIM%20Banglore.jpg',
  },
  {
    title: 'Convergence 2K25',
    description: 'Participated in Convergence 2K25 tech event showcasing innovation and technical skills.',
    icon: 'fas fa-rocket',
    highlight: false,
    link: 'assets/certificates/Convergence%202k25.jpg',
  },
  {
    title: 'Quantum Hackathon',
    description: 'Competed in a quantum computing hackathon demonstrating cutting-edge problem-solving skills.',
    icon: 'fas fa-atom',
    highlight: false,
    link: 'assets/certificates/quantum%20hackathon.jpg',
  },
  {
    title: 'Paranox 2.0 Hackathon',
    description: 'Participated in Paranox 2.0 hackathon, building innovative solutions under time constraints.',
    icon: 'fas fa-code',
    highlight: false,
    link: 'assets/certificates/paranox%202.0%20hackathon.jpg',
  },
  {
    title: 'Innovest Hackathon',
    description: 'Competed in Innovest hackathon, showcasing creativity and technical expertise.',
    icon: 'fas fa-lightbulb',
    highlight: false,
    link: 'assets/certificates/innovesthack.jpg',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section certs-section">
      <h2 className="section-title" data-aos="fade-up">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div
            className={`cert-card glass-card ${cert.highlight ? 'cert-highlight' : ''}`}
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            {cert.highlight && <div className="cert-badge">Winner</div>}
            <div className="cert-icon-wrapper">
              <i className={cert.icon}></i>
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" className="cert-btn" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
