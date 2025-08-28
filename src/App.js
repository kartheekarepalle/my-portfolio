import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Mobile Menu Toggle
  const toggleMenu = () => {
    setNavLinksOpen(!navLinksOpen);
  };

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  // Active Link on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize AOS
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({ duration: 900, once: true });
      }
    };
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Kartheeka Repalle</div>
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="menu-btn"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        <ul className={`nav-links ${navLinksOpen ? 'open' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content" data-aos="fade-up">
          <img src="assets/images/pic 3.jpg" alt="Kartheeka Repalle" className="profile-pic" />
          <h1>Hello, I'm <span>Kartheeka Repalle</span></h1>
          <h3>Aspiring Software Engineer | AI & Web Enthusiast</h3>
          <a href="#about" className="btn">Explore My Work</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" data-aos="fade-up">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-img">
            <img src="assets/images/pic 4.jpg" alt="Kartheeka Repalle" />
          </div>
          <div className="about-card">
            <p>
              I am a passionate Computer Science undergraduate at Saveetha Institute of Technical
              and Medical Sciences. With strong foundations in Python, C/C++, SQL, and modern
              development tools, I specialize in building efficient applications and solving
              real-world problems through technology. My interests span from Artificial
              Intelligence and Machine Learning to Web Development and Software Engineering.
            </p>
            <p>
              Beyond coding, I focus on teamwork, problem-solving, and adapting quickly to
              emerging technologies. My goal is to contribute to innovative software solutions
              while continuously enhancing my technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section" data-aos="fade-up">
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills-grid">
          <div className="skill-card" title="Python">
            <i className="devicon-python-plain icon"></i>
            <span>Python</span>
          </div>

          <div className="skill-card" title="C">
            <i className="devicon-c-plain icon"></i>
            <span>C</span>
          </div>

          <div className="skill-card" title="C++">
            <i className="devicon-cplusplus-plain icon"></i>
            <span>C++</span>
          </div>

          <div className="skill-card" title="SQL">
            <i className="fa-solid fa-database icon"></i>
            <span>SQL</span>
          </div>

          <div className="skill-card" title="HTML & CSS">
            <div className="icons-duo">
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
            </div>
            <span>HTML & CSS</span>
          </div>

          <div className="skill-card" title="NumPy">
            <i className="devicon-numpy-original icon"></i>
            <span>NumPy</span>
          </div>

          <div className="skill-card" title="Pandas">
            <i className="devicon-pandas-original icon"></i>
            <span>Pandas</span>
          </div>

          <div className="skill-card" title="Matplotlib">
            <i className="fa-solid fa-chart-line icon"></i>
            <span>Matplotlib</span>
          </div>

          <div className="skill-card" title="TensorFlow">
            <i className="devicon-tensorflow-original icon"></i>
            <span>TensorFlow</span>
          </div>

          <div className="skill-card" title="React.js">
            <i className="devicon-react-original icon"></i>
            <span>React.js</span>
          </div>

          <div className="skill-card" title="Node.js">
            <i className="devicon-nodejs-plain icon"></i>
            <span>Node.js</span>
          </div>

          <div className="skill-card" title="Git & GitHub">
            <div className="icons-duo">
              <i className="devicon-git-plain"></i>
              <i className="devicon-github-original"></i>
            </div>
            <span>Git & GitHub</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section" data-aos="fade-up">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          <div className="project-card" data-aos="zoom-in">
            <h3>Personal Voice Assistant – CUTIE</h3>
            <p>
              A Python-based voice assistant capable of real-time voice recognition,
              speech synthesis, and task automation. CUTIE integrates web automation,
              scheduling, and intelligent responses to enhance productivity.
            </p>
            <p><strong>Tech Stack:</strong> Python, SpeechRecognition, pyttsx3, Web Browser, Datetime</p>
            <a href="https://github.com/kartheekarepalle/voice-desktop-assistant" className="btn" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>TuringPass – CAPTCHA Solver Detection</h3>
            <p>
              Developed a Flask-based security system to detect human vs bot CAPTCHA solvers
              using behavioral biometrics and an LSTM Autoencoder. Enhanced authentication
              by analyzing mouse movement and typing patterns.
            </p>
            <p><strong>Tech Stack:</strong> Python, Flask, Tailwind CSS, TensorFlow</p>
            <a href="https://github.com/kartheekarepalle/TuringPass" className="btn" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card" data-aos="zoom-in" data-aos-delay="400">
            <h3>Plant Disease Identification using Deep Learning</h3>
            <p>
              Built a deep learning-based system to identify plant diseases from uploaded
              images. The solution provides accurate predictions and helps farmers detect
              diseases early for effective crop management.
            </p>
            <p><strong>Tech Stack:</strong> Deep Learning, Python, HTML, TensorFlow</p>
            <button className="btn">Preview Project</button>
          </div>
        </div>

        <p className="github-link">
          🔗 Check more projects on my <a href="https://github.com/kartheekarepalle" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>

      {/* Education */}
      <section id="education" className="section" data-aos="fade-up">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-card" data-aos="slide-right">
            <div className="timeline-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <img src="assets/images/college.jpg" alt="Saveetha University" />
            <div>
              <h3>B.E. Computer Science and Engineering</h3>
              <p><strong>Saveetha Institute of Technical and Medical Sciences</strong> (2023 – 2027)</p>
              <p className="grade">CGPA: 9.21 / 10</p>
            </div>
          </div>

          <div className="timeline-card" data-aos="slide-right" data-aos-delay="200">
            <div className="timeline-icon">
              <i className="fas fa-school"></i>
            </div>
            <img src="assets/images/inter.jpg" alt="Sri Saraswathi Junior College" />
            <div>
              <h3>Intermediate (MPC)</h3>
              <p><strong>Sri Saraswathi Junior College, Ongole</strong> (2021 – 2023)</p>
              <p className="grade">Percentage: 85.9%</p>
            </div>
          </div>

          <div className="timeline-card" data-aos="slide-right" data-aos-delay="400">
            <div className="timeline-icon">
              <i className="fas fa-book"></i>
            </div>
            <img src="assets/images/school.jpg" alt="Dreamz High School" />
            <div>
              <h3>Secondary School Certificate (SSC)</h3>
              <p><strong>Dreamz High School, Pusapadu</strong> (2020 – 2021)</p>
              <p className="grade">Percentage: 100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section" data-aos="fade-up">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card" data-aos="flip-up">
            <div className="cert-icon">
              <i className="fab fa-java"></i>
            </div>
            <h3>Oracle Java SE 11 Developer</h3>
            <p>Gained strong skills in Java programming, OOP concepts, and application development.</p>
            <a href="assets/certificates/Java.jpg" target="_blank" className="btn" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>

          <div className="cert-card" data-aos="flip-up" data-aos-delay="100">
            <div className="cert-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Oracle Database SQL Certified</h3>
            <p>Learned advanced SQL queries, database design, and performance optimization techniques.</p>
            <a href="assets/certificates/oracle%20dbms.jpg" target="_blank" className="btn" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>

          <div className="cert-card" data-aos="flip-up" data-aos-delay="200">
            <div className="cert-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Infosys – Introduction to AI</h3>
            <p>Introduction to AI concepts, including supervised learning, unsupervised learning, and real-world use cases.</p>
            <a href="assets/certificates/ai%20certificate.jpg" target="_blank" className="btn" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>

          <div className="cert-card" data-aos="flip-up" data-aos-delay="300">
            <div className="cert-icon">
              <i className="fab fa-google"></i>
            </div>
            <h3>Google Cloud – Generative AI Studio</h3>
            <p>Hands-on experience with generative AI models, prompt engineering, and cloud-based ML tools.</p>
            <a href="assets/certificates/Generative%20AI%20Studio.jpg" target="_blank" className="btn" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>

          <div className="cert-card" data-aos="flip-up" data-aos-delay="400">
            <div className="cert-icon">
              <i className="fab fa-trophy"></i>
            </div>
            <h3>Unstop Hackathon Participation</h3>
            <p>Collaborated in a competitive environment, applied problem-solving and teamwork skills.</p>
            <a href="assets/certificates/unstop.jpg" target="_blank" className="btn" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-image" data-aos="zoom-in">
            <img src="assets/images/cartoon.jpg" alt="Contact" />
          </div>

          <div className="contact-form" data-aos="slide-left">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <div className="form-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="3d1bbe10-5500-4dda-9744-29b82201ecd4" />
              <input type="hidden" name="subject" value="New Contact from Portfolio" />

              <div className="input-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <i className="fas fa-user input-icon"></i>
              </div>

              <div className="input-group">
                <input type="email" name="email" placeholder="Email Address" required />
                <i className="fas fa-envelope input-icon"></i>
              </div>

              <div className="input-group">
                <input type="text" name="subject" placeholder="Subject" required />
                <i className="fas fa-tag input-icon"></i>
              </div>

              <div className="input-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <i className="fas fa-comment input-icon"></i>
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-about">
            <h3>Kartheeka Repalle</h3>
            <p>Aspiring AI & Data Science Engineer passionate about solving real-world problems with data-driven and intelligent solutions.</p>
            <div className="social-links">
              <button className="social-btn" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </button>
              <a href="https://github.com/kartheekarepalle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <button className="social-btn" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="social-btn" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> Chennai, India</p>
            <p><i className="fas fa-envelope"></i> kartheekarepalle313@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 9000901303</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Kartheeka Repalle. All Rights Reserved. Designed by Kartheeka❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;