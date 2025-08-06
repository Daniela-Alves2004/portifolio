import style from "./Footer.module.scss";
import github from "../../../assets/About/github.png";
import linkedin from "../../../assets/linkedin.png";
import { useLanguage } from "../../../contexts/LanguageContext";
function Footer() {
    const { t } = useLanguage();

    return(
        <footer className={style.footer}>
            <div className={style.icons} >
                <a target="__black" href="https://github.com/Daniela-Alves2004"><img src={github} alt="" /></a>
                <a target="__black" href="https://www.linkedin.com/in/daniela-dos-santos-alves/"> <img src={linkedin} alt="" /></a>
            </div>
            <p>{t('footer.developed')}</p>
            <p>{t('footer.rights')}</p>
        </footer>
    );
};

export default Footer;