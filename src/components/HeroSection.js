import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Денис Туев</h1>
                <p className="subtitle">Архитектор серверной логики</p>
                <p className="section-subtitle">Превращаю сложные задачи в элегантные решения на Java. Где техника встречается с творчеством.</p>
                <a href="#projects" className="btn btn-primary">Смотреть проекты</a>
                <a href="#contacts" className="btn btn-secondary telegram-btn">
                    <i className="fab fa-telegram"></i> Написать в Telegram
                </a>
            </div>

            <div className="hero-bg">
                <div className="circuit-animation">
                    <div className="circuit-line"></div>
                    <div className="circuit-node"></div>
                    <div className="circuit-line"></div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;