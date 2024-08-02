import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaTree, FaSun, FaPalette, FaCheck } from 'react-icons/fa';
import { TbVectorTriangle, TbGridDots } from "react-icons/tb";

interface ThemeSwitchProps {
    openComponent: 'theme' | 'music' | null;
    setOpenComponent: (component: 'theme' | 'music' | null) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ openComponent, setOpenComponent }) => {
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        if (!resolvedTheme) {
            setTheme('forest');
        }
    }, [resolvedTheme, setTheme]);

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        setOpenComponent(null);
    };

    const toggleModal = () => {
        setOpenComponent(openComponent === 'theme' ? null : 'theme');
    };

    return (
        <div>
            <button
                className="rounded text-xs md:text-sm lg:text-base py-1 px-1 mx-2 md:py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle"
                onClick={toggleModal}
                tabIndex={0}
                aria-label="Select a theme"
            >
                <div className="flex items-center">
                    <FaPalette size="1.6em" className="mr-2" />
                    <span className="hidden md:inline">Theme</span>
                </div>
            </button>
            {openComponent === 'theme' && (
                <div className="absolute bg-light text-dark rounded shadow-lg p-2 gap-2 flex flex-col">
                    <button onClick={() => changeTheme('light')} className="flex items-center p-2 hover:bg-gray-100 rounded">
                        <FaSun />
                        <span className="hidden md:inline ml-2">Light</span>
                        {theme === 'light' && <FaCheck className="ml-2 text-green-500" />}
                    </button>
                    <button onClick={() => changeTheme('forest')} className="flex items-center p-2 bg-green-300 text-dark hover:bg-green-200 rounded">
                        <FaTree />
                        <span className="hidden md:inline ml-2">Forest</span>
                        {theme === 'forest' && <FaCheck className="ml-2 text-green-500" />}
                    </button>
                    <button onClick={() => changeTheme('vector')} className="flex items-center p-2 bg-purple-500 text-light hover:bg-purple-600 rounded">
                        <TbVectorTriangle />
                        <span className="hidden md:inline ml-2">Vector</span>
                        {theme === 'vector' && <FaCheck className="ml-2 text-green-500" />}
                    </button>
                    <button onClick={() => changeTheme('dots')} className="flex items-center bg-gray-200 text-custom-orange p-2 hover:bg-gray-100 rounded">
                        <TbGridDots />
                        <span className="hidden md:inline ml-2">Dots</span>
                        {theme === 'dots' && <FaCheck className="ml-2 text-green-500" />}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitch;