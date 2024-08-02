// BlogData.ts

export interface BlogPost {
    title: string;
    Introduction: string;
    mainContent: string;
    imageUrl: string;
    publicationDate: string;
}

const blogData: BlogPost[] = [
    {
        title: "How did I navigate my early experiences in tech?",
        Introduction: "Some anecdotes on my first experiences in tech, and how I navigated them.",
        mainContent: `
<p class="text-gray-700 mb-4">
        Modern life is faaaaast paced. It can be nice to take a step back to appreciate where you currently are, and what has brought you here. Imposter syndrome is a real beast, so I think a bit of reflection and appreciation towards just far you've come, can go a long way in combating it.
    </p>
    
<p class="text-gray-700 mb-4">
        Going into my first real technical role as a Data Engineering Intern, back in mid 2022, I had a million questions, and was admittedly, very intimidated. 
        What would my day-to-day look like? How was I going to learn this entire stack, from scratch, 
        while making impactful contributions? What is this 'memoization' thing I've read about? Did they just spell memorization wrong? Do I know enough yet??
    </p>
    <p class="text-gray-700 mb-4">
        As I began to work, I realized that although I had a lot to learn, I had a lot to offer too. And I'm not saying this to self-praise, I am saying that I came to the realization that there is much more you can bring to an organization and dev team, other than code.
        Slowly but (not so) surely, I began breaking this massive enterprise codebase into smaller, more approachable pieces, relevant to my domain. The first 2 months absolutely flew by, but when I finally gave myself a moment to look back, I was pretty amazed at how my mental landscape and the way I felt when opening up a new file had evolved. I began to greatly enjoy the semi-structured nature of it all - learning about X, Y, and Z through various means, all to do task B. I was able to learn from my seniors, but also on my own - essentially "learning how to learn" within a professional development. There's a zillion relevant youtube videos, hundreds of ways I *could* ingest relevant knowledge, but which methods are the most effective and efficient, for me?
        What was once intimidation and daunt had evolved into discovery and drive. I'd made myself knowledgeable on a few pieces of the stack that no one else was especially knowledgeable about, carving out some unique value within the team to provide insights here and there to devs and stakeholders exponentially more experienced than I.
    </p>
    <p class="text-gray-700 mb-4">
        I'll never forget my first PR. Just a minor change to an 'on-hover' feature. But it was a feature 
        used by several thousand users. Eventually, I was able to test it in nightly (our development environment), a week before the production release, which 
        gave me a swift dose of both excitement and nerves. After that loooooong week, the automated production release email had my bugfix in the patch notes. An audible exhale and a little smile, it was a good moment.
    </p>
    <p class="text-gray-700 mb-4">
        I'm a competitive person. I grew up playing sports at high levels year-round, absolutely disdained losing. This created a mental framework that conflicted with the infinite breadth and depth of knowledge that exists in tech. There is no scoreboard, no tangible benchmarks or moment of "okay I have proven I am now elite at X". 
        This industry experience was immensely helpful in evolving this mental dynamic that was making my day-to-day as frustrating as it was intimidating. I got to see firsthand that it's truly okay, and expected, to not know it all, even at senior levels. Instead, we're collectively learning and growing on-the-go. We're the team. We're getting better together. It wasn't destroying my competitive nature - just reframing it.
        Previously, my natural reaction to those "better" than me at something wasn't always...healthy. Rather than seeing them as an opportunity to learn and appreciate a tremendous amount of hard work and ingenuity, I would take a more...competitive route. But seeing the collaboration and true nature of this dynamic, in-person, I was able to see that this dynamic is something to embrace - not fight.
        It's the ability to do that while still outputting solid value that makes a great engineer (unless you're a genius, then the bar may be a bit higher).
        I'll still get frustrated at the fruitless "not being good enough" + imposter syndrome emotions, but they took a big blow when I shifted to a more constructive, collaborative, and appreciative mental approach.
    </p>
    <p class="text-gray-700 mb-4">
        Over my experiences thus far, I've been fortunate to have the opportunity to self-start different opportunities within 
        these experiences to contribute to my organizations in ways that neither of us expected. From creating much needed knowledge bases, to leading hackathon projects which designed and implemented real, 
        effective enhancements to an organization. I've realized that if you keep your head up, valuable opportunities exist everywhere, and seizing them is a way to make real, unique impacts. If you are an intern or a junior dev - I highly suggest seeking out the opportunities. They can be a great way to differentiate yourself and improve your spheres.
    </p>
    <p class="text-gray-700 mb-4">
        It is quite a trip to put myself in my mental shoes from 2 years ago, compared to now. I'm forever 
        grateful to have been able to learn so much in such a short period of time, from many incredible mentors 
        and peers.
    </p>
    <p class="text-gray-700">
        I'm excited to continue to grow and learn as I seek to invest myself in new, more challenging and impactful experiences.
    </p>`,
        imageUrl: "https://yourimageurl.com/react-hooks.jpg",
        publicationDate: "Updated: 2024-05-04"
    },
    {
        title: "The Value of Sequence Diagrams for Early Software Engineers",
        Introduction: "How creating sequence diagrams helps me understand large, complex, enterprise systems.",
        mainContent: `
        <p class="text-base mb-4">During my internship at Savvas, I was tasked with creating detailed sequence diagrams. These diagrams were crucial in tracing the journey of massive API calls across our tech stack, which included Angular 16 MFEs, GraphQL, and SpringBoot, connected to a PostgreSQL database.</p>
        <p class="text-base mb-4">The process of visualizing the flow of data and understanding the interactions between different components was not just about documentation. It was a valuable learning experience that deepened my understanding of how large-scale applications operate in a cohesive manner.</p>
    `,
        imageUrl: "https://yourimageurl.com/sequence-diagrams.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "Zoomed out, then Zoomed In - Evolution of 'Hooks' in Web Development",
        Introduction: "How did we manage state before hooks? How did Hooks emerge and evolve into what we see across modern frontend frameworks today (React, Angular, Vue)?",
        mainContent: `
        <p class="text-base mb-4">Having used various flavors of "hooks" across various frameworks and contexts in my personal, professional, and educational projects, I decided to do a deeper dive into their history. How was the problem they solve handled before their existence? How did they evolve to what we see today? We do we see today?</p>
        <p class="text-base mb-4">In this article, I delve into the design philosophies and implementation details of hooks in both React and Angular, drawing from my diverse experiences as detailed in my resume.</p>
    `,
        imageUrl: "https://yourimageurl.com/react-angular-hooks.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "Understanding JS' Async/Await in the context of Concurrency and Parallelism",
        Introduction: "(Re)Introducing yourself to asynchronous web development, through the lens of concurrency and parallelism.",
        mainContent: `
        <p class="text-base mb-4">Async/await in JavaScript can initially appear daunting. My journey towards understanding and effectively utilizing this powerful feature was marked by various challenges and learning experiences across multiple projects.</p>
        <p class="text-base mb-4">In this post, I aim to demystify async/await, sharing not just my own experiences but also providing educational insights into how you can leverage this feature to write cleaner, more efficient asynchronous code.</p>
    `,
        imageUrl: "https://yourimageurl.com/async-await.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "A Dive into Webpack's Module Federation",
        Introduction: "Exploring Webpack's Module Federation and it's usage/importance in Micro Front-End (MFE) architectures.",
        mainContent: `
        <p class="text-base mb-4">At Savvas Learning Company, my engagement with Angular's Module Federation was both deep and insightful. Leveraging Webpack for our main platform, I discovered the power and flexibility of this approach.</p>
        <p class="text-base mb-4">This article shares my experiences and learning, offering a detailed understanding of Module Federation and how it can be applied to create scalable, maintainable, and efficient applications.</p>
    `,
        imageUrl: "https://yourimageurl.com/module-federation.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "AI in EdTech - Equalizer or divider for educational inequality?",
        Introduction: "Some thoughts on how AI-powered solutions could either bridge or further divide educational inequalities.",
        mainContent: `
        <p class="text-base mb-4"></p>
        <p class="text-base mb-4">Sources
            <ul class="list-disc list-inside"></ul>
        </p>`
        ,
        imageUrl: "",
        publicationDate: "Coming soon"
    },

    //other topics to consider: Working in industrial environemtns, machine learning stuff, robotics stuff, stuff from other experineces and tying those expereinces to the blog posts.
];

export default blogData;
