import css from "../assests/images/css.png";
import tailwind from "../assests/images/tailwind.png";
import html from "../assests/images/html.png";
import nodejs from "../assests/images/nodejs.png";
import reactjs from "../assests/images/reactjs.png";
import monogodb from "../assests/images/mongodb.png";
import javascript from "../assests/images/javascript.png";
import web from "../assests/images/web.png";
import typescript from "../assests/images/typescript.png";
import ux from "../assests/images/ux.png";
import react from "../assests/images/react.png";
import git from "../assests/images/git.png";
// import android from "../assests/images/androidstudio.png";
import pro1 from "../assests/images/pro1.png";
import pro2 from "../assests/images/pro2.png";
import pro3 from "../assests/images/pro3.png";
// import { SiAndroidstudio } from "react-icons/si";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "UI/UX Desigener",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript ",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: monogodb,
  },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Android",
  //   icon: android,
  // },
];

const projects = [
  {
    name: "Liberty Defense",
    description:
      "HEXWAVE screens for concealed metallic and non-metallic weapons and other threats using millimeter wave, advanced 3D imaging, and Artificial Intelligence for enhanced security.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: pro1,
    source_code_link: "",
    source_deploy_link: "",
  },
  {
    name: "L.M.S",
    description:
      "HEXWAVE screens for concealed metallic and non-metallic weapons and other threats using millimeter wave, advanced 3D imaging, and Artificial Intelligence for enhanced security.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: pro2,
    source_code_link: "",
    source_deploy_link: "",
  },
  {
    name: "Hotel App",
    description:
      "HEXWAVE screens for concealed metallic and non-metallic weapons and other threats using millimeter wave, advanced 3D imaging, and Artificial Intelligence for enhanced security.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: pro3,
    source_code_link: "",
    source_deploy_link: "",
  },
];

export { services, technologies, projects };
