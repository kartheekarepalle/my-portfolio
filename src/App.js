import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setNavLinksOpen(!navLinksOpen);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'internship', label: 'Internship' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="App">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo gradient-text">Kartheeka Repalle</div>
        <button className="menu-btn" aria-label="Menu" onClick={toggleMenu}>
          <span className={`hamburger ${navLinksOpen ? 'open' : ''}`} />
        </button>
        <ul className={`nav-links ${navLinksOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setNavLinksOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <Hero />
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Certifications />
      <Achievements />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;