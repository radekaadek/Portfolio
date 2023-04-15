export const programmingLanguages: Skill[] = [
    { id: 1, title: 'Python', url: 'https://www.python.org/', description: 'A programming language that lets you work quickly and integrate systems more effectively.', proficiency: 4 },
    { id: 2, title: 'TypeScript', url: 'https://www.typescriptlang.org/', description: 'Superset of JavaScript that compiles to clean JavaScript output.', proficiency: 3 },
    { id: 3, title: 'C++', url: 'https://isocpp.org/', description: 'A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language".', proficiency: 3 },
    { id: 4, title: 'SQL', url: 'https://www.w3schools.com/sql/', description: 'Language used in programming and designed for managing data held in a relational database management system.', proficiency: 3 },
    { id: 5, title: 'Java', url: 'https://www.java.com/en/', description: 'A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.', proficiency: 2 },
]

export const frameworks: Skill[] = [
    { id: 1, title: 'FastAPI', url: 'https://fastapi.tiangolo.com/', description: 'A modern, fast (high-performance), web framework for building APIs.', proficiency: 4 },
    { id: 2, title: 'Svelte', url: 'https://svelte.dev/', description: 'A compiler for building web applications.', proficiency: 3 },
    { id: 3, title: 'React', url: 'https://reactjs.org/', description: 'A JavaScript library for building user interfaces.', proficiency: 2 },
    { id: 4, title: 'Next.js', url: 'https://nextjs.org/', description: 'The React Framework for Production.', proficiency: 2 },  
]

export const otherTools: Hobby[] = [
    { id: 1, title: 'Git', url: 'https://git-scm.com/' },
    { id: 2, title: 'Docker', url: 'https://www.docker.com/' },
    { id: 3, title: 'Linux', url: 'https://www.linux.org/' },
    { id: 4, title: 'Windows', url: 'https://www.microsoft.com/en-us/windows' },
    { id: 5, title: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
    { id: 6, title: 'GitHub', url: 'https://github.com' },
]


export const hobbies: Hobby[] = [
    { id: 1, title: 'Programming 💻', url: '/' },
    { id: 2, title: 'Interacting with music 🕺💃', url: '/about/music' },
    { id: 3, title: 'Playing video games 🎮', url: '/about/games' },
    { id: 4, title: 'Cycling 🚴‍♂️', url: '/contact/cycling' },
];

export const navTabs: Tab[] = [
    { id: 1, title: 'Home', url: '/' },
    { id: 3, title: 'Contact', url: '/contact' },
    { id: 4, title: 'Projects', url: '/projects' },
];
