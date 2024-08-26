import styles from './app.module.scss';
import About from './components/About';
import Apresentation from './components/Apresentation';
import Articles from './components/Articles';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import wave from "../src/assets/Vector.png";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';

type MousePosition = {
  x: number;
  y: number;
};

type CursorVariant = "default";

function App() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [cursorVariant] = useState<CursorVariant>("default");

  useEffect(() => {
    // Função de movimentação do mouse com throttle
    const mouseMove = throttle((e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY , 
      });
    }, 23); // Atualiza a cada 16ms (aproximadamente 60 FPS)

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'transparent',
      border:'3px solid #4600be',
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      />
      <Header />
      <Apresentation />
      <About />
      <h1 className={styles.titleProjects}>
        <img src={wave} alt="" />
        My Projects
      </h1>
      <Projects />
      <h1 className={styles.titleArticle}>
        My Articles.
      </h1>
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
