import React from 'react';
import PhotoMoi2 from '../../../public/assets/MePhotos/PhotoMoi2.jpg';
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
        <div className="max-w-sm mx-auto bg-white shadow-lg h-155 w-120 rounded-lg overflow-hidden ">
            <img src={PhotoMoi2} alt="Your Name" className="w-full h-98 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Mathieu Jay</h2>
                <div className='flex flex-col justify-between h-full'>
                    <p className="text-gray-700 mb-4">
                        My passions are Data-science and language learning therefore I enjoy working on NLP or data related projects.
                    </p>
                    <div className='flex gap-4 mt-4 text-center items-center'>
                        {logos.map((logo, index) => (
                            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                                <img src={logo.src} alt="logo" className="w-8 h-6 object-contain transition-transform duration-200 transform hover:scale-110 hover:shadow-lg" />
                            </a>
                        ))}
                         <a href="/newPortfolio/assets/CVEN.pdf" download className="flex flex-center">
                        
                        <button
                            className="flex items-center justify-center cursor-pointer bg-gradient-to-tr from-grey to-white border-2 border-black rounded-full transition duration-300 ease-in-out px-5 py-2.5 font-bold text-black hover:from-white hover:to-black hover:text-white"
                            style={{ filter: 'grayscale(100%)' }}
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
