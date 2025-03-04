import React from 'react';
import UniversityOfTokyo from '../../public/assets/TrackPhotos/UniversityOfTokyo.png';
import IUT from '../../public/assets/TrackPhotos/IUT.png';

const AcademicTrack: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:w-250 sm:w-100 w-full gap-8 p-10 bg-gray-50">
                    <div className="flex-1 bg-white p-10 rounded-lg shadow-2xl">
                        <h2 className="text-4xl font-bold mb-6">Academic Track</h2>
                        {/* Added onWheel event to prevent page scroll */}
                        <div 
                            className="max-h-100 overflow-y-auto scrollable" 
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <ul className="space-y-6">
                                <li className="flex border border-gray-200 rounded-md">
                                    <div>
                                        <img className="w-30 m-5" src={UniversityOfTokyo} alt="University of Tokyo" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold">University of Tokyo</h3>
                                        <p className="text-gray-700 text-lg">Internship : Embedded systems and data analysis</p>
                                        <p className="text-gray-500 text-lg">April 2025 - July 2025</p>
                                        <p className="text-gray-400 text-lg">Tokyo - Japan</p>
                                    </div>
                                </li>
                                <li className="flex border border-gray-200 rounded-md">
                                    <div>
                                        <img className="w-30 m-5" src={IUT} alt="IUT" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold">
                                            IUT of Bordeaux, computer science department
                                        </h3>
                                        <p className="text-gray-700 text-lg">
                                            Bachelor degree : Bachelor of Computer Science, International track
                                        </p>
                                        <p className="text-gray-500 text-lg">Year: 2023 - 2026</p>
                                        <p className="text-gray-400 text-lg">Bordeaux - France</p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AcademicTrack;
