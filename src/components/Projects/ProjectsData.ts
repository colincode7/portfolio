// ProjectsData.ts

interface Project {
    name: string;
    description: string;
    tags: string[];
    githubLink: string;
    imageUrl: string;
    detailedDescription: string;
}

const projects: Project[] = [
    {
        name: "Project One",
        description: "A brief description of Project One, showcasing the use of React, Node.js, and MongoDB.",
        tags: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/dobsonddev",
        imageUrl: "https://yourimageurl.com/image1.jpg",
        detailedDescription: "A more detailed description of Project One, including the challenges faced and the solutions implemented."
    },
    {
        name: "Project Two",
        description: "A brief description of Project Two, demonstrating skills in Vue and Firebase.",
        tags: ["Vue", "Firebase"],
        githubLink: "https://github.com/dobsonddev",
        imageUrl: "https://yourimageurl.com/image2.jpg",
        detailedDescription: "A more detailed description of Project Two, including the challenges faced and the solutions implemented."
    },
    {
        name: "Project Three",
        description: "A brief description of Project Three, focused on innovative solutions in cloud computing.",
        tags: ["AWS", "Serverless"],
        githubLink: "https://github.com/dobsonddev",
        imageUrl: "https://yourimageurl.com/image3.jpg",
        detailedDescription: "A more detailed description of Project Three, including the challenges faced and the solutions implemented."
    },
    {
        name: "Project Four",
        description: "A brief description of Project Four, illustrating expertise in Python and data analysis.",
        tags: ["Python", "Data Analysis"],
        githubLink: "https://github.com/dobsonddev",
        imageUrl: "https://yourimageurl.com/image4.jpg",
        detailedDescription: "A more detailed description of Project Four, including the challenges faced and the solutions implemented."
    }
];

export default projects;
