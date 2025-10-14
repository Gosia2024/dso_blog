import React from "react";
import styles from "./my-project-highlights.module.css";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

/**
 * MyProjectHighlights
 * - Renders a two-column section:
 *   • Left: a translated list of project names.
 *   • Right: a vertical stack of project “cards”.
 * - Uses i18next namespace "projectHighlight".
 * - Mobile/desktop visibility is controlled purely via CSS utility classes.
 */
const MyProjectHighlights: React.FC = () => {
  const { t } = useTranslation("projectHighlight");

  // List loaded from i18n JSON (array of strings).
  const projects = t("list", { returnObjects: true }) as string[];

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.inner}>
        {/* Desktop-only section title */}
        <h2 className={`${styles.sectionTitle} ${styles.mobileHidden}`}>
          {t("sectionTitle")}
        </h2>

        {/* Mobile-only title for the first card (shown via CSS) */}
        <h3 className={`${styles.cardTitle} ${styles.mobileOnly}`}>
          {t("firstCard.title")}
        </h3>

        <div className={styles.content}>
          {/* LEFT — project list (navigation-like semantics) */}
          <nav className={styles.projectList} aria-label="Project list">
            <ul>
              {projects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className={styles.moreProjects}>{t("seeMore")}</div>
          </nav>

          {/* RIGHT — all cards wrapped in a single column */}
          <div className={styles.cards}>
            {/* 1) Minecraft — always visible */}
            <article className={styles.projectCard}>
              <div className={styles.header}>
                {/* Desktop title (mobile has its own h3 above) */}
                <h3 className={`${styles.cardTitle} ${styles.desktopOnly}`}>
                  {t("firstCard.h3")}
                </h3>

                {/* Tech tags (icons only) */}
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
                {/* Preview media + watermark + overlay logo */}
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

                {/* Description + CTAs */}
                <div className={styles.info}>
                  <p className={styles.desc}>{t("firstCard.desc")}</p>
                 

                  <div className={styles.buttons}>
                    <Link to={useBaseUrl("docs/projects")}>
                      {t("buttons.docs")}
                    </Link>
                    <a
                      href="https://github.com/Gosia2024/dso_blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("buttons.github")}
                    </a>
                  </div>

                  {/* Separator bar (visible on mobile via CSS) */}
                  <div className={styles.sepBar} aria-hidden="true" />
                </div>
              </div>
            </article>

            {/* 2) Clone (Container) — mobile only (visibility via CSS) */}
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
                  {/* <p className={styles.desc}>…</p> */}
                  <p className={styles.desc}>{t("secondCard.desc")}</p>
                  <div className={styles.buttons}>
                    <Link to={useBaseUrl("docs/projects")}>
                      {t("buttons.docs")}
                    </Link>
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

            {/* 3) WordPress hosting — mobile only (visibility via CSS) */}
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
                  {/* <p className={styles.desc}>{t("firstCard.desc")}</p> */}
                 <p className={styles.desc}>{t("thirdCard.desc")}</p>
                  <div className={styles.buttons}>
                    <Link to={useBaseUrl("docs/projects")}>
                      {t("buttons.docs")}
                    </Link>
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
          {/* /.cards */}
        </div>
        {/* /.content */}
      </div>
    </section>
  );
};

export default MyProjectHighlights;
