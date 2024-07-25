
import style from './Projects.module.scss';

interface CardProjectProps {
  title: string;
  description: string;
  url: string;
}
export const CardProject = ( {title,description, url}: CardProjectProps) => {
    return (
    <div className={style.projectsContainer}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{url}</p>
      </div>
    </div>
  );
};

