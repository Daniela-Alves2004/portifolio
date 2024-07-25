import { CardProject } from "../CardProject";
import data from "./data";

 const Projects = () => {
  return(
      data.map(data => (
        <CardProject
          key={data.id}
          title={data.title}
          description={data.description}
          url={data.url}
          tech={data.tech}
        />
      ))

  ); 

};

export default Projects;

