import React from 'react';
import France from '../../Public/assets/CountryPictures/france.png';
import UK from '../../Public/assets/CountryPictures/UK.png';
import China from '../../Public/assets/CountryPictures/china.png';
import Japanese from '../../Public/assets/CountryPictures/japan.jpg';
import Spanish from '../../Public/assets/CountryPictures/spain.png';


const countries = [France, UK, China, Japanese, Spanish];
    
const Presentation: React.FC = () => {
    return (
        <div className="p-8 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Hello, I'm Mathieu Jay</h1>
            
            <p className="text-lg mb-2">Welcome to my portfolio! I am a computer science student and autodidact polyglot with a passion for data science and living languages.</p>
            <p className="text-lg">I particurlarly like programming NLP programs as it is the point of meeting of my two passions.</p>
            <div className='flex gap-4 mt-4'>
            {countries.map((country, index) => (
                <img key={index} src={country} alt="country" className="w-15 h-12 object-cover " />
            ))}
            </div>
            <p className="text-lg mt-10">I am currently looking for a one year apprenticeship starting in september and located in France.</p>

        </div>
    );
};

export default Presentation;