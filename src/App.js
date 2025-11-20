import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactsSection from './components/ContactsSection';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ResumeSection />
            <ContactsSection />
        </div>
    );
}

export default App;