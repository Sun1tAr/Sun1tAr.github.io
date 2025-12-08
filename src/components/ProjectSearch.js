import React, { useMemo, useState } from 'react';

export default function ProjectSearch({ onSearch, onFilter, projectsData }) {
    const categories = [
        { id: 'all', label: 'Все проекты' },
        { id: 'java', label: 'Java' },
        { id: 'go', label: 'Go' },
        { id: 'pet', label: 'Pet Projects' },
        { id: 'frontend', label: 'Frontend' }
    ];

    const counts = useMemo(() => {
        const totalCount = Object.values(projectsData).reduce((sum, arr) => sum + arr.length, 0);
        return {
            all: totalCount,
            java: projectsData.java?.length || 0,
            go: projectsData.go?.length || 0,
            pet: projectsData.pet?.length || 0,
            frontend: projectsData.frontend?.length || 0
        };
    }, [projectsData]);

    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId);
        onFilter(filterId);
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Поиск по названию, описанию или технологиям..."
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>

            <div className="filter-buttons">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                        onClick={() => handleFilterClick(cat.id)}
                    >
                        {cat.label}
                        <span className="filter-count">{counts[cat.id]}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
