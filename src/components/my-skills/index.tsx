import React from "react";
import styles from "./my-skills.module.css";

type Skill = {
  name?: string;
  icon: string;
  iconW: number;
  iconH: number;
};

const skills: Skill[] = [
  {  icon: "./img/html.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/css.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/static.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/python.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/shell.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/yaml.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/docker.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/ci.png",  iconW: 22.19, iconH: 49.9 },
  {  icon: "./img/sec.png",  iconW: 22.19, iconH: 49.9 },
];

export default function MySkills() {
  return (
    <section className={styles.skillsSection} id="skills" aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <header className={styles.headline}>
          <h2 id="skills-heading">My skills</h2>
        </header>

        <div className={styles.content}>
          {skills.map((s) => (
            <article key={s.name} className={styles.skillCard}>
              <div className={styles.skillStack}>
                <img className={styles.skillIcon} src={s.icon} alt="" aria-hidden="true" />
                <span className={styles.skillName}>{s.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
