import { CardProject } from "../CardProject";
import data from "./data";
import styles from "./Projects.module.scss";
const Projects = () => {
  return (
    <div id="projects">
      <h1 className={styles.titleProjects} >My Projects.</h1> 
      {data.map(data => (
        <CardProject
          key={data.id} 
          id={data.id}
          title={data.title}
          description={data.description}
          urlSite={data.urlSite}
          linkRep={data.linkRep}
          technology={data.technology}
        />
      ))}
    </div>
  );
};

export default Projects;
