import React, { useState, useMemo } from 'react';
import projectsData from '../data/projectsData';
import ProjectSearch from './ProjectSearch';
import '../styles/ProjectsPage.css';

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    // Flatten projects with category
    const allProjects = useMemo(() => {
        let projects = [];
        Object.entries(projectsData).forEach(([category, items]) => {
            projects.push(...items.map(p => ({ ...p, category })));
        });
        return projects;
    }, []);

    // Filter and search
    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
            const searchLower = searchQuery.toLowerCase();
            const matchesSearch = !searchQuery ||
                project.title.toLowerCase().includes(searchLower) ||
                project.desc.toLowerCase().includes(searchLower) ||
                project.techs.some(t => t.toLowerCase().includes(searchLower));

            return matchesFilter && matchesSearch;
        });
    }, [searchQuery, activeFilter, allProjects]);

    // Group by category
    const groupedProjects = useMemo(() => {
        const grouped = {};
        filteredProjects.forEach(project => {
            if (!grouped[project.category]) grouped[project.category] = [];
            grouped[project.category].push(project);
        });
        return grouped;
    }, [filteredProjects]);

    const getCategoryName = (category) => {
        const names = {
            java: 'Java Projects',
            go: 'Go Projects',
            pet: 'Pet Projects',
            frontend: 'Frontend Projects'
        };
        return names[category] || category;
    };

    const getCategoryIcon = (category) => {
        const icons = {
            java: 'fab fa-java',
            go: 'fab fa-golang',
            pet: 'fas fa-star',
            frontend: 'fas fa-code'
        };
        return icons[category] || 'fas fa-folder';
    };

    const handleOpenProject = (project) => {
        const url = `https://github.com/Sun1tAr/${project.repo}`;
        window.open(url, '_blank');
    };

    const handleOpenWebsite = (website) => {
        window.open(website, '_blank');
    };

    return (
        <div className="projects-page">
            <h2>Лаборатория идей</h2>
            <p className="section-subtitle">Здесь я оттачиваю мастерство через практику и пет-проекты</p>
            <ProjectSearch
                onSearch={setSearchQuery}
                onFilter={setActiveFilter}
                projectsData={projectsData}
            />

            <div className="projects-container">
                {Object.keys(groupedProjects).length === 0 ? (
                    <div className="empty-state">
                        <i className="fas fa-search"></i>
                        <p>Проекты не найдены</p>
                    </div>
                ) : (
                    Object.entries(groupedProjects).map(([category, projects]) => (
                        <div key={category} className="projects-section">
                            <div className="section-header">
                                <div className="section-title-wrapper">
                                    <i className={`section-icon ${getCategoryIcon(category)}`}></i>
                                    <h2>{getCategoryName(category)}</h2>
                                </div>
                                <span className="section-badge">{projects.length}</span>
                            </div>

                            <div className="projects-grid">
                                {projects.map((project, idx) => (
                                    <div key={idx} className="project-card">
                                        <div className="project-header">
                                            <div className="project-icon">
                                                <i className={project.icon}></i>
                                            </div>
                                        </div>

                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-desc">{project.desc}</p>

                                        <div className="tech-tags">
                                            {project.techs.map((tech, i) => (
                                                <span key={i} className="project-tech">{tech}</span>
                                            ))}
                                        </div>

                                        <div className="project-actions">
                                            <button
                                                className="action-btn btn-readme"
                                                onClick={() => handleOpenProject(project)}
                                                title={project.readme ? 'Открыть README' : 'Открыть репозиторий'}
                                            >
                                                <i className={`fas fa-${project.readme ? 'file-alt' : 'code-branch'}`}></i>
                                                {project.readme ? 'README' : 'Repo'}
                                            </button>

                                            {project.website && (
                                                <button
                                                    className="action-btn btn-website"
                                                    onClick={() => handleOpenWebsite(project.website)}
                                                    title="Открыть веб-сайт"
                                                >
                                                    <i className="fas fa-globe"></i>
                                                    Website
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
