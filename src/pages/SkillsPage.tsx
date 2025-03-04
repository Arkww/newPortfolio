import Bio from '../components/Bios/3Bio'
import AcademicTrack from '../components/Track'
import React from 'react';
import NavBar from '../components/NavBar';


interface SkillPageProps {
    setPage: (page: number) => void,
    page: number
}

const TrackPage: React.FC<SkillPageProps> = ({ setPage, page }) => {
    return (
        <>
       <div className="min-h-screen flex items-center justify-center p-6">
            <div className="flex flex-col gap-20 md:flex-row">
                <Bio />
                <div>
                    <NavBar setPage={setPage} page={page}/>
                    <AcademicTrack />
                </div>
            </div>
        </div>
        </>
    );
};

export default TrackPage;