import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
    return (
        <section id="about">
            <h2>Обо мне</h2>
            <div className="about-content">
                <div className="photo-placeholder">
                    <div className="photo-frame">
                        <img src={process.env.PUBLIC_URL + '/addition/me.JPG'} alt="Денис Туев" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    </div>
                </div>

                <div className="about-text">
                    <p>
                        Меня влечет бэкенд потому, что это место, где аналитическое мышление встречается с чувством прекрасного.
                        Где можно решить до безумия сложную задачу одним элегантным паттерном.
                        Это необъятный мир, в котором всегда есть чему учиться, и это меня вдохновляет.
                    </p>
                    <p>
                        Мой опыт проектировщика в энергетике не прошел даром.
                        Я мыслю системами. Для меня надежность, четкая документация и итеративный подход —
                        не просто слова, а основа создания по-настоящему стабильных и предсказуемых приложений.
                        По сути, я просто сменил один тип сложных систем на другой.
                    </p>
                    <div className="goal-box">
                        <p>
                            <strong>Моя цель</strong> — присоединиться к команде Java-разработчиков,
                            где я смогу применять свои знания, расти и вносить вклад в реальные проекты.
                            Готов изучать новые технологии в процессе!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;