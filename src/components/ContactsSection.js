import React from 'react';
import '../styles/ContactsSection.css';

function ContactsSection() {
    return (
        <section id="contacts">
            <h2>Давайте построим что-то вместе</h2>
            <p className="section-subtitle">
                Всегда открыт к обсуждению возможностей, проектов или просто интересному разговору о бэкенде.
            </p>

            <div className="contact-links">
                <a href="https://t.me/Sun1tAr" className="contact-link telegram-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram"></i> Написать в Telegram
                </a>
                <a href="mailto:Sun1tAr@yandex.ru" className="contact-link">
                    <i className="fas fa-envelope"></i> Sun1tAr@yandex.ru
                </a>
                <a href="https://github.com/Sun1tAr" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> github.com/Sun1tAr
                </a>
            </div>
        </section>
    );
}

export default ContactsSection;