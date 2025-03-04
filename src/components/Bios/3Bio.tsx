import React from 'react';
import PhotoMoi3 from '../../assets/MePhotos/PhotoMoi3.jpg';

const Bio: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg h-150 w-120 rounded-lg overflow-hidden">
            <img src={PhotoMoi3} alt="Your Name" className="w-full h-98 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                <p className="text-gray-700">
                    Hello! I'm Your Name, a passionate software developer with expertise in TypeScript and React. I love creating beautiful and functional web applications.
                </p>
            </div>
        </div>
    );
};

export default Bio;