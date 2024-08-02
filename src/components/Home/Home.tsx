import React, { useEffect, useState, useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import homeData from "@/components/Home/HomeData";
import { motion } from "framer-motion";
import Typed from 'typed.js';
import { useTheme } from 'next-themes';

function Home() {
    const { theme } = useTheme();
    const [showScrollPrompt, setShowScrollPrompt] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: homeData.attributes,
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                onStringTyped: () => {
                    insertSVGIcons();
                }
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

    const insertSVGIcons = () => {
        const iconPlaceholders = document.querySelectorAll('.icon-placeholder');
        iconPlaceholders.forEach((placeholder, index) => {
            const iconPath = placeholder.getAttribute('data-icon');
            if (iconPath) {
                const img = document.createElement('img');
                img.src = iconPath;
                img.alt = homeData.iconAlts[index] || 'Icon'; // Use alt text from homeData
                img.className = 'inline-block align-middle ml-1 -mt-2 w-6 h-6 md:w-10 md:h-10';
                placeholder.replaceWith(img);
            }
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const missionElement = document.getElementById('mission');
            if (!missionElement) return;

            const position = missionElement.getBoundingClientRect();
            const elementCenter = position.top + (position.height / 2);

            // Check if the center of the element is within the viewport
            if (elementCenter < window.innerHeight && elementCenter >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Show the scroll prompt after a few seconds
        const timer = setTimeout(() => {
            setShowScrollPrompt(true);
        }, 3000); // Adjust the time as needed

        // Listen for scroll events
        const handleScroll = () => {
            setShowScrollPrompt(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener and timeout when the component unmounts
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const missionClass = theme === 'vector' || theme === 'dots' ? 'bg-dark text-light' : 'bg-dark text-light';
    const typedTextBackgroundClass = theme === 'light' ? 'bg-dark text-light' : theme === 'vector' || theme === 'dots' ? 'bg-dark text-light' : 'bg-light text-dark';
    const heroTextBackgroundClass = theme === 'vector' ? 'bg-dark text-light' : theme === 'dots' ? 'bg-none text-dark' : 'bg-none text-dark';
    const heroTextBackgroundClassNew = theme === 'forest' ? 'text-dark' : '';

    return (
        <div className="flex flex-col">
            <div className="flex-grow flex flex-col items-center justify-center mx-4">
                <div className="text-center backdrop-blur-md mt-52 mx-auto">
                    <h1 className={`${heroTextBackgroundClassNew} rounded p-4 text-6xl lg:text-8xl font-extrabold tracking-wider leading-loose`}
                        style={{lineHeight: '1.4'}}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        &nbsp;Hi, <br/> I'm {homeData.name}
                    </h1>
                </div>
                <div
                    className={`${heroTextBackgroundClassNew} backdrop-blur-lg text-2xl lg:text-4xl mt-28 md:px-4 p-2 md:py-6 rounded mx-auto`}>
                    <span ref={typedRef} className="p-2"></span>
                </div>

                {showScrollPrompt && (
                    <div className="fixed inset-x-0 bottom-10 flex justify-start pl-12 items-center z-70">
                        <div className="animate-bounce flex flex-col items-center">
                            <span className="text-xl mb-2">Scroll Down</span>
                            <FaArrowDown className="w-8 h-8  md:w-10 md:h-10"/>
                        </div>
                    </div>
                )}
            </div>

            <div className="custom-shape-divider-bottom-1719604383">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <div className="py-2 mt-96 mb-36 grid grid-flow-row auto-rows-auto items-center justify-items-center px-4">
                <motion.div
                    id="mission"
                    className={`${missionClass} p-8 md:text-lg xl:text-2xl text-center max-w-4xl mb-24 border-2 rounded`}
                    initial={{opacity: 0, y: -35}}
                    animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: -50}}
                    transition={{duration: 1}}
                >
                    <div>
                        <div className="pb-8">
                            {homeData.missionStatementTop}
                        </div>
                        <div>
                            {homeData.missionStatementBottom}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
