import  { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Presentation from './components/Presentation';
import TrackPage from './pages/TrackPage';
import ProjetPage from './pages/ProjectPage';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Refs for each section
  const trackRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null); // Reference for the presentation page
  

 const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  
  // Show nav when at the top of the page regardless of scroll direction²
  if (currentScrollPos < 100) {
    setShowNav(true);
  } else if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    setShowNav(true);
  } else {
    // Scrolling down
    setShowNav(false);
  }
  
  setPrevScrollPos(currentScrollPos);
};

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Router>
      <div className="flex flex-col">
        {/* Navigation Links */}
        <nav
  className={`fixed top-0 left-0 right-0 p-4 bg-white z-50 transition-transform duration-300 ease-in-out ${
    showNav ? 'transform translate-y-0' : 'transform -translate-y-full'
  }`}
>
  <div className="flex gap-8">
    <button 
      onClick={() => {
        console.log("Track button clicked");
        if (trackRef.current) {
          console.log("Track ref exists");
          trackRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log("Track ref is null");
        }
      }} 
      className="text-lg font-semibold bg-blue-100 px-3 py-1 rounded hover:bg-blue-200"
    >
      Academic track
    </button>
    <button 
      onClick={() => {
        console.log("Project button clicked");
        if (projectRef.current) {
          console.log("Project ref exists");
          projectRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log("Project ref is null");
        }
      }} 
      className="text-lg font-semibold bg-blue-100 px-3 py-1 rounded hover:bg-blue-200"
    >
      My work
    </button>
  </div>
</nav>



        {/* The actual sections that you scroll between */}
        <div ref={presentationRef} className="min-h-screen">
          <Presentation />
        </div>
        <div ref={trackRef} className="min-h-screen">
          <TrackPage />
        </div>
        <div ref={projectRef} className="min-h-screen">
          <ProjetPage />
        </div>
      </div>
    </Router>
  );
}

export default App;
