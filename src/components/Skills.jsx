import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-terminal',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'C', icon: 'devicon-c-plain' },
      { name: 'C++', icon: 'devicon-cplusplus-plain' },
      { name: 'SQL', icon: 'fa-solid fa-database', isFa: true },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
      { name: 'REST APIs', icon: 'fa-solid fa-plug', isFa: true },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
    ],
  },
  {
    title: 'Web & Data Science',
    icon: 'fas fa-globe',
    skills: [
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'NumPy', icon: 'devicon-numpy-original' },
      { name: 'Pandas', icon: 'devicon-pandas-original' },
      { name: 'Scikit-learn', icon: 'fa-solid fa-brain', isFa: true },
      { name: 'Matplotlib', icon: 'fa-solid fa-chart-line', isFa: true },
      { name: 'Streamlit', icon: 'fa-solid fa-bolt', isFa: true },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title" data-aos="fade-up">Skills &amp; Technologies</h2>
      <div className="skills-categories">
        {skillCategories.map((cat, catIdx) => (
          <div className="skill-category" key={cat.title} data-aos="fade-up" data-aos-delay={catIdx * 150}>
            <div className="category-header">
              <div className="category-icon">
                <i className={cat.icon}></i>
              </div>
              <h3>{cat.title}</h3>
            </div>
            <div className="skills-grid">
              {cat.skills.map((skill, idx) => (
                <div
                  className="skill-card glass-card"
                  key={skill.name}
                  data-aos="zoom-in"
                  data-aos-delay={catIdx * 100 + idx * 50}
                  title={skill.name}
                >
                  <div className="skill-icon-wrapper">
                    <i className={`${skill.icon} skill-icon`}></i>
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
