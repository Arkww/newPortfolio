import Bio from '../components/Bios/2Bio'
import ProjectMenu from '../components/Project'
import React from 'react';


const TrackPage: React.FC = ({  }) => {
    return (
        <>
      <div className="min-h-screen flex items-center justify-center p-6">
    <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-center">
        <Bio />
        <div className="flex flex-col gap-6">
            
            <ProjectMenu />
        </div>
    </div>
</div>
        
        </>
    );
};

export default TrackPage;
