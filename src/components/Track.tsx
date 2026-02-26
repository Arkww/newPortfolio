import React, { useState, useEffect } from 'react';
import ImageLightbox from './ImageLightbox';

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
    const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; description: string } | null>(null);
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
            <div className="flex flex-col w-full px-2 sm:px-4">
                <div
                    className="w-full p-5 sm:p-8 rounded-2xl"
                    style={{
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--text-main)',
                        boxShadow: 'var(--shadow)',
                        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 tracking-tight">Academic & Professional Track</h2>

                    <div
                        className="overflow-y-auto overflow-x-hidden scrollable"
                        onWheel={(e) => e.stopPropagation()}
                    >
                        {/* Timeline */}
                        <div className="relative pl-8">
                            {/* Vertical line */}
                            <div
                                className="absolute left-3.5 top-2 bottom-2 w-0.5"
                                style={{ backgroundColor: 'var(--text-sub)', opacity: 0.2 }}
                            />

                            {[
                                { id: 'senat', logo: '/assets/Logos/senatLogo.jpg', title: 'Senate of France', role: 'Apprenticeship · AI Engineer', period: 'Sep 2025 – Jul 2026', location: 'Paris, France' },
                                { id: 'university-tokyo', logo: '/assets/Logos/UniversityOfTokyo.png', title: 'University of Tokyo', role: 'Research Internship', period: 'Apr 2025 – Jul 2025', location: 'Tokyo, Japan' },
                                { id: 'assopena-president', logo: '/assets/Logos/LogoBDE.png', title: 'Student Association', role: 'President', period: '2024 – 2025', location: 'Bordeaux, France' },
                                { id: 'iut-bordeaux', logo: '/assets/Logos/IUT.png', title: 'University of Bordeaux', role: 'B.Sc. Computer Science, International Track', period: '2023 – 2026', location: 'Bordeaux, France' },
                            ].map((entry) => (
                                <div key={entry.id} className="relative mb-7 last:mb-0">
                                    {/* Timeline dot */}
                                    <div
                                        className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10"
                                        style={{ backgroundColor: '#4562D9', borderColor: 'var(--bg-card)' }}
                                    />

                                    {/* Card */}
                                    <div
                                        className="flex items-center gap-6 p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-lg group"
                                        style={{
                                            backgroundColor: 'var(--object)',
                                            border: '1px solid transparent',
                                        }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#4562D9'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'; }}
                                        onClick={() => handleExperienceClick(entry.id)}
                                    >
                                        {/* Logo */}
                                        <div
                                            className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden flex items-center justify-center"
                                            style={{ backgroundColor: 'var(--bg-card)' }}
                                        >
                                            <img src={entry.logo} alt={entry.title} className="w-24 h-24 object-contain" />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-lg sm:text-xl truncate" style={{ color: 'var(--text-main)' }}>
                                                {entry.title}
                                            </p>
                                            <p className="text-base sm:text-lg truncate" style={{ color: '#4562D9' }}>
                                                {entry.role}
                                            </p>
                                            <p className="text-sm sm:text-base mt-1" style={{ color: 'var(--text-sub)' }}>
                                                {entry.period} · {entry.location}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <svg
                                            className="flex-shrink-0 w-6 h-6 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                                            style={{ color: '#4562D9' }}
                                            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 object-cover rounded-lg mb-2 cursor-zoom-in hover:opacity-90 transition-opacity"
                                                    style={{
                                                        border: "1px solid var(--text-sub)",
                                                    }}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedPhoto(photo); }}
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

            {/* Lightbox */}
            {selectedPhoto && (
                <ImageLightbox
                    src={selectedPhoto.src}
                    description={selectedPhoto.description}
                    onClose={() => setSelectedPhoto(null)}
                />
            )}
        </div>
    );
};

export default AcademicTrack;
