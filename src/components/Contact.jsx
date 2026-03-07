import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="contact-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 8}s`,
          }} />
        ))}
      </div>
      <h2 className="section-title" data-aos="fade-up">Get in Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info" data-aos="fade-right">
          <h3>Let's Work Together</h3>
          <p>Feel free to reach out for collaborations, opportunities, or just a friendly hello!</p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>kartheekarepalle313@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 9000901303</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form glass-card" data-aos="fade-left">
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
              <i className="fas fa-user input-icon"></i>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <i className="fas fa-envelope input-icon"></i>
              <input type="email" name="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <i className="fas fa-tag input-icon"></i>
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <div className="input-group">
              <i className="fas fa-comment input-icon textarea-icon"></i>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
