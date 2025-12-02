import React, { useState, useEffect } from 'react';

// Define the structure for academic experience data
interface AcademicExperience {
    id: string;
    title: string;
    description: string;
    period: string;
    location: string;
    fullDescription: string;
    link: string | undefined;
    reference: string | undefined;
    skillsGained: string[];
    photos: {
        src: string;
        description: string;
    }[];
}

// Component to handle body scroll lock
const EffectOnMount: React.FC<{ effect: () => (() => void) | void }> = ({ effect }) => {
    useEffect(() => {
        const cleanup = effect();
        return cleanup;
    }, [effect]);
    return null;
};

const AcademicTrack: React.FC = () => {
    const [selectedExperience, setSelectedExperience] = useState<AcademicExperience | null>(null);
    const [experiencesData, setExperiencesData] = useState<AcademicExperience[]>([]);

    useEffect(() => {
        import('../Experiences.json')
            .then(data => {
                setExperiencesData(data.academicExperiences);
            })
            .catch(error => {
                console.error('Error loading experiences data:', error);
            });
    }, []);

    const handleExperienceClick = (experienceId: string) => {
        const experience = experiencesData.find(exp => exp.id === experienceId);
        if (experience) {
            setSelectedExperience(experience);
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div
                className="flex flex-col w-full max-w-7xl lg:max-w-none lg:w-300 mx-auto px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundColor: 'var(--bg-main)',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <div
                    className="w-full p-4 sm:p-6 lg:p-10 rounded-lg"
                    style={{
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--text-main)',
                        boxShadow: 'var(--shadow)',
                        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Academic and professional Track</h2>
                    <div
                        className="max-h-96 sm:max-h-150 overflow-y-auto scrollable"
                        onWheel={(e) => e.stopPropagation()}
                    >
                        <ul className="space-y-4 sm:space-y-6 p-2 sm:p-6">
                            {/* Senate */}
                            <li
                                className="flex flex-col sm:flex-row rounded-md border cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg origin-center"
                                style={{
                                    borderColor: 'var(--text-sub)',
                                    backgroundColor: 'var(--object)',
                                }}
                                onClick={() => handleExperienceClick('senat')}
                            >
                                <div className="flex justify-center sm:justify-start">
                                    <img className="w-20 sm:w-24 md:w-30 m-3 sm:m-5" src="/assets/TrackPhotos/senat.jpg" alt="Senate" />
                                </div>
                                <div className="p-4 sm:p-6 flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">The Senate of France</h3>
                                    <p style={{ color: 'var(--text-main)' }} className="text-base sm:text-lg">
                                        Apprenticeship : AI engineer
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        September 2025 - July 2026
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        Paris - Japan
                                    </p>
                                </div>
                            </li>
                            {/* University of Tokyo */}
                            <li
                                className="flex flex-col sm:flex-row rounded-md border cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg origin-center"
                                style={{
                                    borderColor: 'var(--text-sub)',
                                    backgroundColor: 'var(--object)',
                                }}
                                onClick={() => handleExperienceClick('university-tokyo')}
                            >
                                <div className="flex justify-center sm:justify-start">
                                    <img className="w-20 sm:w-24 md:w-30 m-3 sm:m-5" src="/assets/TrackPhotos/UniversityOfTokyo.png" alt="University of Tokyo" />
                                </div>
                                <div className="p-4 sm:p-6 flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">The University of Tokyo</h3>
                                    <p style={{ color: 'var(--text-main)' }} className="text-base sm:text-lg">
                                        Internship : Data visualization, AI game and machine learning
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        April 2025 - July 2025
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        Tokyo - Japan
                                    </p>
                                </div>
                            </li>

                            {/* BDE / Association */}
                            <li
                                className="flex flex-col sm:flex-row rounded-md border cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg origin-center"
                                style={{
                                    borderColor: 'var(--text-sub)',
                                    backgroundColor: 'var(--object)',
                                }}
                                onClick={() => handleExperienceClick('assopena-president')}
                            >
                                <div className="flex justify-center sm:justify-start">
                                    <img className="w-20 sm:w-24 md:w-30 m-3 sm:m-5" src="/assets/Logos/LogoBDE.png" alt="Assopeña" />
                                </div>
                                <div className="p-4 sm:p-6 flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Student association of the University</h3>
                                    <p style={{ color: 'var(--text-main)' }} className="text-base sm:text-lg">
                                        President
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        2024 - 2025
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        Bordeaux - France
                                    </p>
                                </div>
                            </li>

                            {/* IUT Bordeaux */}
                            <li
                                className="flex flex-col sm:flex-row rounded-md border cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg origin-center"
                                style={{
                                    borderColor: 'var(--text-sub)',
                                    backgroundColor: 'var(--object)',
                                }}
                                onClick={() => handleExperienceClick('iut-bordeaux')}
                            >
                                <div className="flex justify-center sm:justify-start">
                                    <img className="w-20 sm:w-24 md:w-30 m-3 sm:m-5" src="/assets/TrackPhotos/IUT.png" alt="IUT" />
                                </div>
                                <div className="p-4 sm:p-6 flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">University of Bordeaux</h3>
                                    <p style={{ color: 'var(--text-main)' }} className="text-base sm:text-lg">
                                        Bachelor of Computer Science, International track
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        2023 - 2026
                                    </p>
                                    <p style={{ color: 'var(--text-sub)' }} className="text-sm sm:text-base md:text-lg">
                                        Bordeaux - France
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedExperience && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md p-2 sm:p-4"
                    onClick={() => setSelectedExperience(null)}
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
                        className="p-4 sm:p-6 m-2 sm:m-6 rounded-lg w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-[120rem] max-h-[95vh] sm:max-h-[90vh] flex flex-col overflow-hidden transition-colors"
                        style={{
                            backgroundColor: "var(--bg-card)",
                            color: "var(--text-main)",
                            boxShadow: "var(--shadow)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">{selectedExperience.title}</h2>
                        <p style={{ color: "var(--text-sub)" }} className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-4">
                            {selectedExperience.period} • {selectedExperience.location}
                        </p>

                        <div className="overflow-y-auto flex-1 max-h-[60vh] sm:max-h-[70vh] p-1 sm:p-2 space-y-4 sm:space-y-6">
                            {/* First Row: Description and Skills */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
                                {/* Description Column */}
                                <div className="lg:col-span-3">
                                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Description</h3>
                                    <p style={{ color: "var(--text-main)" }} className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                        {selectedExperience.fullDescription}
                                    </p>
                                    {selectedExperience.link && (
                                        <p className="mt-2 sm:mt-3">
                                            <a
                                                href={selectedExperience.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700 underline"
                                            >
                                                Download Full Report
                                            </a>
                                        </p>
                                    )}
                                    {selectedExperience.reference && (
                                        <p className="mt-2 sm:mt-3">
                                            <a
                                                href={selectedExperience.reference}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700 underline"
                                            >
                                                Download Reference Letter
                                            </a>
                                        </p>
                                    )}
                                </div>

                                {/* Skills Column */}
                                <div className="lg:col-span-1">
                                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Skills Gained</h3>
                                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2" style={{ color: "var(--text-sub)" }}>
                                        {selectedExperience.skillsGained.map((skill, index) => (
                                            <li key={index} className="text-sm sm:text-base lg:text-lg">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Second Row: Photos */}
                            {selectedExperience.photos.length > 0 && (
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                        {selectedExperience.photos.map((photo, index) => (
                                            <div key={index} className="flex flex-col">
                                                <img
                                                    src={photo.src}
                                                    alt={photo.description}
                                                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 object-cover rounded-lg mb-2"
                                                    style={{
                                                        border: "1px solid var(--text-sub)",
                                                    }}
                                                />
                                                <p
                                                    style={{ color: "var(--text-sub)" }}
                                                    className="text-xs sm:text-sm text-center"
                                                >
                                                    {photo.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setSelectedExperience(null)}
                            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors self-end"
                            style={{
                                backgroundColor: "#ef4444",
                                color: "white",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#dc2626";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#ef4444";
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

export default AcademicTrack;
