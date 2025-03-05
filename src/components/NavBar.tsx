import React from 'react';

interface navBarProps {
    setPage: (page: number) => void
    page: number
}

const NavBar: React.FC<navBarProps> = ({setPage, page}) => {
    return (
        <nav className="p-4 hidden md:block">
            <div className="container mx-auto flex justify-between items-center">
            <div className="space-x-4">
                <a 
                href="#home" 
                onClick={() => setPage(1)}
                className={`${page === 1 ? 'text-blue-500' : 'text-gray-300 hover:text-black'}`}
                >
                About me
                </a>
                <a 
                href="#about" 
                onClick={() => setPage(2)}
                className={`${page === 2 ? 'text-blue-500' : 'text-gray-300 hover:text-black'}`}
                >
                My work
                </a>
                {/**}
                <a 
                href="#projects" 
                onClick={() => setPage(3)}
                className={`${page === 3 ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
                >
                My skills
                </a>
               {*/}
            </div>
            </div>
        </nav>
    );
};

export default NavBar;