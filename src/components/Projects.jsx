import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AstraC Studio – C Compiler IDE',
    period: 'Mar 2026',
    description: 'A browser-based IDE that compiles, analyzes, and executes C programs. Features a 6-phase compiler pipeline (lexer, parser, semantic analysis, IR generation, optimization, code generation) with interactive AST visualization, Monaco Editor, and real-time program execution via GCC backend.',
    tech: ['Python', 'FastAPI', 'React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GCC'],
    icon: 'fas fa-terminal',
    color: '#6366f1',
    github: 'https://github.com/kartheekarepalle/AstraC-Studio',
    live: 'https://astrac-studio.vercel.app/',
  },
  {
    title: 'AI-Powered Mock Interview Platform',
    period: 'Nov 2025 – Jan 2026',
    description:
      'Built an intelligent mock interview platform that uses AI to generate role-specific technical and behavioral questions. Integrated a deep learning model for evaluating candidate responses in real-time, providing scores and feedback. Designed RESTful APIs with FastAPI and SQLAlchemy for backend logic and data handling. Implemented Retrieval-Augmented Generation (RAG) for context-aware question generation and response evaluation.',
    tech: ['Python', 'FastAPI', 'React.js', 'JavaScript', 'REST APIs', 'SQLAlchemy', 'Deep Learning'],
    icon: 'fas fa-robot',
    color: '#a855f7',
    github: 'https://github.com/kartheekarepalle/AI-interviewer-pro-max',
    liveV1: 'https://chowdary1-ai-interviewer-version-1.hf.space/',
    liveV2: 'https://chowdary1-ai-interviewer-version-2.hf.space/',
  },
  {
    title: 'TuringPass – CAPTCHA Detection System',
    period: 'Aug 2025',
    description: 'A CAPTCHA solver detection system that determines whether a CAPTCHA is solved by a human or a bot using behavioral biometrics and deep learning. Features LSTM Autoencoder for anomaly detection on behavioral data, CNN-based OCR for CAPTCHA solving, and bot simulation with randomized mouse/keyboard patterns.',
    tech: ['Python', 'Flask', 'LSTM', 'CNN', 'TensorFlow', 'Tailwind CSS', 'JavaScript'],
    icon: 'fas fa-shield-halved',
    color: '#10b981',
    github: 'https://github.com/kartheekarepalle/TuringPass',
    live: null,
  },
  {
    title: 'GENAI Intelligent Studio',
    period: 'Nov 2025 – Jan 2026',
    description: 'Developed a full-stack Generative AI platform with Agentic RAG and Multi-Agent System. Features intelligent text generation, prompt-based interactions, and document understanding using large language models with FAISS vector search and HuggingFace embeddings.',
    tech: ['Python', 'Groq', 'FAISS', 'HuggingFace', 'LangChain', 'Streamlit'],
    icon: 'fas fa-wand-magic-sparkles',
    color: '#7c3aed',
    github: 'https://github.com/kartheekarepalle/GENAI-Intelligence-Studio',
    live: 'https://6kx1hnr4-8501.inc1.devtunnels.ms/',
  },
  {
    title: 'DATA VISION – AutoML Platform',
    period: 'Aug 2025 – Nov 2025',
    description: 'Created a no-code machine learning platform enabling users to upload datasets, automatically preprocess data, select models, and evaluate performance with visual dashboards. Implemented automated EDA, model comparison, and downloadable prediction reports.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit'],
    icon: 'fas fa-chart-bar',
    color: '#c084fc',
    github: null,
    live: 'https://datavision-ai-datavision.hf.space/',
  },
  {
    title: 'Cutie – Voice Desktop Assistant',
    period: 'Aug 2025',
    description: 'An AI-powered personal voice assistant built with Python. Supports voice recognition, web search, email automation, file operations, date/time queries, and conversational AI — all through hands-free voice commands.',
    tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'Web Browser', 'OS'],
    icon: 'fas fa-microphone',
    color: '#f59e0b',
    github: 'https://github.com/kartheekarepalle/voice-desktop-assistant',
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title" data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div
            className="project-card glass-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <div className="project-card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)` }} />
            <div className="project-header">
              <div className="project-icon" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)` }}>
                <i className={project.icon}></i>
              </div>
              <div className="project-period">
                <i className="fas fa-calendar-alt"></i> {project.period}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              )}
              {/* Custom: AI Interviewer two demo buttons, else default */}
              {project.title === 'AI-Powered Mock Interview Platform' ? (
                <>
                  <a href={project.liveV1} className="project-link live" target="_blank" rel="noopener noreferrer" style={{marginRight: 8}}>
                    <i className="fas fa-external-link-alt"></i> Version 1
                  </a>
                  <a href={project.liveV2} className="project-link live" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Version 2
                  </a>
                </>
              ) : (
                project.live && (
                  <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta" data-aos="fade-up">
        <a
          href="https://github.com/kartheekarepalle"
          className="btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
