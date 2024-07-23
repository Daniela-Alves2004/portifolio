import style from "./Footer.module.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
function Footer() {

    return(
        <footer className={style.footer}>
            <div className={style.icons} >
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <p>Desenvolvido por Daniela Alves.</p>
            <p>2024 | Daniela Alves</p>
        </footer>
    );
};

export default Footer;