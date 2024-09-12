import style from "./About.module.scss";
import foto from "../../../assets/fotoDaniela.jpg";
import download from "../../../assets/About/download.png";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/About/github.png";
import Button from "../../Micro/Button";
function About() {
    function downloadCV() {
        window.open("https://drive.google.com/file/d/1IsOZFTT9Xk-r0Svm_jMvWwXrepWbnNzy/view?usp=sharing", "_blank")
    }
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
                            I volunteer as a <span>front-end developer</span> at Pipoca Ágil,
                            where I develop solutions using technologies such as React.js,
                            TypeScript, SCSS,and Vite. At Yadax,
                            I gained experience in Oracle database  administration,
                            performing maintenance tasks.
                            <br /> <br />
                            During my <span>Software Engineering</span> degree,
                            I not only learned technical concepts but also
                            participated in extension projects like Meninas  Digitais,
                            where I currently <span>serve as a coordinator</span>, and have previously
                            been a mentor and <span>leader</span> of the <span>marketing </span>sector.
                            These experiences helped me develop interpersonal
                            skills such as <span>communication</span>, <span>teamwork</span>, and <span>leadership</span>.
                            Additionally, I participated in a <span>cientific initiation</span>,
                            which improved my writing skills and provided me with a solid
                            foundation in conducting scientific research.

                        </p>
                    </div>
                    <div className={style.contact}>
                        <div
                            className={style.contact}

                        >
                            <Button className="aContact" btclassName="btContact" btLink="https://www.linkedin.com/in/daniela-dos-santos-alves/" image={linkedin} label='Linkendin' onClick={() => console.log('LinkedIn clicked')} />
                            <Button className="aContact" btclassName="btContact" btLink="#" image={download} label='Download CV' onClick={() => downloadCV()} />
                            <Button className="aContact" btclassName="btContact" btLink="https://github.com/Daniela-Alves2004" image={github} label='GitHub' onClick={() => console.log('GitHub clicked')} />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default About;