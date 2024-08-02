import React, { useRef } from 'react';
import { FaMusic } from 'react-icons/fa';

interface SpotifyPlayerProps {
    openComponent: 'theme' | 'music' | null;
    setOpenComponent: (component: 'theme' | 'music' | null) => void;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ openComponent, setOpenComponent }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const togglePlayer = () => {
        setOpenComponent(openComponent === 'music' ? null : 'music');
    };

    return (
        <div>
            <button
                onClick={togglePlayer}
                className="mx-2 py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                aria-label="Toggle music player"
            >
                <div className="flex items-center">
                    <FaMusic size="1.6em" className="mr-2" />
                    <span className="hidden md:inline">{openComponent === 'music' ? 'Music' : 'Music'}</span>
                </div>
            </button>
            <div className="fixed top-16 right-5 z-30">
                <iframe
                    ref={iframeRef}
                    style={{ borderRadius: '16px', display: openComponent === 'music' ? 'block' : 'none' }}
                    src="https://open.spotify.com/embed/playlist/0HrIRrRqoziosnjirLgBfD?utm_source=generator&theme=0"
                    width="100%"
                    height="362"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="eager"
                    title="Spotify Music Player"
                ></iframe>
            </div>
        </div>
    );
};

export default SpotifyPlayer;