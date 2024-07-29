//import Teste from '../Teste';
import TechPA from '../TechPA';
import TechMD from '../TechMD';
import style from './CardProject.module.scss';
import vite from "../../assets/technologic/vite.png"
import github from "../../assets/github1.png";
import web from "../../assets/web.png";

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  urlSite: string;
  linkRep: string;
  foto: string;
  alt: string;
  technology: { logo: string; desclogo: string }[];
}

export const CardProject = ({ id, title, description, urlSite, linkRep, foto, alt,technology}: CardProjectProps) => {
  const isEven = id % 2 === 0; 

  return (
    <div className={`${style.cardProject} ${isEven ? style.reverse : ''}`} >
      <div className={style.screenWebsite}>
        <img src={foto} alt={alt} />
      </div>

      <div className={style.textProjects}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>The technologies used were:</p>
        <div className={style.technologies}>
         {technology.map((tech) => (
          <div className={style.tech}>
             <img src={tech.logo} alt={`${tech.desclogo} logo`} />
             <span>{tech.desclogo}</span>
          </div>
        ))}
        </div>
        <div className={style.btLinks}>
          <a target="_blank" href={linkRep}>
            <button className={style.buttonGitHub}>
              <p>GitHub</p>
              <img src={github} alt="GitHub logo" />
            </button>
          </a>
          <a target="_blank" href={urlSite}>
            <button className={style.buttonWeb}>
              <p>Access the website</p>
              <img src={web} alt="Website logo" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
