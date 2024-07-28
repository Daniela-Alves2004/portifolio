import style from "./Articles.module.scss";
import iconArticle from "../../assets/article.png";
import article from "../../assets/application.png";

function Articles() {
    return (

        <div className={style.container}>
            <h1>My Articles.</h1>
            <div className={style.articleIC}>
                <div className={style.teste}>

                <img className={style.loading} src={article} />
                </div>


                <div className={style.articleText}>
                    <h2>Updating a Systematic Literature Review on Knowledge Management<br></br>Diagnostics in Software Development Organizations
                    </h2>

                    <p>Context: In the rapidly evolving software development landscape, organizations face the constant challenge to work with the knowledge generated. Knowledge<br></br> 
                        Management (KM) can be applied to efficiently manage the knowledge in software development organizations and ensure the product quality. However,<br></br>
                        although there are several KM approaches, carrying out a KM diagnosis in the organization can identify which knowledge activities present the best cost-benefit for the organization. A<br></br> 
                        Systematic Literature Review (SLR) was published in 2018, presenting evidence on KM diagnosis in software development organizations. From an assessment of this SLR<br></br> 
                        and the current state of this research topic, we noticed that the 2018 SLR needed maintenance.
                       <br></br> Objective: This study aims to update and extend the results produced in this previous SLR.
                       <br></br>Method: We conducted the 2018 SLR update, considering a new database, backward and forward snowballing,
                        and more analyses of the extracted data.
                        <br></br> Results:....
                        <br></br> Conclusion: ..</p>
                    <a href="#">Read the full article <img className={style.iconArticle} src={iconArticle} /> </a>

                </div>

            </div>
            <div className={style.articleMD}>
                <div className={style.teste1}>

                    <img className={style.loading} src={article} />
                </div>
                <div className={style.articleText}>
                    <h2>
                        Meninas Digitais UTFPR-CP: encouraging girls to conquer<br></br>their space in the field of computing and STEM.
                    </h2>
                    <p>This paper contains a report on the actions promoted by the Meninas Digitais UTFPR-CP extension project, which is a partner project of the Meninas Digitais Program, from SBC.<br></br>
                     The project, created within the Federal Technological University of Paraná, Cornélio Procópio Campus, aims to increase the participation of girls and women in computing<br></br>
                     and STEM, encouraging and helping elementary and high school girls from public schools in the cities of Cornélio Procópio and the surrounding area, in the interior of Paraná, to<br></br>
                     conquer their space in these areas. To this end, the project promotes actions such as programming workshops, mentoring and discussion groups, including in these actions the<br></br>
                     resolution of challenges of the Sustainable Development Goals (SDGs).</p>
                    <a href="#">Read the full article <img src={iconArticle} /> </a>
                </div>

            </div>

        </div>

    );
};
export default Articles;