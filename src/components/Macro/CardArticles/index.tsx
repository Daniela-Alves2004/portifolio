import style from "./CardArticles.module.scss";
import iconRead from "../../../assets/Articles/article.png";
import Button from "../../Micro/Button";
import { useLanguage } from "../../../contexts/LanguageContext";

interface CardArticlesProps {
    id: number;
    titleArticle: string;
    abstract: string;
    imgArticle: string;
    labelArticle: string;
    btLink: string;
    reverse?: boolean;
}

export const CardArticles = ({ titleArticle, abstract, imgArticle, labelArticle, btLink, reverse }: CardArticlesProps) => {
    const { t } = useLanguage();
    
    return (
        <div className={`${style.container} ${reverse ? style.reverse : ''}`}>
            <div className={style.conteudo_img}>
                <img className={style.imgArticle} src={imgArticle} alt="Pagina 1 do artigo" />
            </div>
            <div
                className={style.conteudo_text}

            >
                <h2>{t(titleArticle)}</h2>
                <p>{t(abstract)}</p>
                <Button
                    btLink={btLink}
                    className="aArticles"
                    btclassName="btArticles"
                    image={iconRead}
                    label={t(labelArticle)}
                    onClick={() => console.log('button clicked')}
                />
            </div>
        </div>
    );
};
