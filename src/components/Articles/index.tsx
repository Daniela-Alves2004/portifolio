import { CardArticles} from "../CardArticles";
import dataArticle from "./dataArticle";

const Articles = () => {
    return (
        dataArticle.map(dataArticle => (
            <CardArticles
                titleArticle={dataArticle.titleArticle}
                abstract={dataArticle.abstract}
                imgArticle={dataArticle.imgArticle}
                labelArticle={dataArticle.labelArticle}
            />
        ))
    );
};
export default Articles;