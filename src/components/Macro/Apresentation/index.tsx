import { motion } from "framer-motion";
import style from "./Apresentation.module.scss";
import imagem from "../../../assets/hi.jpg";

function Apresentation() {
  return (
    <div className={style.container}>
      <motion.div
        className={style.containerText}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I&apos;m <span>Daniela Alves</span>
        </h1>
        <p>
          I work as a volunteer <span>front-end developer</span> at Pipoca Ágil,
          <br />
          creating websites with React.js, TypeScript, SCSS, and Vite,
          <br />
          using the Scrum methodology. I am also a <span>software engineering</span>
          <br />
          undergraduate.
        </p>
      </motion.div>
      <motion.div
        className={style.containerImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={imagem} alt="Imagem de uma mulher sorrindo" />
      </motion.div>
    </div>
  );
}

export default Apresentation;
