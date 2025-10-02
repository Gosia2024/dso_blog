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
      <div className={styles.inner}>
        {/* h2 ukryty na mobile */}
        <h2 className={`${styles.sectionTitle} ${styles.mobileHidden}`}>
          My project highlights
        </h2>

        {/* Tytuł tylko na mobile */}
        <h3 className={`${styles.cardTitle} ${styles.mobileOnly}`}>1.Minecraft</h3>

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

          {/* RIGHT – CARD (Minecraft) */}
          <article className={styles.projectCard}>
            <div className={styles.header}>
              {/* ten tytuł pokaż tylko na desktopie */}
              <h3 className={`${styles.cardTitle} ${styles.desktopOnly}`}>
                Project Minecraft
              </h3>
              <div className={styles.tags}>
                <span className={styles.tag}>
                  <img src={useBaseUrl("/img/myaml.png")} alt="YAML" className={styles.icon}/>
                </span>
                <span className={styles.tag}>
                  <img src={useBaseUrl("/img/mshell.png")} alt="Shell scripting" className={styles.icon}/>
                </span>
                <span className={styles.tag}>
                  <img src={useBaseUrl("/img/msec.png")} alt="IT Security" className={styles.icon}/>
                </span>
                <span className={styles.tag}>
                  <img src={useBaseUrl("/img/mcontainer.png")} alt="Container" className={styles.icon}/>
                </span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.media}>
                <img
                  className={styles.thumb}
                  src={useBaseUrl("/img/minecraft.png")}
                  alt="Project Minecraft"
                  width={355}
                  height={240}
                />
                <span className={styles.watermark}>MINECRAFT</span>
                <img
                  className={styles.logo}
                  src={useBaseUrl("/img/mlogo.png")}
                  alt="Minecraft logo"
                />
              </div>

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

        {/* ===== 2) DRUGA KARTA — Clone (Container) — tylko mobile ===== */}
<article className={`${styles.projectCard} ${styles.mobileOnly} ${styles.cardBars}`}>
  <div className={styles.header}>
    <h3 className={styles.cardTitle}>2. Clone (Container)</h3>
    <div className={styles.tags}>
      {/* ...tagi... */}
    </div>
  </div>

  <div className={styles.row}>
    <div className={styles.media}>
      <img
        className={styles.thumb}
        src={useBaseUrl("/img/mobile_container.png")}
        alt="Clone (Container)"
        width={355}
        height={240}
      />
    </div>

    <div className={styles.info}>
      <p className={styles.desc}>...</p>
      <div className={styles.buttons}>
        <Link to={useBaseUrl("docs/projects")}>Documentation</Link>
        <a href="https://github.com/Gosia2024/dso_blog" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
</article>


        {/* ===== 3) TRZECIA KARTA — WordPress hosten — tylko mobile ===== */}
        <article className={`${styles.projectCard} ${styles.mobileOnly}`}>
          <div className={styles.header}>
            <h3 className={styles.cardTitle}>3.WordPress hosten</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>
                <img src={useBaseUrl("/img/myaml.png")} alt="YAML" className={styles.icon}/>
              </span>
              <span className={styles.tag}>
                <img src={useBaseUrl("/img/mshell.png")} alt="Shell scripting" className={styles.icon}/>
              </span>
              <span className={styles.tag}>
                <img src={useBaseUrl("/img/msec.png")} alt="IT Security" className={styles.icon}/>
              </span>
              <span className={styles.tag}>
                <img src={useBaseUrl("/img/mcontainer.png")} alt="Container" className={styles.icon}/>
              </span>
            </div>
          </div>

         <div className={styles.row}>
  <div className={styles.mediaBars}>
    <div className={styles.media}>
      <img
        className={styles.thumb}
        src={useBaseUrl("/img/wordpress.png")}
        alt="WordPress hosten"
        width={355}
        height={240}
      />
    </div>
  </div>

  <div className={styles.info}>
    <p className={styles.desc}>
      Write some information about the project. For example: Why are you proud of it?
      What were you able to implement here? What different algorithms, server
      architecture did you use? Why did you find this project so interesting?
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
    </section>
  );
};

export default MyProjectHighlights;
