import style from "./Highlights.module.scss";
import { useEffect, useState, useRef } from "react";

function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ projects: 0, research: 0, technologies: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalNumbers = { projects: 10, research: 2, technologies: 7 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000; 
    const interval = 50;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedNumbers({
        projects: Math.floor(finalNumbers.projects * progress),
        research: Math.floor(finalNumbers.research * progress),
        technologies: Math.floor(finalNumbers.technologies * progress)
      });

      if (currentStep >= steps) {
        setAnimatedNumbers(finalNumbers);
        clearInterval(timer);
      }
    }, interval);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={sectionRef} className={`${style.container} ${isVisible ? style.visible : ''}`}>
      <div className={style.content}>
        <h2 className={style.title}>Explore My Portfolio.</h2>
        <div className={style.highlightGrid}>
          <div className={`${style.highlightCard} ${style.card1}`}>
            <div className={style.number}>{animatedNumbers.projects}</div>
            <div className={style.label}>Live Projects</div>
            <button
              className={style.exploreBtn}
              onClick={() => scrollToSection('projects')}
            >
              <span>View Projects</span>
              <span className={style.arrow}>→</span>
            </button>
          </div>

          <div className={`${style.highlightCard} ${style.card2}`}>
            <div className={style.number}>{animatedNumbers.research}</div>
            <div className={style.label}>Published Research</div>
            <button
              className={style.exploreBtn}
              onClick={() => scrollToSection('articles')}
            >
              <span>Read Papers</span>
              <span className={style.arrow}>→</span>
            </button>
          </div>

          <div className={`${style.highlightCard} ${style.card3}`}>
            <div className={style.number}>{animatedNumbers.technologies}+</div>
            <div className={style.label}>Technologies</div>
            <button
              className={style.exploreBtn}
              onClick={() => scrollToSection('about')}
            >
              <span>See Skills</span>
              <span className={style.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
