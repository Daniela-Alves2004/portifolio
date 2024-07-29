import { CardProject } from "../CardProject";
import data from "./data";

 const Projects = () => {
  return(
      data.map(data => (
        <CardProject
          id={data.id}
          title={data.title}
          description={data.description}
          urlSite={data.urlSite}
          linkRep={data.linkRep}
          foto={data.foto}
          alt={data.alt}
          technology={data.technology}
        />
      ))

  ); 

};

export default Projects;

