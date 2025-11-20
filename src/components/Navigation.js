import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <path className="logo-path" d="M10 20 L20 5 L30 20" stroke="url(#grad1)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="logo-path" d="M10 20 L20 35 L30 20" stroke="url(#grad2)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="20" cy="20" r="3" fill="url(#grad1)"/>
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF6B35"/>
                                <stop offset="100%" stopColor="#FF8E53"/>
                            </linearGradient>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF8E53"/>
                                <stop offset="100%" stopColor="#FF6B35"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="nav-links">
                    <a href="#hero">Главная</a>
                    <a href="#about">Обо мне</a>
                    <a href="#projects">Проекты</a>
                    <a href="#resume">Резюме</a>
                    <a href="#contacts">Контакты</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;