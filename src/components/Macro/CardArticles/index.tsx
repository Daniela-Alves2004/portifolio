import style from "./CardArticles.module.scss";
import iconRead from "../../../assets/Articles/article.png";
import Button from "../../Micro/Button";

interface CardArticlesProps {
    id: number;
    titleArticle: string;
    abstract: string;
    imgArticle: string;
    labelArticle: string;
    reverse?: boolean;
}

export const CardArticles = ({ titleArticle, abstract, imgArticle, labelArticle, reverse }: CardArticlesProps) => {
    return (
        <div className={`${style.container} ${reverse ? style.reverse : ''}`}>
            <div className={style.conteudo_img}>
                <img className={style.imgArticle} src={imgArticle} alt="Pagina 1 do artigo" />
            </div>
            <div
                className={style.conteudo_text}

            >
                <h2>{titleArticle}</h2>
                <p>{abstract}</p>
                <Button
                    btLink="/not-public"
                    className="aArticles"
                    btclassName="btArticles"
                    image={iconRead}
                    label={labelArticle}
                    onClick={() => console.log('button clicked')}
                />
            </div>
        </div>
    );
};
