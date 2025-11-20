import React from 'react';
import '../styles/ContactsSection.css';

function ContactsSection() {
  return (
    <section id="contacts" className="contacts">
      <h2>Свяжитесь со мной</h2>
      <p className="contacts-subtitle">
        Всегда открыт к обсуждению возможностей, проектов или интересному разговору о бэкенде.
      </p>
      <div className="contacts-buttons">
        <a href="https://t.me/Sun1tAr" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i> Telegram
        </a>
      </div>
    </section>
  );
}

export default ContactsSection;