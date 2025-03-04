import React from 'react';

interface ProjectCardProps {
    titleProjet: string;
    littleTitleProjet: string;
    resultRecap: string;
    technologies: string[];
    photoProjet: { src: string; desc: string }[];
    githubLink: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    titleProjet,
    littleTitleProjet,
    technologies,
    photoProjet,
    githubLink,
    onClick
}) => {
    return (
        <div 
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer transform hover:scale-105 transition duration-300 mt-5"
            onClick={onClick}
        >
            {photoProjet  && (
                <img src={photoProjet[0].src} alt={photoProjet[0].desc} className="w-full h-32 object-cover" />
            )}
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{titleProjet}</h3>
                <p className="text-gray-700 text-base">{littleTitleProjet}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tech}
                    </span>
                ))}
            </div>
            {githubLink && (
                <div className="px-6 py-4">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        View on GitHub
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
