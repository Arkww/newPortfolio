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
                        My passions are Data-science and language learning therefore I enjoy working on NLP personal projects as it's where I plan on specializing myself later.
                    </p>
                    <div className='flex gap-4 mt-4'>
                        {logos.map((logo, index) => (
                            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                                <img src={logo.src} alt="logo" className="w-8 h-6 object-contain transition-transform duration-200 transform hover:scale-110 hover:shadow-lg" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
