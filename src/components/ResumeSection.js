import React from 'react';
import '../styles/ResumeSection.css';

function ResumeSection() {
    const skills = {
        backend: ['Java', 'Spring Boot', 'Spring Web', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Spring Cache', 'Hibernate', 'PostgreSQL', 'MongoDB', 'Redis'],
        tools: ['REST API', 'Lombok', 'Maven', 'Docker']
    };

    const experience = [
        {
            company: 'ЕНТЦ "НЭК ТЕХ"',
            position: 'Мл. инженер отдела алгоритмов',
            period: 'Сен 2024 - по н.в.'
        }
    ];

    const education = [
        {
            university: 'МИРЭА',
            degree: 'Магистратура, Промышленное программирование',
            period: '2025-2027'
        }
    ];

    return (
        <section id="resume">
            <h2>Опыт и компетенции</h2>

            <div className="resume-preview">
                <h3>Ключевые технологии</h3>
                <p style={{color: '#FF6B35', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                    {['Java', 'Spring Boot', 'Spring Web', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Spring Cache', 'Hibernate', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API', 'Lombok', 'Maven', 'Docker'].join(', ')}
                </p>
            </div>

            <div className="skills-grid">
                <div className="skill-category">
                    <div className="skill-icon">☕</div>
                    <h3>Backend</h3>
                    <p>Разработка надежных и масштабируемых REST API</p>
                </div>

                <div className="skill-category">
                    <div className="skill-icon">🗄️</div>
                    <h3>Базы данных</h3>
                    <p>PostgreSQL, MongoDB, Redis кэширование</p>
                </div>

                <div className="skill-category">
                    <div className="skill-icon">🚀</div>
                    <h3>DevOps</h3>
                    <p>Docker контейнеризация, развертывание</p>
                </div>
            </div>

            <div className="resume-preview">
                <h3>Опыт работы</h3>
                {experience.map((job, idx) => (
                    <div key={idx} style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 107, 53, 0.2)'}}>
                        <h4 style={{color: '#FF6B35'}}>{job.position}</h4>
                        <p style={{color: '#B0B0B0'}}>{job.company} • {job.period}</p>
                    </div>
                ))}
            </div>

            <div className="resume-preview">
                <h3>Образование</h3>
                {education.map((edu, idx) => (
                    <div key={idx} style={{marginBottom: '1.5rem'}}>
                        <h4 style={{color: '#FF6B35'}}>{edu.degree}</h4>
                        <p style={{color: '#B0B0B0'}}>{edu.university} • {edu.period}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ResumeSection;