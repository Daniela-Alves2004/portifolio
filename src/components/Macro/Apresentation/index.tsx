import style from "./Apresentation.module.scss";

function Apresentation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.containerText}>
          <h1>
            Hi, I&apos;m <span className={style.name}>Daniela Alves</span>
          </h1>

          <p className={style.mainRole}>
            Software Engineer | AI Intern
          </p>
          <div className={style.actionButtons}>
            <button
              className={style.primaryBtn}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className={style.secondaryBtn}
              onClick={() => scrollToSection('about')}
            >
              About Me
            </button>
          </div>

          <div className={style.specialties}>
            <div className={style.specialty}>
              <span>AI Development</span>
            </div>
            <div className={style.specialty}>
              <span>Web Development</span>
            </div>
            <div className={style.specialty}>
              <span>Database Management</span>
            </div>
            <div className={style.specialty}>
              <span>Research & Writing</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apresentation;
