import style from './CardProject.module.scss';
import github from "../../../assets/Projects/github1.png";
import web from "../../../assets/Projects/web.png";
import Button from '../../Micro/Button';

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  urlSite: string;
  linkRep: string;
  technology: { logo: string; desclogo: string }[];
}

export const CardProject = ({ id, title, description, urlSite, linkRep, technology }: CardProjectProps) => {
  const isEven = id % 2 === 0;

  return (
    <div
      className={`${style.cardProject} ${isEven ? style.reverse : ''}`}

    >
      <div
        className={style.textProjects}

      >
        <h1>{title}</h1>
        <p>{description}</p>
        <p>The technologies used were:</p>
        <div
          className={style.technologies}

        >
          {technology.map((tech) => (
            <div
              className={style.tech}
              key={tech.desclogo}

            >
              <img src={tech.logo} alt={`${tech.desclogo} logo`} />
              <span>{tech.desclogo}</span>
            </div>
          ))}
        </div>

        <div
          className={style.btLinks}

        >
          <p>To learn more, visit:</p>
          <div
            className={style.btComponent}

          >
            <Button
              btLink={linkRep}
              className='aProjects'
              btclassName="btProjects"
              image={github}
              label="GitHub"
              onClick={() => console.log('GitHub clicked')}
            />
            <Button
              btLink={urlSite}
              className='aProjects'
              btclassName="btProjects"
              image={web}
              label="Site"
              onClick={() => console.log('WebSite clicked')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
