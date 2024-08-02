import React, { useRef, useEffect, useState } from 'react';
import Image from "next/legacy/image"; // Import Next.js Image component
import { FaDownload } from 'react-icons/fa'; // Import the download icon

function Resume() {
    const resumePDFPath = '/suzuki_resume.pdf';
    const resumeIMGPath = '/suzuki_resume.webp';
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 10) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className="flex flex-col sm:min-h-screen items-center px-4 mb-36">
            {/*<div className="absolute -left-0 top-1/2 -rotate-90 bg-custom-orange text-light text-5xl rounded-lg p-12">*/}
            {/*    <span className="transform -rotate-90">Resume</span>*/}
            {/*</div>*/}
            <div className="relative w-full flex justify-center py-6">
                <h2 className="bg-light text-dark rounded p-4 text-5xl lg:text-7xl font-bold underline mb-6">
                    Resume
                </h2>
                <button
                    className={`flex flex-row ${isSticky ? 'fixed top-20 right-10 z-50' : 'hidden'} button-fade-in duration-300 `}>
                    <a
                        href={resumePDFPath}
                        download="Dobson_Dunavant_Resume.pdf"
                        className="bg-custom-orange text-light font-bold rounded text-lg md:text-xl px-4 py-2 flex items-center space-x-2"
                        title="Download Resume as PDF"
                    >
                        <FaDownload className="inline-block mr-1"/>
                        <span className="hidden md:inline">Download PDF</span>
                    </a>
                </button>
            </div>
            <div className="w-full flex justify-center">
                <div className="relative max-w-6xl w-full">
                    <Image src={resumeIMGPath} alt="Dobson's Resume" aria-label="Dobson's Resume" layout="responsive"
                           width={700} height={900} objectFit="contain"/>
                </div>
            </div>
        </div>
    );
}

export default Resume;
