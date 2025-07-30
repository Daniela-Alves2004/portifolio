import style from "./Apresentation.module.scss";
import { useLanguage } from "../../../contexts/LanguageContext";
import LanguageToggle from "../../Micro/LanguageToggle";

function Apresentation() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={style.containerWrapper}>
    <LanguageToggle />
      <div className={style.container}>
        
        <div className={style.containerText}>
          <h1>
            {t('presentation.greeting')} <span className={style.name}>Daniela Alves</span>
          </h1>

          <p className={style.mainRole}>
            {t('presentation.title')}
          </p>
          <div className={style.actionButtons}>
            <button
              className={style.primaryBtn}
              onClick={() => scrollToSection('projects')}
            >
              {t('presentation.viewWork')}
            </button>
            <button
              className={style.secondaryBtn}
              onClick={() => scrollToSection('about')}
            >
              {t('presentation.aboutMe')}
            </button>
          </div>

          <div className={style.specialties}>
            <div className={style.specialty}>
              <span>{t('presentation.aiDev')}</span>
            </div>
            <div className={style.specialty}>
              <span>{t('presentation.webDev')}</span>
            </div>
            <div className={style.specialty}>
              <span>{t('presentation.dbManagement')}</span>
            </div>
            <div className={style.specialty}>
              <span>{t('presentation.research')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apresentation;
