import { useState } from "react";
import { CardProject } from "../CardProject";
import data from "./data";
import styles from "./Projects.module.scss";
import { useLanguage } from "../../../contexts/LanguageContext";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();
  const projectsToShow = showAll ? data : data.slice(0, 4);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div id="projects">
      <h1 className={styles.titleProjects}>{t('projects.title')}</h1> 
      {projectsToShow.map(project => (
        <CardProject
          key={project.id} 
          id={project.id}
          title={project.title}
          description={project.description}
          urlSite={project.urlSite}
          linkRep={project.linkRep}
        />
      ))}
      
      <div className={styles.buttonContainer}>
        {!showAll && data.length > 4 && (
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            {t('projects.showMore')} ({data.length - 4} {t('projects.remaining')})
          </button>
        )}
        
        {showAll && (
          <button className={styles.showLessButton} onClick={handleShowLess}>
            {t('projects.showLess')}
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
