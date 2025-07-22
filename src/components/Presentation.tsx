import React from 'react';

const Presentation = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="p-8 min-h-screen flex flex-col items-center justify-center relative transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
<div className="max-w-8xl text-left">
  <h1
    className="text-6xl font-bold mb-4 transition-colors duration-300"
    style={{ color: 'var(--nav-text)' }}
  >
    Hello, I'm <span style={{ color: '#4562D9' }}>Mathieu Jay</span>
  </h1>
  <p
    className="text-xl mb-2 transition-colors duration-300"
    style={{ color: 'var(--nav-text)' }}
  >
    Welcome to my portfolio! I am a computer science student and autodidact <span style={{ color: '#4562D9' }}>polyglot</span> with a
    passion for <span style={{ color: '#4562D9' }}>data science</span> and living languages.
  </p>
  <p
    className="text-xl transition-colors duration-300"
    style={{ color: 'var(--nav-text)' }}
  >
    I particularly like programming <span style={{ color: '#4562D9' }}>AI</span> and <span style={{ color: '#4562D9' }}>NLP</span> programs as it allows me to combine my interests in languages and technology.
  </p>
</div>



      {/* Arrow button with smooth scroll functionality */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center">
        <a onClick={handleScroll} className="cursor-pointer group">
          <svg
            className="w-6 h-6 animate-bounce group-hover:animate-none transition-colors duration-300"
            style={{
              color: 'var(--nav-text)',
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Presentation;
