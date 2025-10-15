import React from "react";
import styles from "./my-project-highlights.module.css";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

/** Lista projektów do podlinkowania (7 szt.) */
const PROJECT_LINKS = [
  { id: "conduit",         url: "/docs/projects/conduit" },
  { id: "truck_sings_api", url: "/docs/projects/truck_sings_api" },
  { id: "juice",           url: "/docs/projects/juice" },
  { id: "baby",            url: "/docs/projects/baby" },
  { id: "wordpress",       url: "/docs/projects/wordpress" },
  { id: "minecraft",       url: "/docs/projects/mindecarft" },
  { id: "vserver-setup",   url: "/docs/projects/vserver-setup" },
] as const;

/** Ikona w „pigułce” — desktop: biała, mobile: niebieska */
const TagIcon: React.FC<{ desktop: string; mobile: string; alt: string }> = ({
  desktop,
  mobile,
  alt,
}) => (
  <span className={`${styles.tag} ${styles.tagSkill}`}>
    <picture>
      <source media="(max-width:768px)" srcSet={useBaseUrl(mobile)} />
      <img
        src={useBaseUrl(desktop)}
        alt={alt}
        className={styles.icon}
        width={55}
        height={30}
      />
    </picture>
  </span>
);

const MyProjectHighlights: React.FC = () => {
  const { t } = useTranslation("projectHighlight");

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.inner}>
        {/* desktop title */}
        <h2 className={`${styles.sectionTitle} ${styles.mobileHidden}`}>
          {t("sectionTitle")}
        </h2>

        {/* mobile title for the first card */}
        <h3 className={`${styles.cardTitle} ${styles.mobileOnly}`}>
          {t("firstCard.title")}
        </h3>


{/* mobile-only: szybkie przyciski do Minecrafta */}
<div className={`${styles.mobileButtons} ${styles.mobileOnly}`}>
  <Link to={useBaseUrl("docs/projects/mindecarft")}>
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




        {/* ====== CONTENT WRAPPER ====== */}
        <div className={styles.content}>
          {/* LEFT — numerowana lista z białymi numerami/tekstem */}
          <nav className={styles.projectList} aria-label="Project list">
            <ol className={styles.projectListOl}>
              {PROJECT_LINKS.map(({ id, url }, i) => (
                <li key={id} className={styles.projectItem}>
                  <Link to={useBaseUrl(url)} className={styles.projectLink}>
                    <span className={styles.projectNum}>{i + 1}.</span>
                    <span className={styles.projectTitle}>
                      {t(`links.${id}`, id)}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <Link
              className={`${styles.moreProjects} ${styles.projectLink}`}
              to={useBaseUrl("docs/projects/overview")}
            >
              {t("seeMore")}
            </Link>
          </nav>

          {/* RIGHT — karty */}
          <div className={styles.cards}>
            {/* 1) Minecraft */}
            <article className={styles.projectCard}>
              <div className={styles.header}>
                <h3 className={`${styles.cardTitle} ${styles.desktopOnly}`}>
                  {t("firstCard.h3")}
                </h3>
                <div className={styles.tags}>
                  <TagIcon desktop="/img/myaml.png" mobile="/img/yaml_blue.png" alt={t("alts.yaml")} />
                  <TagIcon desktop="/img/mshell.png" mobile="/img/mshell_blue.png" alt={t("alts.shell")} />
                  <TagIcon desktop="/img/msec.png" mobile="/img/msec_blue.png" alt={t("alts.security")} />
                  <TagIcon desktop="/img/mcontainer.png" mobile="/img/mcontainer_blue.png" alt={t("alts.container")} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.media}>
                  <img className={styles.thumb} src={useBaseUrl("/img/minecraft.png")} alt={t("alts.minecraft")} width={355} height={240} />
                  <span className={styles.watermark}>{t("watermark")}</span>
                  <img className={styles.logo} src={useBaseUrl("/img/mlogo.png")} alt={t("alts.minecraftLogo")} />
                </div>

                <div className={styles.info}>
                  <p className={styles.desc}>{t("firstCard.desc")}</p>
                  <div className={styles.buttons}>
                    <Link to={useBaseUrl("docs/projects/mindecarft")}>{t("buttons.docs")}</Link>
                    <a href="https://github.com/Gosia2024/dso_blog" target="_blank" rel="noopener noreferrer">
                      {t("buttons.github")}
                    </a>
                  </div>
                  <div className={styles.sepBar} aria-hidden="true" />
                </div>
              </div>
            </article>

            {/* 2) Clone (Container) — mobile only */}
            <article className={`${styles.projectCard} ${styles.mobileOnly}`}>
              <div className={styles.header}>
                <h3 className={styles.cardTitle}>{t("secondCard.title")}</h3>
                <div className={styles.tags}>
                  <TagIcon desktop="/img/myaml.png" mobile="/img/yaml_blue.png" alt={t("alts.yaml")} />
                  <TagIcon desktop="/img/mshell.png" mobile="/img/mshell_blue.png" alt={t("alts.shell")} />
                  <TagIcon desktop="/img/msec.png" mobile="/img/msec_blue.png" alt={t("alts.security")} />
                  <TagIcon desktop="/img/mcontainer.png" mobile="/img/mcontainer_blue.png" alt={t("alts.container")} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.media}>
                  <img className={styles.thumb} src={useBaseUrl("/img/mobile_container.png")} alt="Clone (Container)" width={355} height={240} />
                </div>

                <div className={styles.info}>
                  <p className={styles.desc}>{t("secondCard.desc")}</p>
                  <div className={styles.buttons}>
                    <Link to={useBaseUrl("docs/projects/vserver-setup")}>{t("buttons.docs")}</Link>
                    <a href="https://github.com/Gosia2024/dso_blog" target="_blank" rel="noopener noreferrer">
                      {t("buttons.github")}
                    </a>
                  </div>
                  <div className={styles.sepBar} aria-hidden="true" />
                </div>
              </div>
            </article>

            {/* 3) WordPress hosting — mobile only */}
            <article className={`${styles.projectCard} ${styles.mobileOnly}`}>
              <div className={styles.header}>
                <h3 className={styles.cardTitle}>{t("thirdCard.title")}</h3>
                <div className={styles.tags}>
                  <TagIcon desktop="/img/myaml.png" mobile="/img/yaml_blue.png" alt={t("alts.yaml")} />
                  <TagIcon desktop="/img/mshell.png" mobile="/img/mshell_blue.png" alt={t("alts.shell")} />
                  <TagIcon desktop="/img/msec.png" mobile="/img/msec_blue.png" alt={t("alts.security")} />
                  <TagIcon desktop="/img/mcontainer.png" mobile="/img/mcontainer_blue.png" alt={t("alts.container")} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.media}>
                  <img className={styles.thumb} src={useBaseUrl("/img/wordpress.png")} alt={t("alts.wp")} width={355} height={240} />
                </div>

                <div className={styles.info}>
                  <p className={styles.desc}>{t("thirdCard.desc")}</p>
                  <div className={styles.buttons}>
                    <Link to={useBaseUrl("docs/projects/wordpress")}>{t("buttons.docs")}</Link>
                    <a href="https://github.com/Gosia2024/dso_blog" target="_blank" rel="noopener noreferrer">
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
