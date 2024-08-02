import React from "react";
import ExperienceTree from "@/components/Experience/ExperienceTree";

function Experiences() {
    return (
        <div className="py-8 min-h-screen flex justify-center">
            <div
                style={{ width: "95%" }}
                className="flex flex-col items-center align-middle justify-center rounded-lg bg-opacity-90"
            >
                <div className="min-h-12 flex flex-col justify-end sm:text-dark flex-grow lg:pb-28"> {/* Added flex-grow class */}
                    <h2 className="bg-light text-dark rounded p-4 text-5xl lg:text-7xl font-bold underline mb-6">
                        Experiences
                    </h2>
                </div>
                <ExperienceTree />
            </div>
        </div>
    );
}

export default Experiences;
