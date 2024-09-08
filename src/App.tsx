import styles from './app.module.scss';
import Header from "./components/Macro/Header";
import Footer from "./components/Macro/Footer";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  HomePage  from "./pages/HomePage";
import NotPublic from './pages/NotPublicPage';
import BackToTopButton from './components/Micro/BackTopButton';

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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/not-public' element={<NotPublic />} />
    </Routes>
    </BrowserRouter>
    <BackToTopButton />
    <Footer />
    </div>
   
  );
}

export default App;
