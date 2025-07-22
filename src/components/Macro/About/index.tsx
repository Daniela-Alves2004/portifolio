import style from "./About.module.scss";
import foto from "../../../assets/fotoDaniela.jpg";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/About/github.png";
import Button from "../../Micro/Button";
function About() {
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
                        <h1>About me.</h1>
                        <p>
                        I am a <span>Software Engineering</span> undergraduate at UTFPR and an <span>intern at StartSe</span>, 
                        where I am part of the Artificial Intelligence squad. In my daily work, 
                        I develop solutions using Flowise and N8N while continuously deepening my 
                        knowledge in automation and applied AI.  
                        <br/>
                        My experience as a front-end developer includes building websites with React.js, TypeScript, SCSS, and Vite. Additionally, I worked as a DBA at Yadax, 
                        handling Cassandra, MongoDB, and Oracle, which strengthened my skills in database administration and management.  
                        <br/>
                        During my undergraduate studies, I participated in extension projects that enhanced my communication and leadership skills. 
                        I also engaged in a <span>scientific research</span> project focused on knowledge management in software engineering, which improved my 
                        academic writing and understanding of the research process.

                        </p>
                    </div>
                    <div className={style.contact}>
                        <div
                            className={style.contact}

                        >
                            <Button className="aContact" btclassName="btContact" btLink="https://www.linkedin.com/in/daniela-dos-santos-alves/" image={linkedin} label='Linkendin' onClick={() => console.log('LinkedIn clicked')} />
                            <Button className="aContact" btclassName="btContact" btLink="https://github.com/Daniela-Alves2004" image={github} label='GitHub' onClick={() => console.log('GitHub clicked')} />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default About;