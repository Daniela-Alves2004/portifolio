import Apresentation from "../../components/Macro/Apresentation";
import About from "../../components/Macro/About";
import Projects from "../../components/Macro/Projects";
import Articles from "../../components/Macro/Articles";
import waveAbout from "../../assets/Waves/waveAbout.png"; 
import waveParaBaixo from "../../assets/Waves/waveParaBaixo.png";
import waveArticle from "../../assets/Waves/waveArticle.png";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <Apresentation />
      <img className={styles.waveAbout} src={waveAbout} alt="Imagem curvada na cor roxa"/>
      <About />
      <img className={styles.waveAboutParaBaixo} src={waveParaBaixo} alt="Imagem curvada na cor roxa" />
      <Projects />
      <img className={styles.waveArticle} src={waveArticle} alt="Imagem curvada na cor roxa" />
      <Articles />
      <img className={styles.waveAboutParaBaixo} src={waveParaBaixo} alt="Imagem curvada na cor roxa" />

    </div>
  );
};

export default HomePage;