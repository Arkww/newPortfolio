import React from 'react';

const LanguagesPage: React.FC = () => {
    return (
        <div>
            <p
                className="text-xl mb-2 transition-colors duration-300 text-baseline pl-20 pr-20"
                style={{ color: 'var(--nav-text)' }}
            >
                Apart from programming I like spending my time <span style={{ color: '#4562D9' }}>practicing</span> and <span style={{ color: '#4562D9' }}>speaking</span> foreign languages, I learn them by myself using various ressources but mostly Youtube.   
            </p>
            <p
                className="text-xl mb-2 transition-colors duration-300 text-baseline pl-20 pr-20"
                style={{ color: 'var(--nav-text)' }}
            >
                I see language learning only as a hobby that make me able to make a lot of friends but I also noticed that spending time learning new <span style={{ color: '#4562D9' }}>grammars</span> and new <span style={{ color: '#4562D9' }}>syntaxes</span> also really improve my <span style={{ color: '#4562D9' }}>logic</span> and <span style={{ color: '#4562D9' }}>problems solving skills</span>.
            </p>
            <div
                className="flex-1 m-10 p-5 rounded-lg"
                style={{
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-main)',
                    boxShadow: 'var(--shadow)',
                    transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                <h2 className="text-4xl font-bold mb-6 text-start">Languages</h2>

                <ul className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* French */}
                    <li
                        className="flex flex-col items-center justify-center rounded-md p-6 text-center shadow-sm"
                        style={{
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--text-sub)',
                        }}
                    >
                        <img className="w-40 h-25 mb-4" src="/assets/CountryPictures/france.png" alt="France" />
                        <h3 className="text-xl font-semibold mb-1">Native Speaker</h3>
                    </li>

                    {/* English */}
                    <li
                        className="flex flex-col items-center justify-center rounded-md p-6 text-center shadow-sm"
                        style={{
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--text-sub)',
                        }}
                    >
                        <img className="w-40 h-25 mb-4" src="/assets/CountryPictures/UK.png" alt="United Kingdom" />
                        <h3 className="text-xl font-semibold">C1 - TOELF 104</h3>
                        <p style={{ color: 'var(--text-sub)' }} className="text-sm">Full professional proficiency</p>
                        <p className="mt-2 sm:mt-3">
                            <a
                                href="/assets/TOELF_SCORE.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 underline"
                            >
                                Download certificate
                            </a>
                        </p>
                    </li>

                    {/* Chinese */}
                    <li
                        className="flex flex-col items-center justify-center rounded-md p-6 text-center shadow-sm"
                        style={{
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--text-sub)',
                        }}
                    >
                        <img className="w-40 h-25 mb-4" src="/assets/CountryPictures/china.png" alt="China" />
                        <h3 className="text-xl font-semibold">B2</h3>
                        <p style={{ color: 'var(--text-sub)' }} className="text-sm">Professional working proficiency</p>
                    </li>

                    {/* Japanese */}
                    <li
                        className="flex flex-col items-center justify-center rounded-md p-6 text-center shadow-sm"
                        style={{
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--text-sub)',
                        }}
                    >
                        <img className="w-40 h-25 mb-4 border-2" src="/assets/CountryPictures/japan.jpg" alt="Japan" />
                        <h3 className="text-xl font-semibold">N5</h3>
                        <p style={{ color: 'var(--text-sub)' }} className="text-sm">Elementary working proficiency</p>
                    </li>

                    {/* Spanish */}
                    <li
                        className="flex flex-col items-center justify-center rounded-md p-6 text-center shadow-sm"
                        style={{
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--text-sub)',
                        }}
                    >
                        <img className="w-40 h-25 mb-4" src="/assets/CountryPictures/spain.png" alt="Spain" />
                        <h3 className="text-xl font-semibold">A2</h3>
                        <p style={{ color: 'var(--text-sub)' }} className="text-sm">Elementary working proficiency</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LanguagesPage;
