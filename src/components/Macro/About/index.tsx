import style from "./About.module.scss";
import foto from "../../../assets/fotoDaniela.jpg";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/About/github.png";
import Button from "../../Micro/Button";
import { useLanguage } from "../../../contexts/LanguageContext";
function About() {
    const { t } = useLanguage();
    
    return (
        <div id="about" className={style.conteiner}>
            <div
                className={style.photo}

            >
                <div className={style.photo}>
                    <img src={foto} alt="photo hello" />
                </div>
            </div>

            <div className={style.conteinerDescription}>
                <div
                    className={style.conteinerDescription}

                >
                    <div className={style.TextAbout}>
                        <h1>{t('about.title')}</h1>
                        <p dangerouslySetInnerHTML={{ __html: t('about.description') }}></p>
                    </div>
                    <div className={style.contact}>
                        <div
                            className={style.contact}

                        >
                            <Button className="aContact" btclassName="btContact" btLink="https://www.linkedin.com/in/daniela-dos-santos-alves/" image={linkedin} label={t('about.linkedin')} onClick={() => console.log('LinkedIn clicked')} />
                            <Button className="aContact" btclassName="btContact" btLink="https://github.com/Daniela-Alves2004" image={github} label={t('about.github')} onClick={() => console.log('GitHub clicked')} />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default About;