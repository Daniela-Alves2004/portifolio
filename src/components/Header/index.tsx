import style from "./Header.module.scss";
import logo from "../../assets/terminal.png";

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
        
        </div>
    </div>
    
  );
};
export default Header;