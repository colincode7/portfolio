import React from 'react';

const Birds: React.FC = () => {
    return (
        <div suppressHydrationWarning className="fixed -top-10 left-0 w-full h-full pointer-events-none">
            <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>
            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>
            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>
            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div>
        </div>
    );
};

export default Birds;
