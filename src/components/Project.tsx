import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import data from "../Projects.json";
import ProjectImages from "./ProjectImage";

interface Project {
    titleProjet: string;
    littleTitleProjet: string;
    resultRecap: string;
    technologies: string[];
    categorie?: string[];
    skills: string[];
    photoProjet: { src: string; desc: string }[];
    githubLink: string;
    tryMeLink?: string;
}

const ProjectMenu: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        setProjects(data);
        setFilteredProjects(data);
    }, []);

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = projects.filter(
            (project) =>
                (selectedCategory === "All" || project.categorie?.includes(selectedCategory)) &&
                (project.titleProjet.toLowerCase().includes(lowerCaseQuery) ||
                    project.technologies.some((tech) => tech.toLowerCase().includes(lowerCaseQuery)) ||
                    project.littleTitleProjet.toLowerCase().includes(lowerCaseQuery))
        );
        setFilteredProjects(filtered);
    }, [searchQuery, selectedCategory, projects]);

    const filterCategories = ["All", "Software-development", "Data-science", "NLP", "Machine-learning"];

    const filterProjects = (category: string) => {
        setSelectedCategory(category); // Store selected category
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row w-full gap-8 bg-gray-50">
                <div className="flex-1 bg-white lg:p-5 rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Work</h2>
                    <div className="flex gap-4 mb-4">
                        {filterCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => filterProjects(category)}
                                className={`p-2 rounded ${
                                    selectedCategory === category ? "bg-blue-700" : "bg-blue-500"
                                } text-white hover:bg-blue-600`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <div className="max-h-140 overflow-y-auto scrollable">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {filteredProjects.map((project, index) => (
                                <li key={index}>
                                    <ProjectCard
                                        {...project}
                                        onClick={() => {
                                            setSelectedProject(project);
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md p-4"
                    onClick={() => {
                        setSelectedProject(null);
                    }}
                >
                    <EffectOnMount
                        effect={() => {
                            document.body.style.overflow = "hidden";
                            return () => {
                                document.body.style.overflow = "";
                            };
                        }}
                    />

                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-2xl font-bold mb-3">{selectedProject.titleProjet}</h2>
                        <p className="text-gray-700">{selectedProject.resultRecap}</p>

                        <div className="overflow-y-auto flex-1 max-h-[60vh] p-2">
                            <h3 className="mt-3 font-bold text-lg">Skills Gained:</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                {selectedProject.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                            <h3 className="mt-3 font-bold text-lg">Technologies Used:</h3>
                            <div className="flex flex-wrap mt-2">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm mr-2 mb-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {selectedProject.photoProjet.length > 0 && (
                                <div className="mt-3">
                                    <ProjectImages selectedProject={selectedProject} />
                                </div>
                            )}
                            <div className="flex justify-between mt-3">
                                {selectedProject.githubLink && (
                                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                        GitHub
                                    </a>
                                )}
                                {selectedProject.tryMeLink && (
                                    <a href={selectedProject.tryMeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                        Try me!
                                    </a>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setSelectedProject(null);
                            }}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg text-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const EffectOnMount = ({ effect }: { effect: () => void | (() => void) }) => {
    useEffect(() => {
        return effect();
    }, []);
    return null;
};

export default ProjectMenu;
