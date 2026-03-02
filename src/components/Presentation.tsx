import React, { useEffect, useState } from 'react';

const skills = ['NLP', 'AI', 'ML', 'Data Science'];

const languages = [
  { flag: '/assets/CountryPictures/france.png',  name: 'French',   level: 'Native',       greeting: 'Bonjour !',    alt: 'France' },
  { flag: '/assets/CountryPictures/UK.png',      name: 'English',  level: 'C1 · TOEFL 104', greeting: 'Hello!',      alt: 'UK' },
  { flag: '/assets/CountryPictures/china.png',   name: 'Chinese',  level: 'C1 · HSK 5',   greeting: '你好！',         alt: 'China' },
  { flag: '/assets/CountryPictures/spain.png',   name: 'Spanish',  level: 'B1',           greeting: '¡Hola!',       alt: 'Spain' },
  { flag: '/assets/CountryPictures/japan.jpg',   name: 'Japanese', level: 'A2 · JLPT N5',      greeting: 'こんにちは！',  alt: 'Japan' },
];

const LanguageWidget = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#4562D9' }}>
        Hover to say hello
      </p>
      <div className="grid grid-cols-2 gap-3">
        {languages.map((lang, i) => (
          <div
            key={lang.name}
            className={i === 4 ? 'col-span-2 flex justify-center' : ''}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ perspective: '700px', width: '7.5rem', height: '7.5rem' }}>
              <div
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.45s ease',
                  transform: hovered === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid rgba(69,98,217,0.25)',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <img src={lang.flag} alt={lang.alt} className="w-12 h-8 object-cover rounded-sm" />
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>{lang.name}</p>
                  <p className="text-xs" style={{ color: '#4562D9' }}>{lang.level}</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: '#4562D9',
                    border: '1px solid rgba(69,98,217,0.4)',
                  }}
                >
                  <p className="text-2xl">{lang.greeting}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>{lang.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Presentation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="px-6 md:px-8 pt-28 pb-16 min-h-screen flex flex-col items-center justify-start md:justify-center relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-[-8%] right-[-4%] w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: '#4562D9', opacity: 0.08 }}
      />
      <div
        className="absolute bottom-[8%] left-[-4%] w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: '#4562D9', opacity: 0.07 }}
      />

      {/* Main content — fade + slide-up on mount */}
      <div
        className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-14"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(2rem)',
          transition: 'opacity 0.65s ease, transform 0.65s ease',
        }}
      >
        {/* Text side */}
        <div className="flex-1 text-left">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#4562D9' }}
          >
            Computer Science &amp; Languages
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight"
            style={{ color: 'var(--text-main)' }}
          >
            Hello, I'm{' '}
            <span style={{ color: '#4562D9' }}>Mathieu Jay</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed"
            style={{ color: 'var(--text-sub)' }}
          >
            Computer science student and autodidact{' '}
            <span style={{ color: '#4562D9' }}>polyglot</span> with a passion
            for <span style={{ color: '#4562D9' }}>data science</span> and
            living languages. I enjoy building{' '}
            <span style={{ color: '#4562D9' }}>AI</span> and{' '}
            <span style={{ color: '#4562D9' }}>NLP</span> systems that bridge
            technology and human language.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium border"
                style={{
                  borderColor: '#4562D9',
                  color: '#4562D9',
                  backgroundColor: 'rgba(69, 98, 217, 0.08)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA button */}
          <a
            onClick={handleScroll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold cursor-pointer select-none"
            style={{
              backgroundColor: '#4562D9',
              color: '#fff',
              transition: 'opacity 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Explore my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Language widget */}
        <div className="flex-shrink-0">
          <LanguageWidget />
        </div>
      </div>

    </div>
  );
};

export default Presentation;
