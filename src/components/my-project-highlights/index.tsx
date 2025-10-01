import React from "react";
import styles from "./my-project-highlights.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

const projects = [
  "1. Baby Tools",
  "2. Truck Signs API",
  "3. Juice Shop Meister",
  "4. Minecraft",
  "5. WordPress hosten",
];

const MyProjectHighlights: React.FC = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      {/* Wewnętrzny wrapper utrzymuje szerokość 1440 i padding 110 */}
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>My project highlights</h2>

        <div className={styles.content}>
          {/* LEFT – LIST */}
          <nav className={styles.projectList} aria-label="Project list">
            <ul>
              {projects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className={styles.moreProjects}>↳ see more projects</div>
          </nav>

          {/* RIGHT – CARD (pixel-perfect do Figmy) */}
          <article className={styles.projectCard}>
            {/* Header (Frame 682) */}
            <div className={styles.header}>
              <h3 className={styles.cardTitle}>Project Minecraft</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>YAML</span>
                <span className={styles.tag}>Shell scripting</span>
                <span className={styles.tag}>IT Security</span>
                <span className={styles.tag}>Container</span>
              </div>
            </div>

            {/* Content row (Frame 685) */}
            <div className={styles.row}>
              <img
                className={styles.thumb}
                src={useBaseUrl("./img/minecraft.png")}
                alt="Project Minecraft"
                width={355}
                height={240}
              />

              <div className={styles.info}>
                <p className={styles.desc}>
                  Write some information about the project. For example: Why are
                  you proud of it? What were you able to implement here? What
                  different algorithms, server architecture did you use? Why did
                  you find this project so interesting?
                </p>

                <div className={styles.buttons}>
                  <Link to={useBaseUrl("docs/projects")}>Documentation</Link>
                  <a
                    href="https://github.com/Gosia2024/dso_blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MyProjectHighlights;
