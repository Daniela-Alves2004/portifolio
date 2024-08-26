import style from "./CardArticles.module.scss";
import iconRead from "../../assets/article.png";
import Button from "../Button";

interface CardArticlesProps {
    titleArticle: string;
    abstract: string;
    imgArticle: string;
    labelArticle: string;
}

export const CardArticles = ({ titleArticle, abstract, imgArticle, labelArticle }: CardArticlesProps) => {
    return (
        <div className={style.container}>
            <div className={style.container__conteudo}>
                <div className={style.conteudo_img}>
                    <img className={style.imgArticle} src={imgArticle} />
                </div>
                <div className={style.conteudo_text}>
                    <h2>{titleArticle}</h2>
                    <p>{abstract}</p>
                    <Button
                        btLink="#"
                        className="aArticles"
                        btclassName="btArticles"
                        image={iconRead}
                        label={labelArticle}
                        onClick={() => console.log('button clicked')} />
                </div>
            </div>
        </div>

    );
};
