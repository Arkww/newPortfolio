import React from 'react';

interface ProjectCardProps {
  titleProjet: string;
  littleTitleProjet: string;
  technologies: string[];
  photoProjet: { src: string; desc: string }[];
  githubLink: string;
  onClick: () => void;
  className?: string; // optional for further customization
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  titleProjet,
  littleTitleProjet,
  technologies,
  photoProjet,
  githubLink,
  onClick,
}) => {
  return (
  <div
    className="rounded-2xl bg-[var(--object)] shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02] flex flex-col h-full w-full cursor-pointer overflow-hidden"
    onClick={onClick}
    >
      <div className="w-full h-48 flex-shrink-0 bg-[var(--bg-main)]">
        {photoProjet && photoProjet.length > 0 ? (
          <img
            src={photoProjet[0].src}
            alt={photoProjet[0].desc}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: 'var(--text-sub)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 opacity-30">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3 3h18" />
            </svg>
          </div>
        )}
      </div>
      <div className="px-4 pt-4 flex-1" style={{ color: 'var(--text-color)' }}>
        <h3 className="font-bold text-base mb-1 line-clamp-2">{titleProjet}</h3>
        <p className="text-sm line-clamp-3" style={{ color: 'var(--text-sub)' }}>{littleTitleProjet}</p>
      </div>
      <div className="px-4 pb-4 mt-3">
        <div className="flex flex-wrap gap-1 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block rounded-full px-2 py-0.5 text-xs font-semibold"
              style={{
                backgroundColor: 'var(--btn-bg)',
                color: 'white',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--btn-bg)' }}
            className="hover:underline text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
