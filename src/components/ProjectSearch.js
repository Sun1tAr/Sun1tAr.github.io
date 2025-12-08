// ProjectSearch.js
import React, { useMemo, useState } from 'react';

export default function ProjectSearch({
                                          onSearch,
                                          onFilter,
                                          projectsData,
                                          searchInputRef,
                                          searchValue,  // НОВОЕ: пропс для значения поиска
                                          onSearchChange  // НОВОЕ: пропс для обновления
                                      }) {
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

    const handleSearchChange = (e) => {
        const value = e.target.value;
        onSearchChange(value);  // ИЗМЕНЕНО: передаём в родителя
    };

    const handleClearSearch = () => {
        onSearchChange('');  // ИЗМЕНЕНО
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <div className="search-input-wrapper">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="search-input"
                        placeholder="Поиск по названию, описанию или технологиям..."
                        value={searchValue}  // ИЗМЕНЕНО: берём из пропса
                        onChange={handleSearchChange}
                    />
                    {searchValue && (  // ИСПРАВЛЕНО: теперь будет видна при любом тексте
                        <button
                            className="search-clear-btn"
                            onClick={handleClearSearch}
                            title="Очистить поиск"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    )}
                </div>
            </div>
            <div className="filter-buttons">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                        onClick={() => handleFilterClick(category.id)}
                    >
                        {category.label}
                        <span className="filter-count">{counts[category.id]}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
