import { useState } from "react";
import { CardProject } from "../CardProject";
import data from "./data";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? data : data.slice(0, 4);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div id="projects">
      <h1 className={styles.titleProjects}>My Projects.</h1> 
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
            Ver mais projetos ({data.length - 4} restantes)
          </button>
        )}
        
        {showAll && (
          <button className={styles.showLessButton} onClick={handleShowLess}>
            Ver menos projetos
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
