
//import Teste from '../Teste';
import TechPA from '../TechPA';
import TechMD from '../TechMD';
import style from './CardProject.module.scss';
import vite from "../../assets/technologic/vite.png"
interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  urlSite: string;
  linkRep: string;
}
export const CardProject = ({ id, title, description, urlSite,linkRep }: CardProjectProps) => {
  return (
    <div className={style.cardProject}>
      <div className={style.screenWebsite}>
        <iframe src={urlSite}></iframe>
      </div>
      <div className={style.textProjects}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={style.technologics}>
        <p>The technologies used were:</p>
        {id === 1 && <TechPA />}
        {id === 2 && (
          <>
            <TechPA />
            <img src={vite} alt="Vite logo" />
            <p>Vite</p> 
          </>
        )}
        {(id === 3 || id === 4 || id === 5) && <TechMD />}
      </div>
      <div className={style.btLinks}>
        <a href={linkRep} >GitHub</a >
        <a href={urlSite}>Access the website</a>
      </div>
    </div>
  );
};

