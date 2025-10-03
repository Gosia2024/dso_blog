import React, { useEffect, useState } from "react";
import styles from "./my-skills.module.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Hook w tym pliku – zero importów zewnętrznych */
function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

type Skill = {
  name: string;
  icon: string;
  iconW: number;
  iconH: number;
  description: string[];
};

/* === PEŁNY ZESTAW (desktop bez zmian) === */
const skillsAll: Skill[] = [
  { name: "HTML", icon: "./img/html.png", iconW: 22.19, iconH: 49.9, description: [
    "User-friendly navigation menus","Responsive web design","Contact forms and login pages","Transitions, animations and hover effect",
  ]},
  { name: "CSS", icon: "./img/css.png", iconW: 22.19, iconH: 49.9, description: [
    "User-friendly navigation menus","Responsive web design","Contact forms and login pages","Transitions, animations and hover effect",
  ]},
  { name: "Static site", icon: "./img/static.png", iconW: 22.19, iconH: 49.9, description: [
    "search functionality","static website and customization","tags, categories, and RSS feeds","translation",
  ]},
  { name: "Python", icon: "./img/python.png", iconW: 22.19, iconH: 49.9, description: [
    "Build APIs","Spam filtering, recommendation systems","Automate software testing","Using libraries like Tkinter, PyQt, or Kivy",
  ]},
  { name: "Shell scripting", icon: "./img/shell.png", iconW: 22.19, iconH: 49.9, description: [
    "Automated builds and tests","Pre-built actions for common tasks","Push, pull request, or schedule","Automated deployments",
  ]},
  { name: "YAML", icon: "./img/yaml.png", iconW: 22.19, iconH: 49.9, description: [
    "Kubernetes deployment","Store settings like database connections","Environment-specific variables","Complex data structures with lists and maps",
  ]},
  { name: "Container", icon: "./img/docker.png", iconW: 22.19, iconH: 49.9, description: [
    "CI/CD pipelines","Automate building, testing, deploying applications","Build microservices-based applications",
  ]},
  { name: "CI/CD", icon: "./img/docker.png", iconW: 22.19, iconH: 49.9, description: [
    "Automated builds and tests","Pre-built actions for common tasks","Push, pull request, or schedule","Automated deployments",
  ]},
  { name: "IT Security", icon: "./img/sec.png", iconW: 22.19, iconH: 49.9, description: [
    "Simulate attacks and identify vulnerabilities","Set up multi-factor authentication","Login security","Implement authentication and authorization",
  ]},
];
/* === MOBILE: 3 karty w sliderze (po 3 sekcje każda) === */
const groupsMobile: Skill[][] = [
  // Slajd 1
  skillsAll.filter((s) => ["HTML", "CSS", "Static site"].includes(s.name)),
  // Slajd 2
  skillsAll.filter((s) => ["Python", "Shell scripting", "YAML"].includes(s.name)),
  // Slajd 3  ⬇️ (NOWA KARTA)
  skillsAll.filter((s) => ["Container", "CI/CD", "IT Security"].includes(s.name)),
];


/* Slider tylko na mobile; bez overflow */
const mobileSettings: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  mobileFirst: true,
  swipeToSlide: true,
  touchThreshold: 8,
  speed: 350,
  slidesToShow: 1,
  adaptiveHeight: true,
};

export default function MySkills() {
  const isMobile = useIsMobile(600);

  const list = (arr: Skill[]) =>
    arr.map((s) => (
      <article key={s.icon} className={styles.skillCard} tabIndex={0}>
        <div className={styles.skillStack}>
          <img className={styles.skillIcon} src={s.icon} alt={s.name} width={s.iconW} height={s.iconH} />
          <span className={styles.skillName}>{s.name}</span>
        </div>
        {/* desktop: overlay po Twojemu (hover); mobile: CSS pokazuje listę stale */}
        <div className={styles.skillOverlay}>
          <ul>{s.description.map((line, i) => <li key={i}>{line}</li>)}</ul>
        </div>
      </article>
    ));

  return (
    <section className={styles.skillsSection} id="skills" aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <header className={styles.headline}>
          <h2 id="skills-heading">My skills</h2>
        </header>

        <div className={styles.content}>
          {isMobile ? (
  <Slider {...mobileSettings}>
    {groupsMobile.map((group, gi) => (
      <div key={gi} className={styles.mobileCard}>
        {group.map((s) => (
          <div key={s.name} className={styles.mobileItem}>
            <div className={styles.mobileIconCol}>
              <img className={styles.mobileIcon} src={s.icon} alt={s.name} width={s.iconW} height={s.iconH} />
              <span className={styles.mobileName}>{s.name}</span>
            </div>
            <ul className={styles.mobileList}>
              {s.description.map((line, i) => (<li key={i}>{line}</li>))}
            </ul>
          </div>
        ))}
      </div>
    ))}
  </Slider>
) : (
  list(skillsAll)   // desktop bez zmian
)}

        </div>
      </div>
    </section>
  );
}
