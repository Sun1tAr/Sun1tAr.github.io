import React from 'react';
import '../styles/ProjectsSection.css';

function ProjectsSection() {
    const projects = {
        java: [
            {
                title: "HTTP Server v1",
                desc: "Пробное развертывание самописного HTTP сервера с двумя endpoint'ами",
                techs: ["Java", "HTTP Server", "REST API", "Maven"],
                repo: "HTTP-Server-v1",
                readme: true
            },
            {
                title: "Application Structure",
                desc: "Изучение основ построения структуры приложений и логирования запросов",
                techs: ["Java"],
                repo: "Application-Structure",
                readme: false
            },
            {
                title: "REST API CRUD",
                desc: "Полнофункциональное REST API с CRUD операциями и валидацией данных",
                techs: ["Java", "REST API", "CRUD", "Validation", "Spring Boot"],
                repo: "REST-API-CRUD",
                readme: true
            },
            {
                title: "Spring Boot REST API",
                desc: "Полнофункциональное REST API с CRUD операциями и валидацией данных",
                techs: ["Java", "Spring Boot", "Spring Web", "Spring Validation", "Lombok", "Maven"],
                repo: "Spring-Boot-REST-API",
                readme: true
            },
            {
                title: "Spring Data JPA",
                desc: "Работа с реляционной БД через Spring Data JPA и Hibernate ORM",
                techs: ["Java", "Spring Boot", "Spring Data JPA", "Lombok", "PostgreSQL", "Maven"],
                repo: "Spring-Data-JPA",
                readme: true
            },
            {
                title: "Note Management API",
                desc: "REST API сервис для управления заметками пользователей с поддержкой тегирования",
                techs: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "PostgreSQL", "Hibernate", "Lombok", "Maven"],
                repo: "Note-Management-API",
                readme: true
            },
            {
                title: "Redis Integration",
                desc: "REST API сервис для демонстрации различных способов интеграции Redis в Spring Boot приложение",
                techs: ["Java", "Spring Boot", "Spring Data Redis", "Spring Cache", "Redis", "RedisTemplate", "Lombok", "Maven"],
                repo: "Redis-Integration",
                readme: true
            },
            {
                title: "MongoDB API",
                desc: "REST API сервис для управления заметками с использованием MongoDB как основного хранилища данных",
                techs: ["Java", "Spring Boot", "Spring Web", "Spring Data MongoDB", "MongoDB", "Spring Cache", "Lombok", "Maven"],
                repo: "MongoDB-API",
                readme: true
            },
            {
                title: "UDP Time Tracker",
                desc: "Система отслеживания рабочего времени с распределённой архитектурой на UDP",
                techs: ["Java", "UDP", "Multi-threading", "pcap4j", "Maven"],
                repo: "UDP-Time-Tracker",
                readme: true
            },
            {
                title: "Task Management App",
                desc: "Веб-приложение для управления задачами с аутентификацией и изоляцией данных",
                techs: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Thymeleaf"],
                repo: "Task-Management-App",
                readme: true
            }
        ],
        go: [
            {
                title: "HTTP Server v1",
                desc: "Пробное развертывание самописного HTTP сервера с двумя endpoint'ами",
                techs: ["Go", "HTTP Server", "REST API"],
                repo: "GO-HTTP-Server-v1",
                readme: true
            },
            {
                title: "Application Structure",
                desc: "Изучение основ построения структуры приложений и работа с логгированием",
                techs: ["Go", "Application Structure", "Logging"],
                repo: "GO-Application-Structure",
                readme: false
            },
            {
                title: "REST API CRUD",
                desc: "Полнофункциональное REST API с CRUD операциями и валидацией",
                techs: ["Go", "REST API", "CRUD", "Middleware"],
                repo: "GO-REST-API-CRUD",
                readme: true
            },
            {
                title: "Chi Router API",
                desc: "CRUD сервис с версионированием API, пагинацией и фильтрацией",
                techs: ["Go", "Chi Router", "REST API", "Pagination"],
                repo: "GO-Chi-Router-API",
                readme: true
            },
            {
                title: "PostgreSQL Integration",
                desc: "Приложение для управления задачами с подключением к PostgreSQL",
                techs: ["Go", "PostgreSQL", "Connection Pool", "Transactions"],
                repo: "GO-PostgreSQL-Integration",
                readme: true
            },
            {
                title: "GORM ORM",
                desc: "ORM для работы с PostgreSQL, реализация связей 1:N и M:N через структуры Go",
                techs: ["Go", "GORM", "PostgreSQL", "Chi", "REST API"],
                repo: "GO-GORM-ORM",
                readme: true
            },
            {
                title: "Redis Cache",
                desc: "Реализация высокопроизводительного кэша на Redis с TTL",
                techs: ["Go", "Redis", "Caching", "TTL", "Docker"],
                repo: "GO-Redis-Cache",
                readme: true
            },
            {
                title: "MongoDB API",
                desc: "REST API для заметок с использованием документной модели данных",
                techs: ["Go", "MongoDB", "NoSQL", "CRUD"],
                repo: "GO-MongoDB-API",
                readme: true
            },
            {
                title: "Authentication System",
                desc: "Система регистрации и входа с безопасным хранением паролей",
                techs: ["Go", "PostgreSQL", "bcrypt", "Authentication"],
                repo: "GO-Authentication-System",
                readme: true
            },
            {
                title: "JWT Security",
                desc: "Система безопасности с access/refresh токенами и RBAC",
                techs: ["Go", "JWT", "RBAC", "Middleware", "Security"],
                repo: "GO-JWT-Security",
                readme: true
            },
            {
                title: "CRUD Service",
                desc: "Полнофункциональный CRUD сервис с правильными HTTP методами",
                techs: ["Go", "REST API", "CRUD", "Chi Router"],
                repo: "GO-CRUD-Service",
                readme: false
            },
            {
                title: "Swagger API",
                desc: "Полнофункциональный REST API сервис для управления заметками на Go с интегрированной интерактивной документацией Swagger UI",
                techs: ["Go", "REST API", "Chi Router", "Swagger", "OpenAPI", "swaggo/swag", "JSON", "Mutex"],
                repo: "GO-Swagger-API",
                readme: true
            }
        ]
    };

    const renderProjectCard = (project) => (
        <div key={project.repo} className="project-card" onClick={() => openProject(project.repo)}>
            {project.readme && <span className="readme-indicator"><i className="fas fa-file-pdf"></i> README</span>}
            <div className="project-icon">📁</div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div>
                {project.techs.map(tech => (
                    <span key={tech} className="project-tech">{tech}</span>
                ))}
            </div>
        </div>
    );

    const openProject = (repoName) => {
        window.open(`https://github.com/Sun1tAr/${repoName}`, '_blank');
    };

    return (
        <section id="projects">
            <h2>Лаборатория идей</h2>
            <p className="section-subtitle">Здесь я оттачиваю мастерство через практику и пет-проекты</p>

            <div className="projects-group">
                <h3 className="group-title">
                    <i className="fab fa-java"></i> Java & Spring Boot
                </h3>
                <div className="projects-grid">
                    {projects.java.map(project => renderProjectCard(project))}
                </div>
            </div>

            <div className="projects-group">
                <h3 className="group-title">
                    <i className="fab fa-golang"></i> Go
                </h3>
                <div className="projects-grid">
                    {projects.go.map(project => renderProjectCard(project))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;