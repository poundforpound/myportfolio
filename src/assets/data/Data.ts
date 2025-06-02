import proj1 from '../images/proj1.webp'
import proj2 from '../images/proj2.webp'
import proj3 from '../images/proj3.webp'
import proj4 from '../images/proj4.webp'
import proj5 from '../images/proj5.webp'
import proj6 from '../images/proj6.webp'

export const menuHeaderList: Array<{ title: string, href: string }> = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About",
        href: "about",
    },
    {
        title: "Tech Stack",
        href: "techStack",
    },
    {
        title: "Project",
        href: "project",
    },
    {
        title: "Contact",
        href: "contact",
    }
]

export const techList: Array<string> = ["html", "css", "js", "react", "redux", "bootstrap", "tailwind", "sass", "git", "greensock", "vsCode", "githubFill"]

export const projectList: Array<{ img: string, title: string, description: string, stack: string }> = [
    {
        img: proj1,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React"
    }, {
        img: proj2,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React"
    }, {
        img: proj3,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React"
    }, {
        img: proj4,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React"
    }, {
        img: proj5,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React"
    },{
        img: proj6,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React"
    },
]

export const projectListMenu:Array<string>=["All","Landing Page","React","Spa"]

export const socialIconList: Array<string>=["instagram","linkedin","telegram","vk"]