import React, { useState } from 'react';

interface Project {
    name: string;
    description: string;
    tags: string[];
    githubLink: string;
    imageUrl: string;
    detailedDescription: string;
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="min-h-screen bg-softBlue flex items-center justify-center">
            <div className="w-80 h-full border-black border-2 rounded-md bg-light transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                <a href={project.githubLink} className="block cursor-pointer">
                    <article className="w-full h-full">
                        <figure className="w-full h-1/2 border-black border-b-2">
                            <img
                                src={project.imageUrl}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="px-6 py-5 text-left h-full">
                            <h1 className="text-[32px] mb-4">{project.name}</h1>
                            <p className="text-xs mb-4 line-clamp-4">
                                {project.description}
                            </p>
                            <div className="mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                                ))}
                            </div>
                            <button onClick={toggleModal} className="font-bold">Read More</button>
                        </div>
                    </article>
                </a>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-light p-5 rounded-md border-2 border-black">
                        <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
                        <p>{project.detailedDescription}</p>
                        <button onClick={toggleModal} className="mt-4 bg-gray-300 px-4 py-2 rounded text-black">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
