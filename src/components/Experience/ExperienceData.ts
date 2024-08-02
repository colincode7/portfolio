// ExperienceData.ts

export interface Experience {
    title: string;
    date: string;
    company: string;
    location: string;
    details: string[];
    logo: string;
    technologies: string[];
}

const experiences: Experience[] = [
    {
        title: "Full-Stack Software Engineering Co-Op",
        date: "Sep 2023 - May 2024",
        company: "Mercedes-Benz & IFA Group",
        location: "Ladson, SC",
        details: [
            "Led team of 4 to develop a portable inventory scanning system using React, Flask, AWS, PostgreSQL, OpenCV, Tesseract OCR and YOLOv8 for real-time, small-part tracking in industrial settings to enable inventory awareness and supply-chain analytics",
            "Authored Software Requirements & Design Specification documents (SRS and SDS), gathering then defining functional and non-functional requirements which were then used in system design.",
            "Designed and implemented restful HTTPS communications via AWS API Gateway to SAP APIs, enabling real-time, scalable inventory transactions",
        "Achieved 98% inventory accuracy and SAP integration, delivering a fully end-to-end solution, significantly surpassing the existing accuracy and efficiency benchmarks"
    ],
        logo: '/mblogo.png',
        technologies: ['React', 'Flask', 'PostgreSQL', 'AWS', 'OpenCV'],
    },

    {
        title: "Software Engineering Intern",
        date: "May 2023 - Aug 2023",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ",
        details: [
            "Developed full-stack solutions for Savvas Realize, an industry-leading K-12 ed-tech platform, using Angular 16 MFEs, Apollo, GraphQL, RxJS, Spring, PostgreSQL, and Jest",
            "Resolved 11 high-priority Jira tickets, contributing to sprint goals within an Agile team",
            "Designed API sequence diagrams, illustrating the end-to-end lifecycle across Angular micro-frontends, Apollo GraphQL, Spring services, and PostgreSQL, for use in understanding and optimizing within a module federation architecture",
            "Built a comprehensive, all-in-one Confluence knowledge hub, covering content from day 1 new-dev onboarding guides to custom micro-frontend build steps, reducing redundant knowledge-sharing and improving developer autonomy/efficiency."
],
        logo: '/savvaslogo.png',
        technologies: ['Angular', 'GraphQL', 'Spring', 'PostgreSQL', 'Jest', 'StoryBook'],

    },
    {
        title: "Data Engineering Intern",
        date: "Sep 2022 - Jan 2023",
        company: "Vision Software Solutions (FinTech)",
        location: "Charleston, SC",
        details: [
            "Migrated from a monolithic desktop app to a microservice web app using React, Django, PostgreSQL, and AWS services (EC2, Lambda, S3, Athena), enhancing system efficiency and scalability",
            "Optimized API and query logic, utilizing AWS ElastiCache with in-memory data store for real-time data caching, reducing user load time by 23\\% (measured by AWS CloudWatch)",
            "Containerized Python ETL tasks and credit scoring algorithms using Docker Containers, encapsulating isolated processes and minimizing single-point failures"
        ],
        logo: '/fiscallogo.png',
        technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker'],

    },
    {
        title: "Sales Engineer & Scrum Master",
        date: "March 2018 - March 2021",
        company: "Ceterus (FinTech startup)",
        location: "Charleston, SC",
        details: [
            "Engineered technical solutions for over 125 clients by translating complex technical features into tangible business benefits, leading to increased sales and enhanced customer engagement",
            "Achieved a domain-high 23% year-over-year increase in customer retention by conducting regular feedback sessions and personalized follow-ups, leading to stronger client relationships and improved service satisfaction",
            "Achieved a 21% reduction in time blocked within six months by addressing common blockers while facilitating knowledge-sharing between interdependent teams for more efficient sprint planning and execution"
        ],
        logo: '/ceteruslogo.png',
        technologies: ['Jira', 'Excel', 'QuickBooks'],

    }
];

export default experiences;
