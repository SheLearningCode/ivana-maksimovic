export const hashRoutes = [
    ["Home", "/home/#home"],
    ["About", "/home/#about"],
    ["Experience", "/home/#experience"],
    ["Projects", "/home/#projects"],
    ["Contact", "/home/#contact"],
    ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "Developer",
    "Programmer",
    "Tech Enthusiast",
    "Gamer",
    "Solution Seeker"
];
export const myName = "Ivana";
export const shortDescription = "Junior Full Stack Developer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/SheLearningCode',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/ivana-maksimovic-870108225',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/ivn.mksm',
    },
    {
        name: 'Email',
        url: 'mailto:maksimovic.ivana@protonmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["Java", "Kotlin", "HTML/CSS", "Javascript", "YAML", "SQL"],
    },
    {
        name: "Frameworks&Libraries",
        items: ["ReactJs","TailwindCSS", "ThreeJs", "EmailJs","i18n", "SpringBoot", "RestAPI", "Quarkus"],
    },
    {
        name: "Database",
        items: ["MySQL", "PostgreSQL","Flyway DB-Migration", "Hibernate ORM"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Docker-Compose", "Postman", "Keycloak", "Confluence", "AzureDevOps","Linux"],
    },
];

export const experiences = [
    {
        title: "Trainee Fullstack Software Development",
        company_name: "Novatec Consulting GmbH",
        bottomColor: "#6d92bf",
        icon: "/company/novatec-logo.png",
        date: "August 2022 - July 2023",
        points: [
            "Engaged in the Novatec team maintaining client microservice applications, implementing 10+ efficiency-focused enhancements",
            "Implemented a multi tenancy schema approach enabling dynamic tenant registration on the fly, reducing process time by 85% while ensuring reliability with JUnit test cases",
            "Tooling research and implementation(security-checker tool, bug-checkerTool etc.), which improved Code Quality and Continious Integration",
            "Rectified over 15 bugs within the internal team transparency application"
        ],
    },
    {
        title: "German Language Teacher",
        company_name: "Tekaris GmbH",
        bottomColor: "#f1df87",
        icon: "/company/tekaris-logo.png",
        date: "Jan 2017 - Apr 2021",
        points: [
            "German language courses for beginners, intermediate and advanced students coupled with integrtion courses",
            "Exam Preparations for A1/A2/B1/B2/C1 certificates, archieved more then 20+ successfull graduates",
            "Office Assistence helping out in HR by improving social media user frequency up to 40%"
        ],
    },
    {
        title: "Technical Customer Support BMW",
        company_name: "GKK Dialog Group",
        bottomColor: "#bc1010",
        icon: "/company/gkk-logo.png",
        date: "Feb 2013 - Nov 2016",
        points: [
            "1st-Level Inbound: technical customer support for BMW Connected Drive, solving technical customer problems",
            "2nd-Level Outbound: selling tire charge service, which increased the sales volume up to 45%",
            "Coordinated and organized more then 50 BMW-Welt car pickup appointments for new customers",
        ],
    }
];

export const projectsData = [
    {
        title: 'Student-Courses CRM',
        desciption: 'Build a CRM platform that helps avoiding tons of papers, organizing students courses while maintaining the m:n relationship and utilizing CRUD operations',
        tech: ['Kotlin', 'Spring Boot', 'Docker-Compose', 'MVC', 'PostgreSQL', 'CRUD', 'RestAPI'],
        github: 'https://github.com/SheLearningCode/springboot-crm-backend',
        image: '/projects/img1.png'
    },
    {
        title: '3D Portfolio',
        desciption: 'Crafted an engaging 3D portfolio site with ReactJS and Three.js, enhancing user interaction through interactive animations while presenting projects and skills',
        tech: ['3rf', 'React', 'Threejs', 'Blender', 'Mixamo', 'Vercel-Hosting'],
        github: 'https://github.com/SheLearningCode/personal-3dportfolio-website',
        external: 'https://personal-3dportfolio-website.vercel.app/',
        image: '/projects/img2.png'
    },
    {
        title: 'Sorting Algorithms Visualizer',
        desciption: 'Designed sorting algoithms visualizer for user-friendly equation input and dynamic graph visualization, increasing users understanding of sorting concepts while comparing them visually',
        tech: ['Java', 'Java-Swing/AWT', 'MySQL','Sorting Algorithms'],
        github: 'https://github.com/SheLearningCode/sorting-algorithms-visualizer-java',
        image: '/projects/img3.jpeg'
    },
    {
        title: 'Multi-Tenancy Schema Approach',
        desciption: "Implemented multi tenancy schema approach, for cost efficient tenancy arhitecture, using dynamic tenant registration and flyway migration to faciliate tenant configuration while versioning migration files",
        tech: ['Kotlin','Quarkus', 'PostgreSQL', 'Flyway', 'Hibernate ORM'],
        github: 'https://github.com/SheLearningCode/multi-tenancy-example',
        image: '/projects/img4.png'
    },
    {
        title: 'Student CRM Backend',
        desciption: 'Developed a CRM platform, organizing students courses while maintaining the m:n relationship and utilizing CRUD operations. Secured the app using Keycloack',
        tech: ['Kotlin', 'Quarkus', 'Docker-Compose', 'Kecloak', 'PostgreSQL', 'CRUD', 'RestAPI'],
        github: 'https://github.com/SheLearningCode/quarkus-crm-backend-microservice',
        image: '/projects/img6.png'
    },
    {
        title: 'Responsive Portfolio',
        desciption: "Developed personal portfolio website for showcasting skills and learning responsive design",
        tech: ['ReaactJs','EmailJs','Vercel Hosting', 'CSS/JS'],
        github: 'https://github.com/SheLearningCode/ivanas-responsive-portfolio',
        external:'https://ivanas-responsive-portfolio.vercel.app/',
        image: '/projects/img5.png'
    }
];
