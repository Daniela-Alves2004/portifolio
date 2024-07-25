// src/App.jsx
import styles from './app.module.scss';
import About from './components/About';
import Apresentation from './components/Apresentation';
import Articles from './components/Articles';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
     <Header/>
     <Apresentation/>
     <About />  
     <Projects/>
     <Articles/>
     <Footer/>
    </div>
  );
}

export default App;

