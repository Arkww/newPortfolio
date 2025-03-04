import React from 'react';
import PhotoMoi1 from '../../../Public/assets/MePhotos/PhotoMoi1.jpg';
import Linkedin from '../../../Public/assets/Logos/linkedin.png';
import Mail from '../../../Public/assets/Logos/mail.png';
import Github from '../../../Public/assets/Logos/github.png';
import Instagram from '../../../Public/assets/Logos/instagram.jpg';

const logos = [
    { src: Linkedin, link: 'https://www.linkedin.com/in/mathieu-jay/' },
    { src: Mail, link: 'mailto:mathieu.jay2@gmail.com' },
    { src: Github, link: 'https://github.com/Arkww' },
    { src: Instagram, link: 'https://www.instagram.com/mathieuaway/' }
];

const Bio: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg h-150 w-120 rounded-lg overflow-hidden">
            <img src={PhotoMoi1} alt="Your Name" className="w-full h-98 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Mathieu Jay</h2>
                <p className="text-gray-700">
                    Second year student in computer science at the IUT of Bordeaux, following the international track with classes in english.
                </p>
                <div className='flex gap-4 mt-4'>
                    {logos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                            <img src={logo.src} alt="logo" className="w-8 h-6" />
                        </a>
                    ))}
                </div>
            </div>
    
        </div>
        );
    };


export default Bio;