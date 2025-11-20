import React from 'react';
import '../styles/AboutSection.css';

function HeroSection() {
    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Денис Туев</h1>
                <p className="subtitle">Архитектор серверной логики</p>
                <p className="subtitle">Превращаю сложные задачи в элегантные решения на Java. Где техника встречается с
                    творчеством.</p>
                <div className="cta-buttons">
                    <a href="#projects" className="btn btn-primary">Смотреть проекты</a>
                    <a href="#contacts" className="btn btn-secondary">Написать в Telegram</a>
                </div>
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
