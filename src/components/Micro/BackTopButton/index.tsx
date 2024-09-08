import React, { useState, useEffect } from "react";
import styles from "./BackTopButton.module.scss"; 

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.backToTop}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.backToTopButton}>
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
