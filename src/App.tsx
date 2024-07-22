// src/App.jsx
import styles from './app.module.scss';
import About from './components/About';
import Apresentation from './components/Apresentation';
import Header from "./components/Header";
import Project from './components/Projects';
function App() {
  return (
    <div className={styles.container}>
     <Header/>
     <Apresentation/>
     <About />  
     <Project/>
    </div>
  );
}

export default App;

