export default {
    java: [
        {
            title: "Practice 1 • Первый сервер на Java",
            desc: "Пробное развертывание самописного HTTP сервера с двумя endpoint'ами",
            techs: ["Java", "HTTP Server", "REST API", "Maven"],
            repo: "MIREA-FFJ-Practice-1",
            readme: true,
            website: "",
            icon: "fab fa-java" },
        {
            title: "Practice 2 • Архитектура приложений",
            desc: "Изучение основ построения структуры приложений и логирования запросов",
            techs: ["Java", "AOP", "Logging", "Spring MVC"],
            repo: "MIREA-FFJ-Practice-2",
            readme: true,
            website: "",
            icon: "fas fa-sitemap"
        },
        {
            title: "Practice 3 • REST API для задач",
            desc: "Полнофункциональное REST API с CRUD операциями и валидацией данных",
            techs: ["Java", "REST API", "CRUD", "Validation", "Spring Boot"],
            repo: "MIREA-FFJ-Practice-3",
            readme: true,
            website: "",
            icon: "fas fa-tasks"
        },
        {
            title: "Practice 4 • Интерцепторы и CRUD-сервис",
            desc: "Полнофункциональное REST API с CRUD операциями и валидацией данных",
            techs: ["Java", "Spring Boot", "Spring Web", "Spring Validation", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-4",
            readme: true,
            website: "",
            icon: "fas fa-tasks"
        },
        {
            title: "Practice 5 • ORM и работа с БД",
            desc: "Работа с реляционной БД через Spring Data JPA и Hibernate ORM",
            techs: ["Java", "Spring Boot", "Spring Data JPA", "Lombok", "PostgreSQL", "Maven"],
            repo: "MIREA-FFJ-Practice-5",
            readme: true,
            website: "",
            icon: "fas fa-database"
        },
        {
            title: "Practice 6 • REST API для заметок",
            desc: "REST API сервис для управления заметками пользователей с поддержкой тегирования",
            techs: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "PostgreSQL", "Hibernate", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-6",
            readme: true,
            website: "",
            icon: "fas fa-sticky-note"
        },
        {
            title: "Practice 7 • Интеграция Redis в Spring Boot",
            desc: "REST API сервис для демонстрации различных способов интеграции Redis в Spring Boot приложение",
            techs: ["Java", "Spring Boot", "Spring Data Redis", "Spring Cache", "Redis", "RedisTemplate", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-7",
            readme: true,
            website: "",
            icon: "fas fa-bolt"
        },
        {
            title: "Practice 8 • REST API для заметок с MongoDB",
            desc: "REST API сервис для управления заметками с использованием MongoDB как основного хранилища данных",
            techs: ["Java", "Spring Boot", "Spring Web", "Spring Data MongoDB", "MongoDB", "Spring Cache", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-8",
            readme: true,
            website: "",
            icon: "fas fa-leaf"
        },
        {
            title: "Practice 9 • Аутентификация и авторизация в Spring Boot",
            desc: "REST API сервис с реализацией механизма аутентификации и авторизации пользователей на основе Spring Security с поддержкой регистрации, логина и разграничением доступа по ролям",
            techs: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "BCrypt", "Lombok", "Maven"],
            repo: "MIREA-FFJ-Practice-9",
            readme: true,
            website: "",
            icon: "fas fa-lock"
        },
        {
            title: "Practice 10 • JWT Токены и Refresh Token Механизм",
            desc: "REST API сервис с реализацией сложного механизма аутентификации с использованием JWT и Refresh Token, две версии API (v1 с ACCESS token, v2 с двухфакторным механизмом и Redis)",
            techs: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "Redis", "JJWT", "Maven"],
            repo: "MIREA-FFJ-Practice-10",
            readme: true,
            website: "",
            icon: "fas fa-key"
        },
        {
            title: "Practice 11 • JWT Токены и Refresh Token Механизм",
            desc: "REST API сервис для управления заметками с двухуровневой JWT аутентификацией. Реализует ACCESS и REFRESH токены с разными TTL, хранение refresh token в Redis с автоматическим удалением, функции регистрации, входа, logout и полный CRUD для заметок (CREATE, READ, UPDATE PUT/PATCH, DELETE) с защитой Bearer token.",
            techs: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Spring Data Redis", "PostgreSQL", "Redis", "JJWT", "BCrypt", "Maven"],
            repo: "MIREA-FFJ-Practice-11",
            readme: true,
            website: "",
            icon: "fas fa-key"
        },
        {
            title: "Practice 12 • REST API с OpenAPI/Swagger документацией",
            desc: "Развитие Practice-11 с интеграцией SpringDoc OpenAPI 2.8.5 для автоматической генерации интерактивной Swagger UI документации. Все контроллеры и DTO аннотированы для самодокументирования API. Доступна полная документация с примерами запросов/ответов, прямое тестирование через Try-it-out и экспорт OpenAPI schema.",
            techs: ["Java", "Spring Boot", "Spring Security", "Spring Data Redis", "PostgreSQL", "Redis", "JJWT", "SpringDoc OpenAPI", "Swagger UI", "Maven"],
            repo: "MIREA-FFJ-Practice-12",
            readme: true,
            website: "",
            icon: "fas fa-book"
        }

        
    ],
    go: [
        {
            title: "Practice 1 • Первый сервер на Go",
            desc: "Пробное развертывание самописного HTTP сервера с двумя endpoint'ами",
            techs: ["Go", "HTTP Server", "REST API"],
            repo: "MIREA-TIP-Practice-1",
            readme: true,
            website: "",
            icon: "fab fa-golang"
        },
        {
            title: "Practice 2 • Архитектура приложений",
            desc: "Изучение основ построения структуры приложений и работа с логгированием",
            techs: ["Go", "Application Structure", "Logging"],
            repo: "MIREA-TIP-Practice-2",
            readme: true,
            website: "",
            icon: "fas fa-sitemap"
        },
        {
            title: "Practice 3 • REST API для задач",
            desc: "Полнофункциональное REST API с CRUD операциями и валидацией",
            techs: ["Go", "REST API", "CRUD", "Middleware"],
            repo: "MIREA-TIP-Practice-3",
            readme: true,
            website: "",
            icon: "fas fa-tasks"
        },
        {
            title: "Practice 4 • Продвинутый REST API",
            desc: "CRUD сервис с версионированием API, пагинацией и фильтрацией",
            techs: ["Go", "Chi Router", "REST API", "Pagination"],
            repo: "MIREA-TIP-Practice-4",
            readme: true,
            website: "",
            icon: "fas fa-route"
        },
        {
            title: "Practice 5 • PostgreSQL и пул соединений",
            desc: "Приложение для управления задачами с подключением к PostgreSQL",
            techs: ["Go", "PostgreSQL", "Connection Pool", "Transactions"],
            repo: "MIREA-TIP-Practice-5",
            readme: true,
            website: "",
            icon: "fas fa-database"
        },
        {
            title: "Practice 6 • GORM и связи в БД",
            desc: "ORM для работы с PostgreSQL, реализация связей 1:N и M:N через структуры Go",
            techs: ["Go", "GORM", "PostgreSQL", "Chi", "REST API"],
            repo: "MIREA-TIP-Practice-6",
            readme: true,
            website: "",
            icon: "fas fa-database"
        },
        {
            title: "Practice 7 • Redis кэширование",
            desc: "Реализация высокопроизводительного кэша на Redis с TTL",
            techs: ["Go", "Redis", "Caching", "TTL", "Docker"],
            repo: "MIREA-TIP-Practice-7",
            readme: true,
            website: "",
            icon: "fas fa-bolt"
        },
        {
            title: "Practice 8 • MongoDB",
            desc: "REST API для заметок с использованием документной модели данных",
            techs: ["Go", "MongoDB", "NoSQL", "CRUD"],
            repo: "MIREA-TIP-Practice-8",
            readme: true,
            website: "",
            icon: "fas fa-leaf"
        },
        {
            title: "Practice 9 • Аутентификация",
            desc: "Система регистрации и входа с безопасным хранением паролей",
            techs: ["Go", "PostgreSQL", "bcrypt", "Authentication"],
            repo: "MIREA-TIP-Practice-9",
            readme: true,
            website: "",
            icon: "fas fa-user-shield"
        },
        {
            title: "Practice 10 • JWT аутентификация",
            desc: "Система безопасности с access/refresh токенами и RBAC",
            techs: ["Go", "JWT", "RBAC", "Middleware", "Security"],
            repo: "MIREA-TIP-Practice-10",
            readme: true,
            website: "",
            icon: "fas fa-key"
        },
        {
            title: "Practice 11 • REST API для заметок",
            desc: "Полнофункциональный CRUD сервис с правильными HTTP методами",
            techs: ["Go", "REST API", "CRUD", "Chi Router"],
            repo: "MIREA-TIP-Practice-11",
            readme: true,
            website: "",
            icon: "fas fa-sticky-note"
        },
        {
            title: "Practice 12 • REST API с Swagger/OpenAPI в Go",
            desc: "Полнофункциональный REST API сервис для управления заметками на Go с интегрированной интерактивной документацией Swagger UI",
            techs: ["Go", "REST API", "Chi Router", "Swagger", "OpenAPI", "swaggo/swag", "JSON", "Mutex"],
            repo: "MIREA-TIP-Practice-12",
            readme: true,
            website: "",
            icon: "fab fa-golang"
        },
        {
            title: "Practice 13 • Профилирование Go-приложения (pprof)",
            desc: "Практическое занятие по профилированию производительности Go с использованием встроенного pprof для анализа CPU, Heap, Goroutine профилей и оптимизации узких мест",
            techs: ["Go", "pprof", "CPU Profiling", "Heap Analysis", "Benchmarking", "Goroutine Profiling", "Performance Optimization", "Flame Graphs"],
            repo: "MIREA-TIP-Practice-13",
            readme: true,
            website: "",
            icon: "fas fa-fire"
        },
        {
            title: "Practice 14 • Connection Pool и оптимизации БД",
            desc: "Практическая работа по оптимизации работы с PostgreSQL: Connection Pool, Keyset-пагинация, батчинг для избежания N+1, полнотекстовый поиск с GIN индексами и нагрузочное тестирование",
            techs: ["Go", "PostgreSQL", "Connection Pool", "Keyset Cursor", "Batching", "GIN Index", "Full-Text Search", "Performance Testing"],
            repo: "MIREA-TIP-Practice-14",
            readme: true,
            website: "",
            icon: "fas fa-tachometer-alt"
        },
        {
            title: "Practice 15 • Unit-тестирование функций в Go",
            desc: "Практическое занятие по unit-тестированию в Go с использованием встроенного пакета testing, testify, табличных тестов и измерением покрытия кода",
            techs: ["Go", "testing", "testify", "Table-Driven Tests", "Stubs", "Benchmarks", "Code Coverage", "assert/require"],
            repo: "MIREA-TIP-Practice-15",
            readme: true,
            website: "",
            icon: "fas fa-flask"
        },
        {
            title: "Practice 16 • Интеграционное тестирование API с Docker",
            desc: "Практическая работа по интеграционному тестированию REST API на Go с использованием Docker, docker-compose и testcontainers для изолированного тестирования CRUD операций",
            techs: ["Go", "REST API", "Gin", "PostgreSQL", "Docker", "testcontainers", "Integration Testing", "Migrations"],
            repo: "MIREA-TIP-Practice-16",
            readme: true,
            website: "",
            icon: "fas fa-cube"
        }
    ],
    pet: [
        {
            title: "MyManager - TimeTracker",
            desc: "Система отслеживания рабочего времени с распределённой архитектурой на UDP",
            techs: ["Java", "UDP", "Multi-threading", "pcap4j", "Maven"],
            repo: "Pet-WorkTimeManager-BackEnd",
            readme: true,
            website: "",
            icon: "fas fa-clock"
        },
        {
            title: "Task Tracker - Spring MVC",
            desc: "Веб-приложение для управления задачами с аутентификацией и изоляцией данных",
            techs: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Thymeleaf"],
            repo: "Pet-TaskTracker-MVC",
            readme: true,
            website: "",
            icon: "fas fa-tasks"
        }
    ],
    frontend: [
        {
            title: "Trip Builder - Конструктор путешествий (Preview)",
            desc: "Веб-приложение для создания, планирования и обмена путешествиями.",
            techs: ["React", "React Router", "Vite", "CSS", "Context API", "Компонентная архитектура", "Docker", "Nginx"],
            repo: "MIREA-TripBuilder-FrontEnd",
            readme: true,
            website: "http://denchik2376.fvds.ru/MIREA-TripBuilder-FrontEnd/",
            icon: "fas fa-clock"
        }
    ]
};
