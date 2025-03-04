import React from 'react';
import PhotoMoi1 from '../../assets/MePhotos/PhotoMoi1.jpg';

const Bio: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg h-150 w-120 rounded-lg overflow-hidden">
            <img src={PhotoMoi1} alt="Your Name" className="w-full h-98 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Mathieu Jay</h2>
                <p className="text-gray-700">
                    Second year student in computer science at the IUT of Bordeaux, following the international track with classes in english.
                </p>
            </div>
        </div>
    );
};

export default Bio;