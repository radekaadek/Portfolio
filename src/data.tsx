//import react icons
// import git docker linux vercel vscode svelte react nextjs fastapi python typescript c++ sql java
import { FaDocker, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiVercel, SiSvelte, SiReact, SiNextdotjs, SiFastapi } from 'react-icons/si';
import { SiPython, SiTypescript, SiCplusplus, SiPostgresql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const programmingLanguages: ProgrammingLang[] = [
    { id: 1, title: 'Python', url: 'https://www.python.org/', img: <SiPython/>, proficiency: 5 },
    { id: 2, title: 'C++', url: 'https://isocpp.org/', img: <SiCplusplus/> , proficiency: 4 },
    { id: 4, title: 'SQL', url: 'https://www.w3schools.com/sql/', img: <SiPostgresql/> , proficiency: 3 },
    { id: 3, title: 'TypeScript', url: 'https://www.typescriptlang.org/', img: <SiTypescript/>, proficiency: 3 },
    { id: 5, title: 'Java', url: 'https://www.java.com/en/', img: <FaJava/> , proficiency: 2 },
]

export const frameworks: ListItemImg[] = [
    { id: 1, title: 'FastAPI', url: 'https://fastapi.tiangolo.com/', img: <SiFastapi/> },
    { id: 2, title: 'Svelte', url: 'https://svelte.dev/', img: <SiSvelte/> },
    { id: 3, title: 'React', url: 'https://reactjs.org/', img: <SiReact/> },
    { id: 4, title: 'Next.js', url: 'https://nextjs.org/', img: <SiNextdotjs/> },
]

// get icons from react-icons
export const otherTools: ListItemImg[] = [
    // { id: 5, title: 'Neovim', url: 'https://neovim.io/', img: <DiNeovim/> },
    { id: 2, title: 'Linux', url: 'https://www.linux.org/', img: <FaLinux/> },
    { id: 3, title: 'Git ', url: 'https://git-scm.com/', img: <FaGitAlt/> },
    { id: 4, title: 'Docker', url: 'https://www.docker.com/', img: <FaDocker/> },
    { id: 5, title: 'Vercel', url: 'https://vercel.com/', img: <SiVercel/> },
]


export const hobbies: ListItem[] = [
    { id: 1, title: 'Programming 💻', url: '/' },
    { id: 2, title: 'Interacting with music 🕺💃', url: '/about/music' },
    { id: 4, title: 'Cycling 🚴‍♂️', url: '/contact/cycling' },
    { id: 3, title: 'Cybersecurity 🧑‍💻🔐', url: '/about/cybersecurity' },
    { id: 4, title: 'History 📜', url: '/about/history' },
];

export const navTabs: Tab[] = [
    { id: 1, title: 'Home', url: '/' },
    { id: 3, title: 'Contact', url: '/contact' },
    { id: 4, title: 'Projects', url: '/projects' },
];
