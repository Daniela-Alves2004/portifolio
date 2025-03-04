import style from "./Apresentation.module.scss";
import imagem from "../../../assets/hi.jpg";

function Apresentation() {
  return (
    <div className={style.container}>
      <div
        className={style.containerText}

      >
        <h1>
          Hi, I&apos;m <span>Daniela Alves</span>
        </h1>
        <p>
        Software Engineer | AI Intern
        </p>
      </div>
      <div
        className={style.containerImage}

      >
        <img src={imagem} alt="Imagem de uma mulher sorrindo" />
      </div>
    </div>
  );
}

export default Apresentation;
