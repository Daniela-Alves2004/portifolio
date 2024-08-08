import srDenteImage from "../../assets/mockups/Captura de tela 2024-08-08 144255.png";
import lpSquadImage from '../../assets/mockups/lpSquad.png';
import meninasDigitaisImage from '../../assets/mockups/MD.png';
import marioImage from '../../assets/mockups/mario.png';
import toDoImage from '../../assets/mockups/toDo.png';
import css from "../../assets/technologic/css.png";
import html from "../../assets/technologic/html.png";
import js from "../../assets/technologic/js.png";
import typeScript from "../../assets/technologic/typeScript.png";
import react from "../../assets/technologic/react.png";
import vite from "../../assets/technologic/vite.png";
import scss from "../../assets/technologic/scss.png";

const data = [
    {
      id: 1,
      title: 'Projeto Sr. Dente',
      description: 'The Sr. Dente page is a volunteer project developed for Pipoca Ágil, aimed at educating and informing families about the importance of oral health. We offer accessible and educational content to encourage dental hygiene practices and preventive care. The project guides children s tooth transitions, addresses adult oral health, and reinforces the importance of brushing, flossing, and cavity prevention, always in a fun and family-oriented way.',
      urlSite: 'https://sr-dente.vercel.app',
      linkRep:'https://github.com/luscabap/sr-dente.git',
      textgithub:'GitHub',
      textSite:'Access the website',
      foto:srDenteImage,
      alt:"mockup sr Dente",
      technology: [
        { logo: react, desclogo: "React" },
        { logo: typeScript, desclogo: "TypeScript" },
        { logo: scss, desclogo: "Scss" },
      
      ]
    },
    {
      id: 2,
      title: 'Landing Page Squad Roxo ',
      description: 'The landing page for the Squad Roxo Pastel, from Pipoca Ágil, is a volunteer project aimed at introducing all the members and informing about the team s projects. In the future, responsiveness and testing will be added.',
      urlSite: 'https://pipoca-agil-apresentacao.vercel.app',
      linkRep:'https://pipoca-agil-apresentacao.vercel.app',
      textgithub:'GitHub',
      textSite:'Access the website',
      foto:lpSquadImage,
      alt:"mockup landing page squad",
      technology: [
        { logo: react, desclogo: "React" },
        { logo: typeScript, desclogo: "TypeScript" },
        { logo: scss, desclogo: "Scss" },
        { logo: vite, desclogo: "Vite" },
      
      ]
    },
    {
        id:3,
        title:'Website Meninas Digitais',
        description:'This repository contains the source code for the Interactive Platform of the Digital Girls Project. The objective of this platform is to assist in locating relevant content for use in mentoring within the Digital Girls Project. This web service offers resources such as tutorials, links to educational content, project examples, and tips for developing projects for the Technovation Girls competition in an objective manner.',
        urlSite: 'https://daniela-alves2004.github.io/projeto-web-front-end/',
        linkRep:'https://github.com/Daniela-Alves2004/projeto-web-front-end.git',
        textgithub:'GitHub',
        textSite:'Access the website',
        foto:meninasDigitaisImage,
        alt:"mockup Meninas Digitais",
        technology: [
          { logo: html, desclogo: "HTML" },
          { logo: css, desclogo: "CSS" },
          { logo: js, desclogo: "JavaScript" },
        
        ]
    },
    {
        id:4,
        title:'Jogo do Mario',
        description:'At the beginning, the user sees an introductory screen that explains how the game works. When the game starts, the user must avoid touching the obstacles (pipes) to keep playing. If the user collides with an obstacle, a screen will display the score and offer the option to play again.',
        urlSite: 'https://daniela-alves2004.github.io/Jogo-Mario/',
        linkRep:'https://github.com/luscabap/sr-dente.git',
        textgithub:'GitHub',
        textSite:'Access the website',
        foto:marioImage,
        alt:"mockup mario Game",
        technology: [
          { logo: html, desclogo: "HTML" },
          { logo: css, desclogo: "CSS" },
          { logo: js, desclogo: "JavaScript" },
        
        ]
    },
    {
      id:5,
      title:'To do list',
      description:'This project is a task list with features that allow adding descriptions, dates, and task types. It is possible to add new tasks, clear all tasks or just a specific one, and mark tasks as completed.',
      urlSite: 'https://daniela-alves2004.github.io/lista-de-tarefas/',
      linkRep:'hhttps://github.com/Daniela-Alves2004/lista-de-tarefas.git',
      textgithub:'GitHub',
      textSite:'Access the website',
      foto:toDoImage,
      alt:"mockup to do list",
      technology: [
        { logo: html, desclogo: "HTML" },
        { logo: css, desclogo: "CSS" },
        { logo: js, desclogo: "JavaScript" },
      
      ]
    },
  ];
  
  export default data;
  