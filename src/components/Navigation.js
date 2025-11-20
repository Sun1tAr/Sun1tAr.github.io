import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">💻 Sun1tAr</div>
        <div className="nav-links">
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;