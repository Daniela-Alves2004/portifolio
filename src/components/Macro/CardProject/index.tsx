import style from './CardProject.module.scss';
import github from "../../../assets/Projects/github1.png";
import web from "../../../assets/Projects/web.png";
import Button from '../../Micro/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  urlSite?: string;
  linkRep: string;
}

export const CardProject = ({ id, title, description, urlSite, linkRep }: CardProjectProps) => {
  const isEven = id % 2 === 0;
  const { t } = useLanguage();

  return (
    <div
      className={`${style.cardProject} ${isEven ? style.reverse : ''}`}

    >
      <div
        className={style.textProjects}

      >
        <h1>{t(title)}</h1>
        <p>{t(description)}</p>

        <div
          className={style.btLinks}

        >
          <div
            className={style.btComponent}

          >
            <Button
              btLink={linkRep}
              className='aProjects'
              btclassName="btProjects"
              image={github}
              label={t('projects.common.github')}
              onClick={() => console.log('GitHub clicked')}
            />
            {urlSite && (
              <Button
                btLink={urlSite}
                className='aProjects'
                btclassName="btProjects"
                image={web}
                label={t('projects.common.accessWebsite')}
                onClick={() => console.log('WebSite clicked')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
