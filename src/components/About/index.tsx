import style from "./About.module.scss";
import foto from "../../assets/hi.jpg";
import download from "../../assets/download.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import Button from "../Button";
function About() {
    function downloadCV() {
        const fileUrl = "../../../public/cv.pdf" ;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'CVDanielaAlves.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    
    return (
        <div className={style.conteiner}>
            <div className={style.photo}>
                <img src={foto} alt="photo hello" />
            </div>
            <div className={style.conteinerDescription}>
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
                    <Button className="aContact" btclassName="btContact" btLink="https://www.linkedin.com/in/daniela-dos-santos-alves/" image={linkedin} label='Linkendin' onClick={() => console.log('LinkedIn clicked')} />
                    <Button className="aContact" btclassName="btContact" btLink="#" image={download} label='Download CV' onClick={() => downloadCV()}/>
                    <Button className="aContact" btclassName="btContact" btLink="https://github.com/Daniela-Alves2004" image={github} label='GitHub' onClick={() => console.log('GitHub clicked')} />
                </div>
            </div>

        </div>

    )
}
export default About;