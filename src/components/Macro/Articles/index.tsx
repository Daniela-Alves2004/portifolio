import { CardArticles } from "../CardArticles";
import articles from "./dataArticle"; 
import styles from "./Articles.module.scss";

const Articles = () => {
    return (
        <div id="articles">
            <h1 className={styles.titleArticle} >Papers.</h1>
            {articles.articleSbqs.map(dataArticle => (
                <CardArticles
                    key={dataArticle.id} 
                    id={dataArticle.id}
                    titleArticle={dataArticle.titleArticle}
                    abstract={dataArticle.abstract}
                    imgArticle={dataArticle.imgArticle}
                    labelArticle={dataArticle.labelArticle}
                    btLink={dataArticle.btLink}
                    
                />
            ))}
            {articles.articleMD.map(dataArticle => (
                <CardArticles
                    key={dataArticle.id} 
                    id={dataArticle.id}
                    titleArticle={dataArticle.titleArticle}
                    abstract={dataArticle.abstract}
                    imgArticle={dataArticle.imgArticle}
                    labelArticle={dataArticle.labelArticle}
                    btLink={dataArticle.btLink}
                    reverse={true}
                />
            ))}
        </div>
    );
};

export default Articles;
