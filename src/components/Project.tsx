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
    "Software-development",
    "Data-science",
    "NLP",
    "Machine-learning",
  ];

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}>
      <div className="flex flex-col md:flex-row w-full gap-8" style={{ backgroundColor: "var(--bg-main)" }}>
        <div
          className="flex-1 rounded-lg p-3 sm:p-4 md:p-5"
          style={{
            backgroundColor: "var(--bg-card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Work</h2>
          
          {/* Category Filter Buttons */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 flex-wrap">
            {filterCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterProjects(category)}
                className="px-2 py-1 sm:px-3 sm:py-2 md:p-2 rounded text-white transition-colors text-xs sm:text-sm md:text-base"
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
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 sm:p-3 md:p-2 border rounded mb-3 sm:mb-4 text-sm sm:text-base"
            style={{
              backgroundColor: "var(--bg-main)",
              color: "var(--text-main)",
              borderColor: "var(--text-sub)",
            }}
          />
          
          {/* Projects Grid */}
          <div className="max-h-96 sm:max-h-128 md:max-h-160 overflow-y-auto scrollable">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {filteredProjects.map((project, index) => (
                <li key={index}>
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
            className="p-4 sm:p-6 rounded-lg w-full max-w-sm sm:max-w-2xl md:max-w-3xl max-h-[95vh] sm:max-h-[90vh] flex flex-col overflow-hidden transition-colors"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)",
              boxShadow: "var(--shadow)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{selectedProject.titleProjet}</h2>
            <p style={{ color: "var(--text-sub)" }} className="text-sm sm:text-base mb-3">
              {selectedProject.resultRecap}
            </p>

            <div className="overflow-y-auto flex-1 max-h-[65vh] sm:max-h-[60vh] p-1 sm:p-2">
              <h3 className="mt-2 sm:mt-3 font-bold text-base sm:text-lg">Skills Gained:</h3>
              <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4" style={{ color: "var(--text-sub)" }}>
                {selectedProject.skills.map((skill, index) => (
                  <li key={index} className="text-sm sm:text-base">{skill}</li>
                ))}
              </ul>
              
              <h3 className="mt-2 sm:mt-3 font-bold text-base sm:text-lg">Technologies Used:</h3>
              <div className="flex flex-wrap mt-2 gap-1 sm:gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm"
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
              
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-4 sm:mt-3">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center sm:text-left py-2 sm:py-0"
                    style={{ color: "var(--btn-bg)" }}
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.tryMeLink && (
                  <a
                    href={selectedProject.tryMeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center sm:text-right py-2 sm:py-0"
                    style={{ color: "var(--btn-bg)" }}
                  >
                    Try me!
                  </a>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-3 sm:mt-4 px-4 py-2 rounded-lg text-base sm:text-lg transition-colors w-full sm:w-auto self-end"
              style={{
                backgroundColor: "#ef4444",
                color: "white",
              }}
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