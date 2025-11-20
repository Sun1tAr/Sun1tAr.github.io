import React from 'react';
import '../styles/AboutSection.css';

function ContactsSection() {
    return (
        <section id="contacts">
            <h2>Давайте построим что-то вместе</h2>
            <p class="section-subtitle">Всегда открыт к обсуждению возможностей, проектов или просто интересному разговору о бэкенде.</p>
            <a href="https://t.me/Sun1tAr" class="btn btn-primary telegram-btn">
                <i class="fab fa-telegram"></i> Написать в Telegram
            </a>
            <div class="contact-links">
                <a href="mailto:Sun1tAr@yandex.ru" class="contact-link">
                    <i class="fas fa-envelope"></i> Sun1tAr@yandex.ru
                </a>
                <a href="https://github.com/Sun1tAr" class="contact-link" target="_blank">
                    <i class="fab fa-github"></i> github.com/Sun1tAr
                </a>
            </div>
        </section>
    );
}

export default ContactsSection;
