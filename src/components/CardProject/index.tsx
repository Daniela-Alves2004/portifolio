
import style from './CardProject.module.scss';

interface Image {
  src: string;
  alt: string;
}

interface CardProjectProps {
  title: string;
  description: string;
  url: string;
  tech?: Image;
}
export const CardProject = ( {title,description, url,tech }: CardProjectProps) => {
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
        <p>{JSON.stringify(tech)}</p>
      </div>
      
    </div>
  );
};

