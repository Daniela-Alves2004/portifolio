import style from './CardProject.module.scss';
import github from "../../assets/github1.png";
import web from "../../assets/web.png";
import Button from '../Button'; 

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
          <p>To learn more, visit:</p>
          <div className={style.btComponent}>
            <Button btLink={linkRep} className='aProjects'  btclassName="btProjects" image={github} label="GitHub" />
            <Button btLink={urlSite} className='aProjects'  btclassName="btProjects"  image={web} label="Website" />
          </div>
         
        </div>
      </div>
    </div>
  );
};
