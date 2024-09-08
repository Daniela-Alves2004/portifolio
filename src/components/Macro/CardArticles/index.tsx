import { motion } from "framer-motion";
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
        <div
            className={`${style.container} ${reverse ? style.reverse : ''}`}
            
        >
            <motion.div
                className={style.conteudo_img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img className={style.imgArticle} src={imgArticle} alt="Pagina 1 do artigo" />
            </motion.div>
            <motion.div
                className={style.conteudo_text}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
            </motion.div>
        </div>
    );
};
