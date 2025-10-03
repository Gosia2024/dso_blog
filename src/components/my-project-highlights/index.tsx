// src/components/my-project-highlights/index.tsx  (lub Twój aktualny path)
import React from "react";
import styles from "./my-project-highlights.module.css";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

const MyProjectHighlights: React.FC = () => {
  const { t } = useTranslation("projectHighlight");

  // lista z JSON (tablica stringów)
  const projects = t("list", { returnObjects: true }) as string[];

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.inner}>
        {/* Desktop title */}
        <h2 className={`${styles.sectionTitle} ${styles.mobileHidden}`}>
          {t("sectionTitle")}
        </h2>

        {/* Mobile-only title for first card */}
        <h3 className={`${styles.cardTitle} ${styles.mobileOnly}`}>
          {t("firstCard.title")}
        </h3>

        <div className={styles.content}>
          {/* LEFT – LIST */}
          <nav className={styles.projectList} aria-label="Project list">
            <ul>
              {projects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className={styles.moreProjects}>{t("seeMore")}</div>
          </nav>

          {/* RIGHT – CARD (Minecraft) */}
          <article className={styles.projectCard}>
            <div className={styles.header}>
              <h3 className={`${styles.cardTitle} ${styles.desktopOnly}`}>
                {t("firstCard.h3")}
              </h3>

              <div className={styles.tags}>
                <span className={styles.tag}>
                  <img
                    src={useBaseUrl("/img/myaml.png")}
                    alt={t("alts.yaml")}
                    className={styles.icon}
                  />
                </span>
                <span className={styles.tag}>
                  <img
                    src={useBaseUrl("/img/mshell.png")}
                    alt={t("alts.shell")}
                    className={styles.icon}
                  />
                </span>
                <span className={styles.tag}>
                  <img
                    src={useBaseUrl("/img/msec.png")}
                    alt={t("alts.security")}
                    className={styles.icon}
                  />
                </span>
                <span className={styles.tag}>
                  <img
                    src={useBaseUrl("/img/mcontainer.png")}
                    alt={t("alts.container")}
                    className={styles.icon}
                  />
                </span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.media}>
                <img
                  className={styles.thumb}
                  src={useBaseUrl("/img/minecraft.png")}
                  alt={t("alts.minecraft")}
                  width={355}
                  height={240}
                />
                <span className={styles.watermark}>{t("watermark")}</span>
                <img
                  className={styles.logo}
                  src={useBaseUrl("/img/mlogo.png")}
                  alt={t("alts.minecraftLogo")}
                />
              </div>

              <div className={styles.info}>
                <p className={styles.desc}>{t("firstCard.desc")}</p>

                <div className={styles.buttons}>
                  <Link to={useBaseUrl("docs/projects")}>{t("buttons.docs")}</Link>
                  <a
                    href="https://github.com/Gosia2024/dso_blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("buttons.github")}
                  </a>
                </div>

                {/* Pasek w środku karty, pod przyciskami (pokazywany tylko w mobile przez CSS) */}
                <div className={styles.sepBar} aria-hidden="true" />
              </div>
            </div>
          </article>
        </div>
        {/* /.content */}

        {/* 2) Clone (Container) — only mobile, z paskiem */}
        <article className={`${styles.projectCard} ${styles.mobileOnly}`}>
          <div className={styles.header}>
            <h3 className={styles.cardTitle}>{t("secondCard.title")}</h3>
            <div className={styles.tags} />
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
                <Link to={useBaseUrl("docs/projects")}>{t("buttons.docs")}</Link>
                <a
                  href="https://github.com/Gosia2024/dso_blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("buttons.github")}
                </a>
              </div>

              <div className={styles.sepBar} aria-hidden="true" />
            </div>
          </div>
        </article>

        {/* 3) WordPress hosten — only mobile (bez paska) */}
        <article className={`${styles.projectCard} ${styles.mobileOnly}`}>
          <div className={styles.header}>
            <h3 className={styles.cardTitle}>{t("thirdCard.title")}</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>
                <img
                  src={useBaseUrl("/img/myaml.png")}
                  alt={t("alts.yaml")}
                  className={styles.icon}
                />
              </span>
              <span className={styles.tag}>
                <img
                  src={useBaseUrl("/img/mshell.png")}
                  alt={t("alts.shell")}
                  className={styles.icon}
                />
              </span>
              <span className={styles.tag}>
                <img
                  src={useBaseUrl("/img/msec.png")}
                  alt={t("alts.security")}
                  className={styles.icon}
                />
              </span>
              <span className={styles.tag}>
                <img
                  src={useBaseUrl("/img/mcontainer.png")}
                  alt={t("alts.container")}
                  className={styles.icon}
                />
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.media}>
              <img
                className={styles.thumb}
                src={useBaseUrl("/img/wordpress.png")}
                alt={t("alts.wp")}
                width={355}
                height={240}
              />
            </div>

            <div className={styles.info}>
              <p className={styles.desc}>
                {t("firstCard.desc")}
              </p>

              <div className={styles.buttons}>
                <Link to={useBaseUrl("docs/projects")}>{t("buttons.docs")}</Link>
                <a
                  href="https://github.com/Gosia2024/dso_blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("buttons.github")}
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
