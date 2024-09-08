import iconNotPublic from "../../assets/NotPublic/NotPublic.png";
import style from "./NotPublicPage.module.scss";

const NotPublicPage = () => {
  return (
    <div className={style.containerNotFound}>
      <h1 className={style.titleNotFound}>The article has not been published yet!</h1>
      <img className={style.imageNotFound} src={iconNotPublic} alt="NotPublic" />
    </div>
  );
};
export default NotPublicPage;