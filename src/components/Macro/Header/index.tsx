import style from "./Header.module.scss";
import logo from "../../../assets/terminal.png";

function Header() {
  const scrollToPage = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={style.container}>
      <a href="/" className={style.linkLogo}>
        <div className={style.logo}>
          <img src={logo} alt="terminal icon" />
          <p>&lt;Daniela Alves/&gt;</p>
        </div>
      </a>
      <div className={style.navigation}>
        <a href="#about" onClick={(e) => scrollToPage(e, 'about')}>About me</a>
        <a href="#projects" onClick={(e) => scrollToPage(e, 'projects')}>My Projects</a>
        <a href="#articles" onClick={(e) => scrollToPage(e, 'articles')}>My articles</a>
      </div>
      </div>
  );
};

export default Header;
