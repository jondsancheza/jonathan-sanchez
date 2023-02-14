// import images
import Hero_person from "./assets/images/Hero/person.svg";

import figma from "./assets/images/Skills/figma.png";
import js from "./assets/images/Skills/js.png";
import mongo from "./assets/images/Skills/mongo.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
import project6 from "./assets/images/projects/img6.png";
import project7 from "./assets/images/projects/img7.png";
import person_project from "./assets/images/projects/person.svg";

import Hireme_person from "./assets/images/Hireme/person.svg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { BiHomeSmile } from "react-icons/bi";
import { RiCodeView, RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: BiHomeSmile,
    },
    {
      link: "#skills",
      icon: RiCodeView,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlineContactPhone,
    },
  ],
  hero: {
    title: "Web and BPM Developer",
    firstName: "JONATHAN",
    LastName: "SÁNCHEZ",
    btnText: "Hire Me",
    hireMe: "https://wa.me/573194961906",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web and BPM development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum",
        logo: figma,
        knowledge:[
          "Lorem figma 1",
          "Lorem figma 2",
          "Lorem figma 3"
        ],
      },
      {
        name: "Node js",
        para: "Lorem ipsum",
        logo: nodejs,
        knowledge:[
          "Lorem Node 1",
          "Lorem Node 2"
        ],
      },
      {
        name: "Javascript",
        para: "Lorem ipsum",
        logo: js,
        knowledge:[
          "Lorem js 1",
          "Lorem js 2"
        ],
      },
      {
        name: "React js",
        para: "Lorem ipsum",
        logo: reactjs,
        knowledge:[
          "Lorem react 1",
          "Lorem react 2"
        ],
      },
      {
        name: "Mongo DB",
        para: "Lorem ipsum text  dummy",
        logo: mongo,
        knowledge:[
          "Lorem mongo 1",
          "Lorem mongo 2"
        ],
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
        knowledge:[
          "Lorem python 1",
          "Lorem python 2"
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER?",
    service_content: [
      {
        title: "Web Development",
        para: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "BPM Development",
        para: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "UI / UX Designing",
        para: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Tribute Website",
        image: project1,
        url: "https://web-tributo.vercel.app/",
      },
      {
        title: "zShop web",
        image: project2,
        url: "https://zshop-virid.vercel.app/",
      },
      {
        title: "SabujCha Website",
        image: project3,
        url: "https://sabujcha-rho.vercel.app/",
      },
      {
        title: "Deezer Website",
        image: project4,
        url: "https://fabulous-salmiakki-63ced9.netlify.app/",
      },
      {
        title: "Tetris",
        image: project5,
        url: "https://jhonattanssg01.github.io/Tetris/",
      },
      {
        title: "Wheel Of Zombies",
        image: project6,
        url: "https://lambent-axolotl-7d7967.netlify.app/",
      },
      {
        title: "Videoclub CRUD",
        image: project7,
        url: "https://videoclub-movies.vercel.app/",
      },
    ],
  },
  hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    para: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "jondsancheza@gmail.com",
        icon: GrMail,
        link: "mailto:jondsancheza@gmail.com",
      },
      {
        text: "+57 3194961906",
        icon: MdCall,
        link: "https://wa.me/573194961906",
      },
      {
        text: "Jonathan Sánchez",
        icon: ImLinkedin,
        link: "https://www.linkedin.com/in/jonathan-david-s%C3%A1nchez-aya/",
      },
    ],
  },
  footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
