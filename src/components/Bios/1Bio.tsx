import React from 'react';
import PhotoMoi1 from '../../../public/assets/MePhotos/PhotoMoi4.jpg';
import Linkedin from '../../../public/assets/Logos/linkedin.png';
import Mail from '../../../public/assets/Logos/mail.png';
import Github from '../../../public/assets/Logos/github.png';
import Instagram from '../../../public/assets/Logos/instagram.jpg';

const logos = [
    { src: Linkedin, link: 'https://www.linkedin.com/in/mathieu-jay/' },
    { src: Mail, link: 'mailto:mathieu.jay2@gmail.com' },
    { src: Github, link: 'https://github.com/Arkww' },
    { src: Instagram, link: 'https://www.instagram.com/mathieuaway/' }
];

const Bio: React.FC = () => {
    return (
        <div
            className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:h-155 lg:w-120 rounded-lg overflow-hidden"
            style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-main)',
                boxShadow: 'var(--shadow)',
                transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
            }}
        >
            <img
                src={PhotoMoi1}
                alt="Mathieu Jay"
                className="w-full h-48 sm:h-64 md:h-72 lg:h-98 object-cover"
            />
            <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Mathieu Jay</h2>
                <div className="flex flex-col justify-between lg:h-full">
                    <p
                        className="mb-4 text-sm sm:text-base"
                        style={{ color: 'var(--text-sub)' }}
                    >
                        Second year student in computer science at the IUT of Bordeaux,
                        following the international track with classes in French and English.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 lg:mt-auto">
                        <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start items-center">
                            {logos.map((logo, index) => (
                                <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={logo.src}
                                        alt="logo"
                                        className="w-8 h-8 sm:w-10 sm:h-8 md:w-15 md:h-8 object-contain transition-transform duration-200 transform hover:scale-110 hover:shadow-lg"
                                    />
                                </a>
                            ))}
                        </div>
                        <a href="/assets/CVEN.pdf" download className="flex items-center justify-center sm:justify-start">
                            <button
                                className="flex items-center justify-center cursor-pointer rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-bold transition duration-300 ease-in-out text-sm sm:text-base w-full sm:w-auto"
                                style={{
                                    backgroundColor: 'var(--btn-bg)',
                                    color: 'white',
                                    border: '2px solid var(--btn-bg-hover)',
                                }}
                                onMouseOver={(e) => {
                                    const btn = e.currentTarget;
                                    btn.style.backgroundColor = 'var(--btn-bg-hover)';
                                }}
                                onMouseOut={(e) => {
                                    const btn = e.currentTarget;
                                    btn.style.backgroundColor = 'var(--btn-bg)';
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16px"
                                    width="16px"
                                    className="mr-1"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        fill="currentColor"
                                        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 
                                        9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14 
                                        c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 
                                        0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7 
                                        l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
                                    />
                                </svg>
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;