import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Presentation from './components/Presentation';
import TrackPage from './pages/TrackPage';
import ProjetPage from './pages/ProjectPage';
import LanguagesPage from './pages/LanguagesPage';
import './App.css';

// Theme Toggle Button Component
const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );  
};

// Main App Content Component
const AppContent = () => {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 100 || prevScrollPos > currentScrollPos) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Router>
      <div className="flex flex-col">
        <nav
          className={`fixed top-0 left-0 right-0 p-4 border-b z-50 transition-all duration-300 ease-in-out ${
            showNav ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}

        >
          <div className="flex md:justify-between items-center gap-10">
            <div className="flex gap-8">
              <button 
                onClick={() => trackRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg font-semibold px-3 py-1 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md"

              >
                Academic track
              </button>
              <button 
                onClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg font-semibold px-3 py-1 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md"
   
              >
                My work
              </button>
                <button 
                onClick={() => languagesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg font-semibold px-3 py-1 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md hidden sm:inline"
                >
                Languages
                </button>
            </div>
            <ThemeToggleButton />
          </div>
        </nav>

        <div ref={presentationRef} className="min-h-screen">
          <Presentation />
        </div>
        <div ref={trackRef} className="min-h-screen">
          <TrackPage />
        </div>
        <div ref={projectRef} className="min-h-screen">
          <ProjetPage />
        </div>
        <div ref={languagesRef} className="min-h-screen">
          <LanguagesPage />
        </div>
      </div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;