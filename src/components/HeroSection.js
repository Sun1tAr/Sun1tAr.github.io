import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Архитектор серверной логики</h1>
        <p className="subtitle">Превращаю сложные задачи в элегантные решения на Java</p>
        <a href="#about" className="btn btn-primary">Узнать больше</a>
        <a href="#projects" className="btn btn-secondary">Мои проекты</a>
      </div>
    </section>
  );
}

export default HeroSection;