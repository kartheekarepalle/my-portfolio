import React from 'react';
import './Education.css';

const education = [
  {
    icon: 'fas fa-graduation-cap',
    image: 'assets/images/college.jpg',
    degree: 'B.E. Computer Science and Engineering',
    school: 'Saveetha Institute of Technical and Medical Sciences, Chennai',
    period: '2023 – 2027',
    grade: 'CGPA: 9.4 / 10',
    coursework: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'AI/ML'],
  },
  {
    icon: 'fas fa-school',
    image: 'assets/images/inter.jpg',
    degree: 'Intermediate (MPC)',
    school: 'Sri Saraswathi Junior College, Ongole',
    period: '2021 – 2023',
    grade: 'Percentage: 85.9%',
    coursework: null,
  },
  {
    icon: 'fas fa-school',
    image: 'assets/images/school.jpg',
    degree: 'SSC (10th Standard)',
    school: 'Dreamz Concept High School, Ongole',
    period: '2021',
    grade: 'Percentage: 100%',
    coursework: null,
  },
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <h2 className="section-title" data-aos="fade-up">Education</h2>
      <div className="education-timeline">
        {education.map((edu, idx) => (
          <div
            className="edu-card glass-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <div className="edu-timeline-dot" />
            <div className="edu-top">
              <div className="edu-icon-wrapper">
                <i className={edu.icon}></i>
              </div>
              <img src={edu.image} alt={edu.school} className="edu-image" />
              <div className="edu-info">
                <h3>{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <div className="edu-meta">
                  <span className="edu-period">
                    <i className="fas fa-calendar-alt"></i> {edu.period}
                  </span>
                  <span className="edu-grade">
                    <i className="fas fa-star"></i> {edu.grade}
                  </span>
                </div>
              </div>
            </div>
            {edu.coursework && (
              <div className="edu-coursework">
                <h4>Relevant Coursework</h4>
                <div className="coursework-tags">
                  {edu.coursework.map((course) => (
                    <span key={course} className="tag">{course}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
