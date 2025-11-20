import React from 'react';
import '../styles/AboutSection.css';

function ProjectsSection() {
    function openProject(repoName) {
        const githubUrl = `https://github.com/Sun1tAr/${repoName}`;
        window.open(githubUrl, '_blank');
    }

    const javaProjects = [
        {
            title: "Practice 1 • Первый сервер на Java",
            desc: "Пробное развертывание самописного HTTP сервера с двумя endpoint'ами",
            techs: ["Java", "HTTP Server", "REST API", "Maven"],
            repo: "MIREA-FFJ-Practice-1",
            readme: true,
            icon: "fab fa-java" },
        {
            title: "Practice 2 • Архитектура приложений",
            desc: "Изучение основ построения структуры приложений и логирования запросов",
            techs: ["Java", "AOP", "Logging", "Spring MVC"],
            repo: "MIREA-FFJ-Practice-2",
            readme: true,
            icon: "fas fa-sitemap"
        },
        {
            title: "Practice 3 • REST API для задач",
            desc: "Полнофункциональное REST API с CRUD операциями и валидацией данных",
            techs: ["Java", "REST API", "CRUD", "Validation", "Spring Boot"],
            repo: "MIREA-FFJ-Practice-3",
            readme: true,
            icon: "fas fa-tasks"
        },
        {
            title: "Practice 4 • Интерцепторы и CRUD-сервис",
            desc: "Полнофункциональное REST API с CRUD операциями и валидацией данных",
            techs: ["Java", "Spring Boot", "Spring Web", "Spring Validation", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-4",
            readme: true,
            icon: "fas fa-tasks"
        },
        {
            title: "Practice 5 • ORM и работа с БД",
            desc: "Работа с реляционной БД через Spring Data JPA и Hibernate ORM",
            techs: ["Java", "Spring Boot", "Spring Data JPA", "Lombok", "PostgreSQL", "Maven"],
            repo: "MIREA-FFJ-Practice-5",
            readme: true,
            icon: "fas fa-database"
        },
        {
            title: "Practice 6 • REST API для заметок",
            desc: "REST API сервис для управления заметками пользователей с поддержкой тегирования",
            techs: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "PostgreSQL", "Hibernate", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-6",
            readme: true,
            icon: "fas fa-sticky-note"
        },
        {
            title: "Practice 7 • Интеграция Redis в Spring Boot",
            desc: "REST API сервис для демонстрации различных способов интеграции Redis в Spring Boot приложение",
            techs: ["Java", "Spring Boot", "Spring Data Redis", "Spring Cache", "Redis", "RedisTemplate", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-7",
            readme: true,
            icon: "fas fa-bolt"
        },
        {
            title: "Practice 8 • REST API для заметок с MongoDB",
            desc: "REST API сервис для управления заметками с использованием MongoDB как основного хранилища данных",
            techs: ["Java", "Spring Boot", "Spring Web", "Spring Data MongoDB", "MongoDB", "Spring Cache", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-8",
            readme: true,
            icon: "fas fa-leaf"
        }
    ]

    const petProjects = [
        {
            title: "MyManager - TimeTracker",
            desc: "Система отслеживания рабочего времени с распределённой архитектурой на UDP",
            techs: ["Java", "UDP", "Multi-threading", "pcap4j", "Maven"],
            repo: "Pet-WorkTimeManager-BackEnd",
            readme: true,
            icon: "fas fa-clock"
        },
        {
            title: "Task Tracker - Spring MVC",
            desc: "Веб-приложение для управления задачами с аутентификацией и изоляцией данных",
            techs: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Thymeleaf"],
            repo: "Pet-TaskTracker-MVC",
            readme: true,
            icon: "fas fa-tasks"
        }
    ]

    const goProjects = [
        {
            title: "Practice 1 • Первый сервер на Go",
            desc: "Пробное развертывание самописного HTTP сервера с двумя endpoint'ами",
            techs: ["Go", "HTTP Server", "REST API"],
            repo: "MIREA-TIP-Practice-1",
            readme: true,
            icon: "fab fa-golang"
        },
        {
            title: "Practice 2 • Архитектура приложений",
            desc: "Изучение основ построения структуры приложений и работа с логгированием",
            techs: ["Go", "Application Structure", "Logging"],
            repo: "MIREA-TIP-Practice-2",
            readme: true,
            icon: "fas fa-sitemap"
        },
        {
            title: "Practice 3 • REST API для задач",
            desc: "Полнофункциональное REST API с CRUD операциями и валидацией",
            techs: ["Go", "REST API", "CRUD", "Middleware"],
            repo: "MIREA-TIP-Practice-3",
            readme: true,
            icon: "fas fa-tasks"
        },
        {
            title: "Practice 4 • Продвинутый REST API",
            desc: "CRUD сервис с версионированием API, пагинацией и фильтрацией",
            techs: ["Go", "Chi Router", "REST API", "Pagination"],
            repo: "MIREA-TIP-Practice-4",
            readme: true,
            icon: "fas fa-route"
        },
        {
            title: "Practice 5 • PostgreSQL и пул соединений",
            desc: "Приложение для управления задачами с подключением к PostgreSQL",
            techs: ["Go", "PostgreSQL", "Connection Pool", "Transactions"],
            repo: "MIREA-TIP-Practice-5",
            readme: true,
            icon: "fas fa-database"
        },
        {
            title: "Practice 6 • GORM и связи в БД",
            desc: "ORM для работы с PostgreSQL, реализация связей 1:N и M:N через структуры Go",
            techs: ["Go", "GORM", "PostgreSQL", "Chi", "REST API"],
            repo: "MIREA-TIP-Practice-6",
            readme: true,
            icon: "fas fa-database"
        },
        {
            title: "Practice 7 • Redis кэширование",
            desc: "Реализация высокопроизводительного кэша на Redis с TTL",
            techs: ["Go", "Redis", "Caching", "TTL", "Docker"],
            repo: "MIREA-TIP-Practice-7",
            readme: true,
            icon: "fas fa-bolt"
        },
        {
            title: "Practice 8 • MongoDB",
            desc: "REST API для заметок с использованием документной модели данных",
            techs: ["Go", "MongoDB", "NoSQL", "CRUD"],
            repo: "MIREA-TIP-Practice-8",
            readme: true,
            icon: "fas fa-leaf"
        },
        {
            title: "Practice 9 • Аутентификация",
            desc: "Система регистрации и входа с безопасным хранением паролей",
            techs: ["Go", "PostgreSQL", "bcrypt", "Authentication"],
            repo: "MIREA-TIP-Practice-9",
            readme: true,
            icon: "fas fa-user-shield"
        },
        {
            title: "Practice 10 • JWT аутентификация",
            desc: "Система безопасности с access/refresh токенами и RBAC",
            techs: ["Go", "JWT", "RBAC", "Middleware", "Security"],
            repo: "MIREA-TIP-Practice-10",
            readme: true,
            icon: "fas fa-key"
        },
        {
            title: "Practice 11 • REST API для заметок",
            desc: "Полнофункциональный CRUD сервис с правильными HTTP методами",
            techs: ["Go", "REST API", "CRUD", "Chi Router"],
            repo: "MIREA-TIP-Practice-11",
            readme: true,
            icon: "fas fa-sticky-note"
        },
        {
            title: "Practice 12 • REST API с Swagger/OpenAPI в Go",
            desc: "Полнофункциональный REST API сервис для управления заметками на Go с интегрированной интерактивной документацией Swagger UI",
            techs: ["Go", "REST API", "Chi Router", "Swagger", "OpenAPI", "swaggo/swag", "JSON", "Mutex"],
            repo: "MIREA-TIP-Practice-12",
            readme: true,
            icon: "fab fa-golang"
        }
    ];

    return (
        <section id="projects">
            <h2>Лаборатория идей</h2>
            <p className="section-subtitle">Здесь я оттачиваю мастерство через практику и пет-проекты</p>

            <div className="projects-group">
                <h3 className="group-title">
                    <i className="fab fa-java"></i> Учебные проекты на Java
                </h3>
                <div className="projects-grid">
                    {javaProjects.map(project => (
                        <div key={project.repo} className="project-card" onClick={() => openProject(project.repo)}>
                            {project.readme && <span className="readme-indicator">
                                <i className="fas fa-file-pdf"></i> README</span>}
                            <div className="project-icon">
                                <i className={project.icon}/>
                            </div>
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <div className="tech-divider"></div>
                            <div>
                                {project.techs.map(tech => (
                                    <span key={tech} className="project-tech">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-group">
                <h3 className="group-title">
                    <i className="fas fa-star"></i> Пет-проекты
                </h3>
                <div className="projects-grid">
                    {petProjects.map(project => (
                        <div key={project.repo} className="project-card" onClick={() => openProject(project.repo)}>
                            {project.readme && <span className="readme-indicator">
                                <i className="fas fa-file-pdf"></i> README</span>}
                            <div className="project-icon">
                                <i className={project.icon}/>
                            </div>
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <div className="tech-divider"></div>
                            <div>
                                {project.techs.map(tech => (
                                    <span key={tech} className="project-tech">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-group">
                <h3 className="group-title">
                    <i className="fab fa-golang"></i> Go
                </h3>
                <div className="projects-grid">
                    {goProjects.map(project => (
                        <div key={project.repo} className="project-card" onClick={() => openProject(project.repo)}>
                            {project.readme && <span className="readme-indicator">
                                <i className="fas fa-file-pdf"></i> README</span>}
                            <div className="project-icon">
                                <i className={project.icon}/>
                            </div>
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <div className="tech-divider"></div>
                            <div>
                                {project.techs.map(tech => (
                                    <span key={tech} className="project-tech">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
