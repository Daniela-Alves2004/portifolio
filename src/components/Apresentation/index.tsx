import style from "./Apresentation.module.scss";
import imagem from "../../assets/hi.jpg";
function Apresentation() {
  return (
    <div className={style.container} >
        <div className={style.containerText} >
            <h1>Hi, I&apos;m <span>Daniela Alves</span></h1>
            <p>I work as a volunteer <span>front-end developer</span> at Pipoca Ágil,<br/>
             creating websites with React.js, TypeScript, SCSS, and Vite,<br/> 
             using the Scrum methodology. </p>
        </div>
        <div className={style.containerImage} >
            <img src={imagem} alt="Imagem de uma mulher sorrindo" />
        </div>
    </div>
  );
}
export default Apresentation;