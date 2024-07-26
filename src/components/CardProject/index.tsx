
//import Teste from '../Teste';
import TechPA from '../TechPA';
import TechMD from '../TechMD';
import style from './CardProject.module.scss';

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  url: string;
}
export const CardProject = ( {id,title,description, url }: CardProjectProps) => {
    return (
    <div className={style.cardProject}>
      <div className={style.screenWebsite}>
        <iframe src={url}></iframe>
      </div>
      <div className={style.textProjects}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={style.technologics}>
      <p>The technologies used were:</p>
      {(id === 1 || id === 2) && <TechPA />}
      {(id === 3 || id === 4 || id === 5) && <TechMD />}
    </div>
      
    </div>
  );
};

