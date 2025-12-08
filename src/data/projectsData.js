export default {
    java: [
        {
            title: "Practice 7 • Интеграция Redis в Spring Boot",
            desc: "REST API сервис для демонстрации различных способов интеграции Redis в Spring Boot приложение",
            techs: ["Java", "Spring Boot", "Redis", "Caching", "Spring Data Redis"],
            repo: "MIREA-FFJ-Practice-7",
            readme: true,
            website: "https://spring.io/projects/spring-data-redis",
            icon: "fas fa-bolt"
        },
        {
            title: "Practice 9 • Аутентификация и авторизация",
            desc: "REST API сервис с реализацией механизма аутентификации и авторизации на основе Spring Security",
            techs: ["Java", "Spring Security", "PostgreSQL", "BCrypt", "Spring Boot"],
            repo: "MIREA-FFJ-Practice-9",
            readme: true,
            website: "",
            icon: "fas fa-lock"
        },
        {
            title: "Practice 10 • JWT Токены и Refresh Token Механизм",
            desc: "REST API с реализацией JWT и Refresh Token механизма, две версии API (v1 с ACCESS token, v2 с двухфакторным механизмом и Redis)",
            techs: ["Java", "Spring Boot", "JWT", "Redis", "JJWT", "Spring Security"],
            repo: "MIREA-FFJ-Practice-10",
            readme: true,
            website: "https://jwt.io",
            icon: "fas fa-key"
        },
        {
            title: "Practice 5 • ORM и работа с БД",
            desc: "Работа с реляционной БД через Spring Data JPA и Hibernate ORM",
            techs: ["Java", "Spring Data JPA", "PostgreSQL", "Hibernate", "Spring Boot"],
            repo: "MIREA-FFJ-Practice-5",
            readme: true,
            website: "",
            icon: "fas fa-database"
        }
    ],
    go: [
        {
            title: "Practice 13 • Профилирование Go-приложения (pprof)",
            desc: "Практическое занятие по профилированию производительности Go с использованием встроенного pprof",
            techs: ["Go", "pprof", "Performance", "Benchmarking", "CPU Profiling"],
            repo: "MIREA-TIP-Practice-13",
            readme: true,
            website: "https://pkg.go.dev/runtime/pprof",
            icon: "fas fa-fire"
        },
        {
            title: "Practice 15 • Unit-тестирование функций в Go",
            desc: "Unit-тестирование в Go с пакетом testing, testify, табличные тесты и измерением покрытия кода",
            techs: ["Go", "testing", "testify", "Code Coverage", "Benchmarks"],
            repo: "MIREA-TIP-Practice-15",
            readme: true,
            website: "",
            icon: "fas fa-flask"
        },
        {
            title: "Practice 16 • Интеграционное тестирование API с Docker",
            desc: "Интеграционное тестирование REST API с использованием Docker и testcontainers для изолированного тестирования",
            techs: ["Go", "Docker", "Integration Testing", "PostgreSQL", "testcontainers"],
            repo: "MIREA-TIP-Practice-16",
            readme: true,
            website: "https://testcontainers.com",
            icon: "fas fa-cube"
        },
        {
            title: "Practice 14 • Connection Pool и оптимизации БД",
            desc: "Оптимизация работы с PostgreSQL: Connection Pool, Keyset-пагинация, батчинг для избежания N+1, GIN индексы",
            techs: ["Go", "PostgreSQL", "Performance", "Optimization", "Database"],
            repo: "MIREA-TIP-Practice-14",
            readme: true,
            website: "",
            icon: "fas fa-tachometer-alt"
        }
    ],
    pet: [
        {
            title: "MyManager - TimeTracker",
            desc: "Система отслеживания рабочего времени с распределённой архитектурой на UDP",
            techs: ["Java", "UDP", "Multi-threading", "pcap4j", "Networking"],
            repo: "Pet-WorkTimeManager-BackEnd",
            readme: true,
            website: "https://example.com/timetracker",
            icon: "fas fa-clock"
        },
        {
            title: "Task Tracker - Spring MVC",
            desc: "Веб-приложение для управления задачами с аутентификацией и изоляцией данных пользователей",
            techs: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Spring Security"],
            repo: "Pet-TaskTracker-MVC",
            readme: true,
            website: "",
            icon: "fas fa-tasks"
        },
        {
            title: "Notes API - Go + PostgreSQL",
            desc: "RESTful сервис для управления заметками с полнотекстовым поиском и пагинацией",
            techs: ["Go", "PostgreSQL", "Chi Router", "Full-Text Search", "REST API"],
            repo: "Pet-NotesAPI-Go",
            readme: true,
            website: "https://example.com/notes",
            icon: "fas fa-sticky-note"
        }
    ],
    frontend: [
        {
            title: "Portfolio Website",
            desc: "Современный портфолио с анимациями, адаптивным дизайном и интерактивными элементами",
            techs: ["React", "CSS3", "JavaScript", "Webpack", "Animation"],
            repo: "portfolio-website",
            readme: true,
            website: "https://myportfolio.dev",
            icon: "fas fa-globe"
        },
        {
            title: "Dashboard UI Kit",
            desc: "Библиотека компонентов для создания админ-панелей и dashboards",
            techs: ["React", "TypeScript", "Storybook", "CSS Modules", "Component Library"],
            repo: "dashboard-ui-kit",
            readme: true,
            website: "",
            icon: "fas fa-chart-line"
        },
        {
            title: "E-commerce Platform",
            desc: "Полнофункциональный интернет-магазин с корзиной и интеграцией платежей",
            techs: ["React", "Redux", "Stripe API", "Node.js", "E-commerce"],
            repo: "ecommerce-platform",
            readme: true,
            website: "https://shop.example.com",
            icon: "fas fa-shopping-cart"
        }
    ]
};
