import React from 'react';

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatbotNavbarButton = ({ isOpen, setIsOpen }: ChatbotProps) => {
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal} className={`flex items-center text-light px-2 py-1 rounded bg-custom-orange z-50 ${isOpen ? 'hidden' : ''}`}>
                <span className="hidden lg:block">Chat with AI</span>
                <img src="/lemur.svg" alt="Momo" className=" lg:ml-3 w-6 h-6 md:w-8 md:h-8" />
            </button>
        </div>
    );
};

export default ChatbotNavbarButton;
