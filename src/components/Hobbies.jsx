import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    title: 'Pencil Art & Drawing',
    description: 'Creating detailed pencil sketches and portraits — turning imagination into art on paper.',
    icon: 'fas fa-pencil-alt',
    color: '#f59e0b',
    emoji: '✏️',
  },
  {
    title: 'Art & Crafts',
    description: 'Handcrafting creative pieces — from paper art to DIY decorations and artistic designs.',
    icon: 'fas fa-palette',
    color: '#ec4899',
    emoji: '🎨',
  },
  {
    title: 'Singing',
    description: 'Expressing emotions through music — love singing melodious songs in free time.',
    icon: 'fas fa-music',
    color: '#8b5cf6',
    emoji: '🎵',
  },
  {
    title: 'Reading Novels',
    description: 'Diving into fictional worlds and stories — an avid reader who loves exploring new narratives.',
    icon: 'fas fa-book-open',
    color: '#10b981',
    emoji: '📚',
  },
  {
    title: 'Badminton',
    description: 'Staying active and competitive on the court — love the thrill of a fast-paced rally.',
    icon: 'fas fa-table-tennis-paddle-ball',
    color: '#3b82f6',
    emoji: '🏸',
  },
  {
    title: 'Creative Photography',
    description: 'Capturing moments with a creative eye — finding beauty in everyday scenes and perspectives.',
    icon: 'fas fa-camera-retro',
    color: '#ef4444',
    emoji: '📷',
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="section hobbies-section">
      <h2 className="section-title" data-aos="fade-up">Hobbies & Interests</h2>
      <p className="hobbies-subtitle" data-aos="fade-up" data-aos-delay="100">
        Beyond coding — the things that keep me inspired and creative
      </p>
      <div className="hobbies-grid">
        {hobbies.map((hobby, idx) => (
          <div
            className="hobby-card glass-card"
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div className="hobby-icon-bg" style={{ background: `${hobby.color}15` }}>
              <div className="hobby-icon" style={{ background: `linear-gradient(135deg, ${hobby.color}, ${hobby.color}cc)` }}>
                <i className={hobby.icon}></i>
              </div>
            </div>
            <div className="hobby-emoji">{hobby.emoji}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
            <div className="hobby-glow" style={{ background: `radial-gradient(circle, ${hobby.color}20, transparent 70%)` }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
