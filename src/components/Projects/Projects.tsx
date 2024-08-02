import BlogCard from "@/components/Blog/BlogCard";
import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";
import projects from "@/components/Projects/ProjectsData";


function Projects() {
    return (
        <div className="flex flex-col items-center bg-amber-600 text-black p-4 px-4">
            <h2 className="text-5xl text-light font-bold underline mb-4 z-0">Projects</h2> {/* Enlarged and underlined title */}
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;