import React, { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
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
  const { isDark } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDark]);

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
        (selectedCategory === "All" ||
          project.categorie?.includes(selectedCategory)) &&
        (project.titleProjet.toLowerCase().includes(lowerCaseQuery) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(lowerCaseQuery)
          ) ||
          project.littleTitleProjet.toLowerCase().includes(lowerCaseQuery))
    );
    setFilteredProjects(filtered);
  }, [searchQuery, selectedCategory, projects]);

  const filterCategories = [
    "All",
    "Machine-learning",
    "Data-science",
    "NLP",
    "Software-development",
  ];

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}>
      <div className="flex flex-col md:flex-row w-full gap-8" style={{ backgroundColor: "var(--bg-main)" }}>
        <div
          className="flex-1 rounded-2xl p-5 sm:p-7 md:p-8"
          style={{
            backgroundColor: "var(--bg-card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 tracking-tight">My Work</h2>
          
          {/* Category Filter Buttons */}
          <div className="flex gap-2 sm:gap-3 mb-4 flex-wrap">
            {filterCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterProjects(category)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white transition-colors text-xs sm:text-sm font-medium"
                style={{
                  backgroundColor:
                    selectedCategory === category
                      ? "var(--btn-bg-hover)"
                      : "var(--btn-bg)",
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = "var(--btn-bg-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = "var(--btn-bg)";
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title, technology…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-xl mb-5 text-sm sm:text-base"
            style={{
              backgroundColor: "var(--bg-main)",
              color: "var(--text-main)",
              borderColor: "var(--text-sub)",
            }}
          />
          
          {/* Projects Grid */}
          <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden scrollable">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              {filteredProjects.map((project, index) => (
                <li key={index} className="flex">
                  <ProjectCard
                    {...project}
                    className="project-card"
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

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md p-2 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <EffectOnMount
            effect={() => {
              document.body.style.overflow = "hidden";
              return () => {
                document.body.style.overflow = "";
              };
            }}
          />
          <div
            className="p-5 sm:p-8 rounded-2xl w-full max-w-lg sm:max-w-2xl md:max-w-4xl max-h-[95vh] sm:max-h-[90vh] flex flex-col overflow-hidden transition-colors"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)",
              boxShadow: "var(--shadow)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{selectedProject.titleProjet}</h2>
            <p style={{ color: "var(--text-sub)" }} className="text-sm sm:text-base mb-4 leading-relaxed">
              {selectedProject.resultRecap}
            </p>

            <div className="overflow-y-auto flex-1 max-h-[65vh] sm:max-h-[60vh] p-1 sm:p-2">
              <h3 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg mb-2">Skills Gained</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1" style={{ color: "var(--text-sub)" }}>
                {selectedProject.skills.map((skill, index) => (
                  <li key={index} className="text-sm sm:text-base">{skill}</li>
                ))}
              </ul>
              
              <h3 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    style={{
                      backgroundColor: "var(--btn-bg)",
                      color: "white",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {selectedProject.photoProjet.length > 0 && (
                <div className="mt-3 sm:mt-4">
                  <ProjectImages selectedProject={selectedProject} />
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mt-5">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium hover:underline"
                    style={{ color: "var(--btn-bg)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                )}
                {selectedProject.tryMeLink && (
                  <a
                    href={selectedProject.tryMeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium hover:underline"
                    style={{ color: "var(--btn-bg)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Try it live
                  </a>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 sm:mt-6 px-5 py-2.5 rounded-lg text-base sm:text-lg font-semibold transition-colors w-full sm:w-auto self-end"
              style={{ backgroundColor: "#ef4444", color: "white" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#dc2626"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#ef4444"; }}
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