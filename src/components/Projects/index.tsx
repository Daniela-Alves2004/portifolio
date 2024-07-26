import { CardProject } from "../CardProject";
import data from "./data";

 const Projects = () => {
  return(
      data.map(data => (
        <CardProject
          id={data.id}
          title={data.title}
          description={data.description}
          url={data.url}
        />
      ))

  ); 

};

export default Projects;

