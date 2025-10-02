import React from "react";
import styles from "./my-skills.module.css";
import Slider, { Settings } from "react-slick";
/* --- TYPY --- */
type SkillDetails = {
  name?: string;
  icon: string;
  description: string[];
};

type SkillIcon = {
  icon: string;
  iconW: number;
  iconH: number;
};

type Skill = SkillDetails & Partial<SkillIcon>; // po mergu będziemy mieć i jedno, i drugie

/* --- TWOJE DWIE TABLICE --- */
const skillDetails: SkillDetails[] = [
  {
   
    icon: "./img/html.png",
    description: [
      "Build APIs",
      "Spam filtering, recommendation systems",
      "Automate software testing",
      "Using libraries like Tkinter, PyQt, or Kivy",
    ],
  },
  {
    icon: "./img/css.png",
    description: [
      "User-friendly navigation menus",
      "Responsive web design",
      "Contact forms and login pages",
      "Transitions, animations and hover effect",
    ],
  },
  {
    icon: "./img/static.png",
    description: [
      "Search functionality",
      "Static website and customization",
      "Tags, categories, and RSS feeds",
      "Translation",
    ],
  },
  {
    icon: "./img/python.png",
    description: [
      "Adding new users and setting their permissions",
      "Performing calculations or running analysis on data",
      "Conditional statements, loops, functions",
    ],
  },
  {
    icon: "./img/shell.png",
    description: [
      "Automated builds and tests",
      "Pre-built actions for common tasks",
      "Push, pull request, or schedule",
      "Automated deployments",
    ],
  },
  {
    
    icon: "./img/yaml.png",
    description: [
      "Kubernetes deployment",
      "Store settings like database connections",
      "Environment-specific variables",
      "Complex data structures with lists and maps",
    ],
  },
  {
   
    icon: "./img/docker.png",
    description: [
      "CI/CD pipelines",
      "Automate building, testing, deploying applications",
      "Build microservices-based applications",
    ],
  },
  {
   
    icon: "./img/github-actions.png",
    description: [
      "Automated builds and tests",
      "Pre-built actions for common tasks",
      "Push, pull request, or schedule",
      "Automated deployments",
    ],
  },
  {
    icon: "./img/security.png",
    description: [
      "Simulate attacks and identify vulnerabilities",
      "Set up multi-factor authentication",
      "Login security",
      "Implement authentication and authorization",
    ],
  },
];

const skillIcons: SkillIcon[] = [
  { icon: "./img/html.png",  iconW: 22.19, iconH: 49.9 },
  { icon: "./img/css.png",   iconW: 22.19, iconH: 49.9 },
  { icon: "./img/static.png",iconW: 22.19, iconH: 49.9 },
  { icon: "./img/python.png",iconW: 22.19, iconH: 49.9 },
  { icon: "./img/shell.png", iconW: 22.19, iconH: 49.9 },
  { icon: "./img/yaml.png",  iconW: 22.19, iconH: 49.9 },
  { icon: "./img/docker.png",iconW: 22.19, iconH: 49.9 },
  { icon: "./img/ci.png", iconW: 22.19, iconH: 49.9 },
  { icon: "./img/sec.png", iconW: 22.19, iconH: 49.9 },
];

/* --- MERGE PO POLU `icon` (ścieżka pliku) --- */
const detailsByIcon = new Map(skillDetails.map(d => [d.icon, d]));
const skills: Skill[] = skillIcons.map(ic => {
  const d = detailsByIcon.get(ic.icon);
  // fallback: jeśli ktoś nie dodał rekordów do obu tablic
  const fallbackName = ic.icon.split("/").pop()?.split(".")[0].replace(/[-_]/g, " ").toUpperCase() ?? "SKILL";
  return {
 name: d?.name,           // ← żadnego fallbacku
    icon: ic.icon,
    description: d?.description ?? [],
    iconW: ic.iconW,
    iconH: ic.iconH,
  };
});

// tylko-mobile: karuzela ≤600px, >600px wyłączona (zwykły layout)
const sliderSettings: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  mobileFirst: true,
  speed: 400,
  responsive: [
    { breakpoint: 99999, settings: "unslick" },      // >600px: wyłącz slick
    { breakpoint: 600, settings: { slidesToShow: 1 } } // ≤600px: 1 karta
  ],
};




/* --- RENDER: zachowujemy Twój układ i wymiary karty --- */
export default function MySkills() {

  return (
    <section className={styles.skillsSection} id="skills" aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <header className={styles.headline}>
          <h2 id="skills-heading">My skills</h2>
        </header>

        

        <div className={styles.content}>
        
          {skills.map((s) => (
            <article key={s.icon} className={styles.skillCard} tabIndex={0}>
              <div className={styles.skillStack}>
                <img
                  className={styles.skillIcon}
                  src={s.icon}
                  alt={s.name}
                  width={s.iconW}
                  height={s.iconH}
                />
                <span className={styles.skillName}>{s.name}</span>
              </div>

              {/* (opcjonalnie) overlay — jeśli chcesz podgląd opisów na hover/focus */}
              {
              <div className={styles.skillOverlay} aria-hidden="true">
                <h3>How I used this skill</h3>
                <ul>{s.description.map((line, i) => <li key={i}>{line}</li>)}</ul>
              </div>
}
            </article>
          ))}
         

        </div>


      </div>
    </section>
  );
}