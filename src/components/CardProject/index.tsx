
import Teste from '../Teste';
import style from './CardProject.module.scss';

interface CardProjectProps {
  title: string;
  description: string;
  url: string;
}
export const CardProject = ( {title,description, url }: CardProjectProps) => {
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
      </div>
      
    </div>
  );
};

