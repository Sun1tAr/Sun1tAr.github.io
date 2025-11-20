import React, { useState } from 'react';
import '../styles/AboutSection.css';

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="photo-placeholder"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-3d ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-side flip-front">
          <img
            src={process.env.PUBLIC_URL + '/addition/me.JPG'}
            alt="Ваша фотография"
            className="flip-front-img"
          />
          <div className="flip-front-label">
            Наведите для деталей
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-side flip-back">
          <div className="flip-back-content">
            <div className="flip-back-title">За кадром 🎬</div>
            <p className="flip-back-text">Помимо программирования я занимаюсь:</p>
            <div className="flip-back-items">
              <div className="flip-back-item">
                <strong>🎸 Музыка</strong> - игра на гитаре и продакшн
              </div>
              <div className="flip-back-item">
                <strong>🏔️ Путешествия</strong> - исследование новых мест и культур
              </div>
              <div className="flip-back-item">
                <strong>🎨 Дизайн</strong> - графический и UI/UX дизайн
              </div>
              <div className="flip-back-item">
                <strong>⚙️ Инженерия</strong> - увлечение механикой и IoT проектами
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;