// Footer.tsx
import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import ChatbotNavbarButton from "@/components/Chatbot/ChatbotNavbarButton";

function Footer() {
    return (
        <div className="h-auto md:h-44 backdrop-blur-sm p-2 flex flex-col items-center justify-center space-y-4 relative py-6">
            {/* Zigzag Border */}

            <h2 className="text-2xl md:text-4xl font-bold pt-1">Contact Me!</h2>

            <div className="flex gap-5 md:gap-7 items-center justify-start">
                <a
                    href=""
                    aria-label="Suzuki's LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                >
                    <FaLinkedin size="2.2em"/>
                </a>
                <a
                    href="https://github.com/realparadise"
                    aria-label="Dobson's GitHub Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                >
                    <FaGithub size="2.2em"/>
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
                    <FaEnvelope size="2.2em"/>
                </a>
            </div>

            {/*<div className="flex gap-7 md:gap-8 items-center justify-start">*/}
            {/*    /!* Example animated elements *!/*/}
            {/*    <div className="w-4 h-4 md:w-6 md:h-6 bg-light rounded-full animate-bounce"></div>*/}
            {/*    <div className="w-4 h-4 md:w-6 md:h-6 bg-light rounded-full animate-ping"></div>*/}
            {/*    <div className="w-2 h-4 md:w-3 md:h-6 bg-light rounded-full animate-spin"></div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Footer;
