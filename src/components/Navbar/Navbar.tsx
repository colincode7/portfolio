import React, {useState, useEffect} from 'react';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import ChatbotFixedButton from '@/components/Chatbot/ChatbotFixedButton';
import ChatbotModal from '@/components/Chatbot/ChatbotModal';
import ChatbotNavbarButton from '@/components/Chatbot/ChatbotNavbarButton';
import SpotifyPlayer from './SpotifyPlayer/SpotifyPlayer';

interface NavbarProps {
    toggleChatModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({toggleChatModal}) => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState('');
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [openComponent, setOpenComponent] = useState<'theme' | 'music' | null>(null);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > lastScrollTop;

            setIsScrollingUp(!isScrollingDown);

            if (!isScrollingDown && currentScrollPos > 100) {
                setNavbarBackground('bg-dark text-light');
            } else if (currentScrollPos <= 100) {
                setNavbarBackground('');
            }

            lastScrollTop = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                style={{top: isScrollingUp ? '0' : '-100%'}}
                className={`z-20 fixed w-full flex items-center justify-center transition-all backdrop-blur-sm duration-1000 py-4 px-2 md:px-6 ${navbarBackground}`}
            >
                <div className="w-full max-w-7xl flex items-center justify-between px-2">
                    <div className="flex gap-4 md:gap-6 items-center justify-start">
                        <a
                            href=""
                            aria-label="Suzuki's LinkedIn Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                        >
                            <FaLinkedin size="1.6em"/>
                        </a>
                        <a
                            href="https://github.com/realparadise"
                            aria-label="Suzuki's GitHub Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                        >
                            <FaGithub size="1.6em"/>
                        </a>
                        <a
                            href="#"
                            aria-label="Send an email to Suzuki"
                            className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('mailto:epifaniodev619@gmail.com', '_blank');
                            }}
                        >
                            <FaEnvelope size="1.6em"/>
                        </a>

                        <ChatbotNavbarButton isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen}/>
                    </div>

                    <div className="md:hidden flex items-center">
                        <ThemeSwitch openComponent={openComponent} setOpenComponent={setOpenComponent}/>
                        <SpotifyPlayer openComponent={openComponent} setOpenComponent={setOpenComponent}/>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg
                                className="w-6 h-6 ml-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="absolute top-full bg-light text-dark right-0 w-full md:hidden">
                            <a href="#home" className="block hover:text-dark hover:rounded hover:bg-light p-4">Home</a>
                            <a href="#experiences"
                               className="block hover:text-dark hover:rounded hover:bg-light p-4">Experiences</a>
                            <a href="#resume"
                               className="block hover:text-dark hover:rounded hover:bg-light p-4">Resume</a>
                            <a href="#blog" className="block hover:text-dark hover:rounded hover:bg-light p-4">Blog</a>
                            <a href="#contact"
                               className="block hover:text-dark hover:rounded hover:bg-light p-4">Contact</a>
                        </div>
                    )}
                    <div className="hidden md:flex flex-1 items-center justify-end">
                        <a href="#home"
                           className="hover:text-dark hover:bg-light px-4 py-2 hover:rounded transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Home</a>
                        <a href="#experiences"
                           className="hover:text-dark hover:bg-light px-4 py-2 hover:rounded transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Experiences</a>
                        <a href="#resume"
                           className="hover:text-dark hover:bg-light px-4 py-2 hover:rounded transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Resume</a>
                        <a href="#blog"
                           className="hover:text-dark hover:bg-light px-4 py-2 hover:rounded transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Blog</a>
                        <div>
                            <ThemeSwitch openComponent={openComponent} setOpenComponent={setOpenComponent}/>
                        </div>
                        <SpotifyPlayer openComponent={openComponent} setOpenComponent={setOpenComponent}/>
                    </div>
                </div>
            </nav>
            <ChatbotFixedButton isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen}/>
            <ChatbotModal isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen}/>
        </>
    );
};

export default Navbar;