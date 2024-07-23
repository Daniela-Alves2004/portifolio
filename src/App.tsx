// src/App.jsx
import styles from './app.module.scss';
import About from './components/About';
import Apresentation from './components/Apresentation';
import Articles from './components/Articles';
import Header from "./components/Header";
import Project from './components/Projects';
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
     <Header/>
     <Apresentation/>
     <About />  
     <Project/>
     <Articles/>
     <Footer/>
    </div>
  );
}

export default App;

