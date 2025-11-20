import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
    return (

        <section id="about">
            <h2>Не просто код, а система</h2>
            <div className="about-content">
                <div className="photo-placeholder">
                    <div className="photo-frame">
                <span>

                    {/*<img src={process.env.PUBLIC_URL + 'https://img1.akspic.ru/previews/1/6/0/6/7' +*/}
                    {/*    '/176061/176061-yablochnyj_pejzazh-yabloko-illustracia-prirodnyj_landshaft-purpur-500x.jpg'}*/}
                    {/*     alt="Денис Туев" style={{width: '315px', height: '420px', objectFit: 'cover'}} />*/}
                    <img src={process.env.PUBLIC_URL + '/addition/me.JPG'}
                         alt="Денис Туев" style={{width: '315px', height: '420px', objectFit: 'cover'}} />

                </span>
                    </div>
                </div>
                <div className="about-text">
                    <p>Меня влечет бэкенд потому, что это место, где аналитическое мышление встречается с чувством
                        прекрасного. Где можно решить до безумия сложную задачу одним элегантным паттерном. Это
                        необъятный мир, в котором всегда есть чему учиться, и это меня вдохновляет.</p>
                    <br/>
                    <p>Мой опыт проектировщика в энергетике не прошел даром. Я мыслю системами. Для меня надежность,
                        четкая документация и итеративный подход — не просто слова, а основа создания по-настоящему
                        стабильных и предсказуемых приложений. По сути, я просто сменил один тип сложных систем на
                        другой.</p>
                    <div className="goal-box">
                        <p>Моя цель — присоединиться к команде Java-разработчиков, где я смогу применять свои знания,
                            расти и вносить вклад в реальные проекты. Готов изучать новые технологии в процессе!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
