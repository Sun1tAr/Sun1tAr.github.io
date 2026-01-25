import React, { useState, useEffect } from 'react';
import '../styles/ProjectBadge.css';
import { PROJECT_BADGE_IMAGE, PROJECT_BADGE_INFO } from '../constants/projectConstants';

export default function ProjectBadge() {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        console.log('ProjectBadge mounted, showTooltip:', showTooltip);
    }, [showTooltip]);

    const handleMouseEnter = () => {
        console.log('MOUSE ENTER');
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        console.log('MOUSE LEAVE');
        setShowTooltip(false);
    };

    return (
        <div className="badge-wrapper">
            <img
                src={`/data/${PROJECT_BADGE_IMAGE}`}
                alt={PROJECT_BADGE_INFO.title}
                className="project-badge"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {showTooltip && (
                <div className="badge-tooltip">
                    <div className="tooltip-title">{PROJECT_BADGE_INFO.title}</div>
                    <div className="tooltip-divider"></div>  {/* ← БЕЗ ТЕКСТА */}
                    <div className="tooltip-description">{PROJECT_BADGE_INFO.description}</div>
                </div>
            )}
        </div>
    );
}
