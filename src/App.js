import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsPage from './components/ProjectsPage';
import ResumeSection from './components/ResumeSection';
import ContactsSection from './components/ContactsSection';
import './styles/App.css';

function App() {
    useEffect(() => {
        // Плавная прокрутка для навигации
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Изменение навигации при скролле
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('nav-active');
            } else {
                nav.classList.remove('nav-active');
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Анимация появления элементов при скролле
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Анимация появления элементов
        const elementsToAnimate = document.querySelectorAll(
            '.skill-category, .resume-preview, .about-content, .projects-page'
        );
        elementsToAnimate.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });

        // Обработка мобильного меню
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                } else {
                    navLinks.style.display = 'flex';
                }
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        navLinks.style.display = 'none';
                    }
                });
            });
        }

        // Параллакс эффект для hero section
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            const hero = document.getElementById('hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };
        window.addEventListener('scroll', handleParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleParallax);
        };
    }, []);

    return (
        <div className="App">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <section id="projects">
                <ProjectsPage />
            </section>
            <ResumeSection />
            <ContactsSection />
        </div>
    );
}

export default App;
