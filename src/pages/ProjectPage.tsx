import ProjectMenu from '../components/Project'
import React from 'react';

const ProjetPage: React.FC = () => {
    return (
        <>
            <div className="min-h-screen w-full max-w-none p-4 sm:p-6">
                <div className="w-full p-10 mx-auto">
                    <div className="flex flex-col gap-6">
                        <ProjectMenu />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjetPage;