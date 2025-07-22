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
  <div className="rounded-2xl bg-[var(--object)] p-6 shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02]"
    onClick={onClick}
    >
      {photoProjet && photoProjet.length > 0 && (
        <img
          src={photoProjet[0].src}
          alt={photoProjet[0].desc}
          className="w-full h-30 object-cover"
        />
      )}
      <div className="px-6 py-4 flex-1" style={{ color: 'var(--text-color)' }}>
        <h3 className="font-bold text-xl mb-2">{titleProjet}</h3>
        <p className="text-base">{littleTitleProjet}</p>
      </div>
      <div className="mt-auto">
        <div className="px-6 pb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
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
          <div className="px-6 py-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--btn-bg)' }}
              className="hover:underline"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
