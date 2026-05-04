import React from 'react';
import './Skills.css';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-terminal',
    skills: [
      { name: 'Python', img: `${CDN}/python/python-original.svg` },
      { name: 'C', img: `${CDN}/c/c-original.svg` },
      { name: 'C++', img: `${CDN}/cplusplus/cplusplus-original.svg` },
      { name: 'SQL', faIcon: 'fas fa-database' },
      { name: 'JavaScript', img: `${CDN}/javascript/javascript-original.svg` },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'React.js', img: `${CDN}/react/react-original.svg` },
      { name: 'Node.js', img: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', img: `${CDN}/express/express-original.svg`, dark: true },
      { name: 'Tailwind CSS', img: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'TensorFlow', img: `${CDN}/tensorflow/tensorflow-original.svg` },
      { name: 'REST APIs', faIcon: 'fas fa-plug' },
      { name: 'Git', img: `${CDN}/git/git-original.svg` },
      { name: 'GitHub', img: `${CDN}/github/github-original.svg`, dark: true },
    ],
  },
  {
    title: 'Web & Data Science',
    icon: 'fas fa-globe',
    skills: [
      { name: 'HTML', img: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS', img: `${CDN}/css3/css3-original.svg` },
      { name: 'NumPy', img: `${CDN}/numpy/numpy-original.svg` },
      { name: 'Pandas', img: `${CDN}/pandas/pandas-original.svg`, dark: true },
      { name: 'Scikit-learn', img: `${CDN}/scikitlearn/scikitlearn-original.svg` },
      { name: 'Matplotlib', img: `${CDN}/matplotlib/matplotlib-original.svg` },
      { name: 'Streamlit', img: `${CDN}/streamlit/streamlit-original.svg` },
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
                    {skill.img ? (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className={`skill-icon-img${skill.dark ? ' dark-icon' : ''}`}
                      />
                    ) : (
                      <i className={`${skill.faIcon} skill-icon`}></i>
                    )}
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
