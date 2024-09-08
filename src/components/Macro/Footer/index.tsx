import style from "./Footer.module.scss";
import github from "../../../assets/About/github.png";
import linkedin from "../../../assets/linkedin.png";
function Footer() {

    return(
        <footer className={style.footer}>
            <div className={style.icons} >
                <a target="__black" href="https://github.com/Daniela-Alves2004"><img src={github} alt="" /></a>
                <a target="__black" href="https://www.linkedin.com/in/daniela-dos-santos-alves/"> <img src={linkedin} alt="" /></a>
            </div>
            <p>Desenvolvido por Daniela Alves.</p>
            <p>2024 | Daniela Alves</p>
        </footer>
    );
};

export default Footer;