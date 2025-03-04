import React from 'react';
import PhotoMoi2 from '../../assets/MePhotos/PhotoMoi2.jpg';

const Bio: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg h-150 w-120 rounded-lg overflow-hidden">
            <img src={PhotoMoi2} alt="Your Name" className="w-full h-98 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Mathieu Jay</h2>
                <p className="text-gray-700">
                    My passions are Data-science and language learning therefore I enjoy working on NLP personal projects as it's where I plan on specializing myself later.
                </p>
            </div>
        </div>
    );
};

export default Bio;