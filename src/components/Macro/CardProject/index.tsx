import { motion } from "framer-motion";
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
    <motion.div
      className={`${style.cardProject} ${isEven ? style.reverse : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: id * 0.3 }}
    >
      <motion.div
        className={style.textProjects}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: id * 0.3 }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <p>The technologies used were:</p>
        <motion.div
          className={style.technologies}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: id * 0.4 }}
        >
          {technology.map((tech) => (
            <motion.div
              className={style.tech}
              key={tech.desclogo}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: id * 0.5 }}
            >
              <img src={tech.logo} alt={`${tech.desclogo} logo`} />
              <span>{tech.desclogo}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={style.btLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: id * 0.6 }}
        >
          <p>To learn more, visit:</p>
          <motion.div
            className={style.btComponent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: id * 0.7 }}
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
