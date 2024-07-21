import style from "./Header.module.scss";
import logo from "../../assets/terminal.png";
import sun from "../../assets/sun.png";
import mood from "../../assets/mood.png";
import brasil from "../../assets/brasil.png";


function Header  () {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <img src={logo} alt="terminal icon" />
            <p>&lt;Daniela Alves/&gt;</p>
        </div>
        <div className={style.navigation}>
            <a href="#">About me</a>
            <a href="#">My Projects</a>
            <a href="#">My articles</a>
        </div>
        <div className={style.btMode}>
            <button className={style.btDark}> <img src={mood} alt="mood icon" /> <img src={sun} alt="sun icon" /></button>
            <button className={style.btLanguage}> translate to pt-bt <img src={brasil} alt="Brazil's flag" /></button>
        </div>
    </div>
    
  );
};
export default Header;