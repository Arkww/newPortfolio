import Bio from '../components/Bios/1Bio'
import AcademicTrack from '../components/Track'
import React from 'react'
import NavBar from '../components/NavBar'

interface TrackPageProps {
    setPage: (page: number) => void,
    page: number
}

const TrackPage: React.FC<TrackPageProps> = ({ setPage, page }) => {
    return (
<div className="min-h-screen flex items-center justify-center p-6">
    <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-center">
        <Bio />
        <div className="flex flex-col gap-6">
            <NavBar setPage={setPage} page={page} />
            <AcademicTrack />
        </div>
    </div>
</div>

    )
}

export default TrackPage;
