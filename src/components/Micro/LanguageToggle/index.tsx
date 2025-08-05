import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './LanguageToggle.module.scss';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <button 
      className={styles.languageToggle}
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      <span className={styles.flag}>
        {language === 'en' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className={styles.text}>
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
