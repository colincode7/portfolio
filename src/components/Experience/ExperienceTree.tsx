import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import experiences from './ExperienceData';
import { useTheme } from 'next-themes';

const ExperienceTree = () => {
    const [nodeVisibility, setNodeVisibility] = useState(Array(experiences.length).fill(false));
    const containerRef = useRef<HTMLDivElement>(null); // Explicitly defining the type of the ref
    const [verticalSpacing, setVerticalSpacing] = useState(200); // default value
    const lastScrollY = useRef(0); // store the last scrollY position
    const { theme } = useTheme(); // Get the current theme

    // Function to calculate and update node visibility
    const updateVisibility = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const containerBounds = container.getBoundingClientRect();
        const containerTop = containerBounds.top + window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const relativeScrollY = scrollY - containerTop + windowHeight / 2;

        const visibilityOffset = 200; // Adjust this value to control when the animation starts

        // Only update state if relativeScrollY has changed significantly (for example, more than 10 pixels)
        if (Math.abs(relativeScrollY - lastScrollY.current) > 10) {
            lastScrollY.current = relativeScrollY; // update the last scrollY position
            const newVisibility = nodeVisibility.map((isVisible, index) => {
                const nodeTop = index * verticalSpacing;
                return isVisible || relativeScrollY + visibilityOffset >= nodeTop;
            });
            setNodeVisibility(newVisibility);
        }
    }, [nodeVisibility, verticalSpacing]);

    useEffect(() => {
        updateVisibility(); // Initial visibility calculation
        window.addEventListener('scroll', updateVisibility);
        return () => window.removeEventListener('scroll', updateVisibility);
    }, [updateVisibility]);

    const nodeAnimation = {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    useEffect(() => {
        const updateVerticalSpacing = () => {
            if (window.innerWidth < 640) {
                setVerticalSpacing(300); // Increase vertical spacing for smaller screens
            } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                setVerticalSpacing(400); // Increase vertical spacing for medium-small screens
            } else {
                setVerticalSpacing(300); // Maintain the current spacing for larger screens
            }
        };

        updateVerticalSpacing(); // Update vertical spacing on mount
        window.addEventListener('resize', updateVerticalSpacing);
        return () => window.removeEventListener('resize', updateVerticalSpacing);
    }, []);

    const iconAnimation = {
        hover: { y: -5, scale: 1.1 },
    };

    const borderClass = theme === 'vector' ? 'border-light' : 'border-dark';
    const bgClass = theme === 'vector' ? 'bg-light' : 'bg-dark';

    return (
        <div ref={containerRef} className="container mx-auto h-auto pt-6 px-4 md:px-8 mb-36 lg:pb-64">
            {/* Desktop Version */}
            <div className="hidden lg:block relative pt-36 md:pt-52 md:mb-60 lg:mb-20" style={{ height: `${experiences.length * verticalSpacing}px` }}>
                <div className={`absolute left-1/2 h-4/5 border-r-4 ${borderClass} rounded transform -translate-x-1/2`}></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center sm:mb-20 lg:mb-72"
                        variants={nodeAnimation}
                        initial="initial"
                        animate={nodeVisibility[index] ? 'visible' : 'exit'}
                        style={{ top: `${index * verticalSpacing}px` }}
                        transition={{ duration: 1 }}
                    >
                        <div className={`w-6 h-6 ${borderClass} ${bgClass} rounded-full`}></div>

                        <div className={`absolute w-1/2 p-8 text-box-style shadow-lg bg-gray-900 rounded ${index % 2 === 0 ? 'right-1/2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-14' : 'left-1/2 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-14'}`}>
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-xl text-light pb-1">{exp.title}</h3>
                                <span className="text-sm text-gray-400 pl-2">{exp.date}</span>
                            </div>
                            <div className="flex justify-between items-center pb-1">
                                <p className="text-custom-orange text-sm font-semibold space-x-1 pb-2">{exp.company}</p>
                                <p className="text-custom-orange text-sm font-semibold space-x-1 pb-2">{exp.location}</p>
                            </div>
                            <ul className="list-disc text-gray-300 rounded pl-6">
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-light mb-4 p-0.5">{detail}</li>
                                ))}
                            </ul>
                            <div className="flex justify-end mt-4">
                                {exp.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        className="relative ml-6 group"
                                        whileHover="hover"
                                        initial="initial"
                                    >
                                        <motion.img
                                            src={`/icons/${tech.toLowerCase()}.svg`}
                                            alt={tech}
                                            className="w-12 h-12"
                                            variants={iconAnimation}
                                        />
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-light text-sm px-2 py-1 rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
                                            {tech}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile and Tablet Version */}
            <div className="lg:hidden">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center mb-12"
                        variants={nodeAnimation}
                        initial="initial"
                        animate={nodeVisibility[index] ? 'visible' : 'exit'}
                        transition={{ delay: index * 0.4, duration: 3.5 }}
                    >
                        <div className="w-6 h-6 bg-gray-900 rounded-full mb-4"></div>
                        <div className="text-box-style p-2 shadow-lg bg-gray-900 rounded max-w-2xl">
                            <h3 className="font-bold text-md text-light whitespace-nowrap sm:whitespace-normal truncate">{exp.title}</h3>
                            <h3 className="font-bold text-sm text-gray-400 whitespace-nowrap sm:whitespace-normal truncate">{exp.date}</h3>
                            <p className="text-orange-500 text-sm pb-2">{exp.company}</p>
                            <ul className="list-disc text-light rounded pl-4">
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-light mb-4">{detail}</li>
                                ))}
                            </ul>
                            <div className="flex justify-end mt-4">
                                {exp.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        className="relative ml-4 group"
                                        whileHover="hover"
                                        initial="initial"
                                    >
                                        <motion.img
                                            src={`/icons/${tech.toLowerCase()}.svg`}
                                            alt={tech}
                                            className="w-12 h-12"
                                            variants={iconAnimation}
                                        />
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-dark text-light text-sm px-2 py-1 rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
                                            {tech}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTree;
