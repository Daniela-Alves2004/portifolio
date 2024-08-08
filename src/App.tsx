// src/App.jsx
import styles from './app.module.scss';
import About from './components/About';
import Apresentation from './components/Apresentation';
import Articles from './components/Articles';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import wave from "../src/assets/Vector.png";

function App() {
  return (
    <div className={styles.container}>
     <Header/>
     <Apresentation/>
     <About />  
     <h1 className={styles.titleProjects} > <img src={wave} alt="" />My Projects</h1>
     <Projects/>
     <Articles/>
     <Footer/>
    </div>
  );
}

export default App;

