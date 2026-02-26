import Bio from '../components/Bios/1Bio'
import AcademicTrack from '../components/Track'
import React from 'react'


const TrackPage: React.FC = ({  }) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-start w-full">
                <div className="flex-shrink-0 flex justify-center w-full sm:w-auto">
                    <Bio />
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <AcademicTrack />
                </div>
            </div>
        </div>
    )
}

export default TrackPage;
