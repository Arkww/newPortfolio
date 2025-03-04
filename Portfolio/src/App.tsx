import Presentation from './components/Presentation';
import TrackPage from './pages/TrackPage';
import ProjetPage from './pages/ProjectPage';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const touchStartY = useRef(0);
  const isDesktop = window.innerWidth >= 768;
  const pages = [<Presentation />, <TrackPage setPage={setPage} page={page} />, <ProjetPage setPage={setPage} page={page} />];

  // Update viewport height
  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  // Lock scrolling on desktop, allow normal scroll on mobile
  useEffect(() => {
    if (isDesktop) {
      document.body.style.overflow = 'hidden'; // Prevent normal scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow mobile scrolling
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isDesktop]);

  // Desktop Scroll Handling (Page Switching)
  useEffect(() => {
    if (!isDesktop) return; // Skip if mobile

    const handleScroll = (event: WheelEvent) => {
      const target = event.target as HTMLElement;
      const scrollableParent = target.closest('.scrollable');

      // Allow scrolling inside scrollable elements
      if (scrollableParent) {
        const atTop = scrollableParent.scrollTop === 0;
        const atBottom = Math.ceil(scrollableParent.scrollTop + scrollableParent.clientHeight) >= scrollableParent.scrollHeight;
        if ((event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom)) return;
      }

      event.preventDefault(); // Prevent normal scrolling

      if (event.deltaY > 0 && page < pages.length - 1) {
        setPage((prev) => prev + 1);
      } else if (event.deltaY < 0 && page > 0) {
        setPage((prev) => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [page, isDesktop]);

  return (
    <div 
      className={`w-full ${isDesktop ? 'md:overflow-hidden' : 'overflow-auto'} flex flex-col md:block`}
      style={{ height: isDesktop ? `${viewportHeight}px` : 'auto' }}
    >
      <div
        className="transition-transform duration-500 ease-in-out"
        style={isDesktop ? { transform: `translateY(-${page * viewportHeight}px)` } : {}}
      >
        {pages.map((content, index) => (
          <div key={index} className="flex items-center justify-center md:h-full h-auto">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
