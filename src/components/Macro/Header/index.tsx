import style from "./Header.module.scss";
import logo from "../../../assets/terminal.png";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${style.container} ${isScrolled ? style.scrolled : ''}`}>
      <div className={style.headerContent}>
        <a href="/" className={style.linkLogo}>
          <div className={style.logo}>
            <div className={style.logoIcon}>
              <img src={logo} alt="terminal icon" />
            </div>
            <div className={style.logoText}>
              <span className={style.name}>Daniela Alves</span>
              <span className={style.title}>Software Engineer</span>
            </div>
          </div>
        </a>

        <nav className={`${style.navigation} ${isMobileMenuOpen ? style.mobileMenuOpen : ''}`}>
          <a href="#about" onClick={(e) => scrollToPage(e, 'about')} className={style.navLink}>
            <span className={style.navIcon}>👨‍💻</span>
            <span>About</span>
          </a>
          <a href="#projects" onClick={(e) => scrollToPage(e, 'projects')} className={style.navLink}>
            <span className={style.navIcon}>🚀</span>
            <span>Projects</span>
          </a>
          <a href="#articles" onClick={(e) => scrollToPage(e, 'articles')} className={style.navLink}>
            <span className={style.navIcon}>📚</span>
            <span>Articles</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/daniela-dos-santos-alves/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${style.navLink} ${style.contactBtn}`}
          >
            <span className={style.navIcon}>💼</span>
            <span>Contact</span>
          </a>
        </nav>

        <button 
          className={style.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${style.hamburger} ${isMobileMenuOpen ? style.hamburgerOpen : ''}`}></span>
          <span className={`${style.hamburger} ${isMobileMenuOpen ? style.hamburgerOpen : ''}`}></span>
          <span className={`${style.hamburger} ${isMobileMenuOpen ? style.hamburgerOpen : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
