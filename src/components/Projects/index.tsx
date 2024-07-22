import style from "./Projects.module.scss";

function Projects(){
    return(
        <div className={style.container}>
            <div >
                <h1>My projects</h1>
                <div className={style.card}>
                    <div className={style.screen}>
                        <iframe src="https://sr-dente.vercel.app" width="300px" height="200px" ></iframe>
                    </div>
                    <div className={style.text}>
                        <h2>Projeto Sr. Dente</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus in erat eget nunc ultrices tincidunt.
                            Nullam
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Projects;