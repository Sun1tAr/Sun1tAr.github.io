import React from 'react';
import '../styles/AboutSection.css';

function ResumeSection() {
    return (
        <section id="resume">
            <h2>Опыт и компетенции</h2>
            <div class="resume-preview">
                <div class="skills-grid">
                    <div class="skill-category">
                        <div class="skill-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3>Основной стек</h3>
                        <p>Java, Spring Boot, Spring Web, Spring MVC, Spring Data JPA, Spring Security, Spring Cache, Hibernate, PostgreSQL, MongoDB, Redis, REST API, Lombok, Maven, Docker</p>
                    </div>
                    <div class="skill-category">
                        <div class="skill-icon">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <h3>Образование</h3>
                        <p>МИРЭА (Магистратура, Промышленное программирование) 2025-2027</p>
                    </div>
                    <div class="skill-category">
                        <div class="skill-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <h3>Опыт работы</h3>
                        <p>ЕНТЦ "НЭК ТЕХ" - Мл. инженер отдела алгоритмов (Сен 2024 - по н.в.)</p>
                    </div>
                </div>
                {/*todo*/}
                {/*<a href="#" class="btn btn-primary">*/}
                {/*    <i class="fas fa-download"></i> Открыть полное резюме (PDF)*/}
                {/*</a>*/}
            </div>
        </section>
    );
}

export default ResumeSection;
