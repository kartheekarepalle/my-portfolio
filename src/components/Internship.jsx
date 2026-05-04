import React from 'react';
import './Internship.css';

const internships = [
  {
    role: 'Software Development Engineer (SDE) Intern',
    company: 'Bluestock Fintech',
    location: '—',
    period: 'Jan 2026 – Feb 2026',
    icon: 'fas fa-database',
    details: [
      'Developed and optimized backend APIs to improve application performance and scalability',
      'Worked on debugging and resolving real-time issues in production-level systems',
      'Collaborated with team members in Agile workflows including sprint planning and code reviews',
      'Contributed to building reliable and maintainable web application features',
    ],
    tags: ['Python', 'FastAPI', 'REST APIs', 'SQL', 'Git', 'Backend Development'],
    documents: [],
  },
  {
    role: 'Software Engineer Intern',
    company: 'YugaYatra Retail OPC Pvt. Limited',
    location: 'Bengaluru',
    period: 'Aug 2026 – Oct 2026',
    icon: 'fas fa-code',
    details: [
      'Assisted in coding, debugging, and testing to support the development of scalable web applications.',
      'Participated in all stages of the software development lifecycle, including frontend, backend, testing, and deployment.',
    ],
    tags: ['React.js', 'Node.js', 'JavaScript', 'REST APIs', 'Web Development'],
    documents: [
      { label: 'Offer Letter', icon: 'fas fa-file-alt', link: 'assets/certificates/YugaYatra%20Offer%20Letter.pdf' },
      { label: 'Internship Certificate', icon: 'fas fa-certificate', link: 'assets/certificates/YugaYatra%20Internship%20certificate.png' },
    ],
  },
  {
    role: 'AI Intern',
    company: 'EduExpose',
    location: 'Hyderabad',
    period: 'Aug 2026 – Oct 2026',
    icon: 'fas fa-brain',
    details: [
      'Contributed to building and fine-tuning AI/ML models for real-world applications including data cleaning, feature engineering, and model training.',
      'Collaborated with cross-functional teams to integrate ML models into production systems.',
    ],
    tags: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science', 'AI/ML'],
    documents: [
      { label: 'Offer Letter', icon: 'fas fa-file-alt', link: 'assets/certificates/Eduexpose%20offer%20letter.pdf' },
      { label: 'Internship Certificate', icon: 'fas fa-certificate', link: 'assets/certificates/EduExpose%20Internship%20Certificate.pdf' },
      { label: 'ID Card', icon: 'fas fa-id-card', link: 'assets/certificates/Eduexpose%20ID%20card.pdf' },
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="section internship-section">
      <h2 className="section-title" data-aos="fade-up">Internship Experience</h2>
      <div className="internship-timeline">
        <div className="timeline-line" />
        {internships.map((intern, idx) => (
          <div
            className="internship-card glass-card"
            key={idx}
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={idx * 200}
          >
            <div className="internship-dot">
              <div className="dot-inner" />
            </div>
            <div className="internship-header">
              <div className="internship-icon">
                <i className={intern.icon}></i>
              </div>
              <div className="internship-meta">
                <h3>{intern.role}</h3>
                <span className="internship-company">
                  <i className="fas fa-building"></i> {intern.company}
                </span>
                <div className="internship-info">
                  <span className="internship-location">
                    <i className="fas fa-map-marker-alt"></i> {intern.location}
                  </span>
                  <span className="internship-period">
                    <i className="fas fa-calendar-alt"></i> {intern.period}
                  </span>
                </div>
              </div>
            </div>
            <ul className="internship-details">
              {intern.details.map((detail, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="internship-tags">
              {intern.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            {intern.documents && intern.documents.length > 0 && (
              <div className="internship-docs">
                {intern.documents.map((doc, i) => (
                  <a key={i} href={doc.link} target="_blank" className="internship-doc-btn" rel="noopener noreferrer">
                    <i className={doc.icon}></i> {doc.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
