import Bio from '../components/Bios/1Bio'
import AcademicTrack from '../components/Track'
import React from 'react'


const TrackPage: React.FC = ({  }) => {
    return (
<div className="min-h-screen flex items-center justify-center p-6">
    <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-center">
        <Bio />
        <div className="flex flex-col gap-6">
            
            <AcademicTrack />
        </div>
    </div>
    
</div>

    )
}

export default TrackPage;
