import React, { useState } from "react";
import styles from "./my-project-highlights.module.css";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

/** Linki do stron dokumentacji (SLUGI) */
const PROJECT_LINKS = [
  { id: "Conduit",            url: "/docs/projects/conduit" },
  { id: "Truck_sings_api",    url: "/docs/projects/truck_sings_api" },
  { id: "Juice-Shop-Master",  url: "/docs/projects/juice" },
  { id: "Baby-Tools-Shop",    url: "/docs/projects/baby" },
  { id: "Wordpress",          url: "/docs/projects/wordpress" },
  { id: "Minecraft",          url: "/docs/projects/minecraft" },      // ← poprawny slug
  { id: "V-Server-Setup",     url: "/docs/projects/vserver-setup" },
] as const;

type ProjectId = typeof PROJECT_LINKS[number]["id"];

/** Ikonka taga (yaml/shell/itp.) */
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

/** Wspólne przyciski (Documentation + GitHub) — używają istniejącego CSS `.buttons` */
const ActionButtons: React.FC<{ docsTo: string; githubHref?: string }> = ({
  docsTo,
  githubHref,
}) => {
  const { t } = useTranslation("projectHighlight");
  return (
    <div className={styles.buttons}>
      <Link to={useBaseUrl(docsTo)}>{t("buttons.docs")}</Link>
      {githubHref && (
        <a href={githubHref} target="_blank" rel="noopener noreferrer">
          {t("buttons.github")}
        </a>
      )}
    </div>
  );
};

/** Meta + klucz tekstu (textKey) do i18n */
const META: Record<
  ProjectId,
  {
    image: string;
    alt: string;
    textKey: string;
    github?: string;
    logo?: string;
    watermark?: string;
  }
> = {
  Minecraft: {
    image: "/img/minecraft.png",
    alt: "Minecraft",
    textKey: "minecraft",
    github: "https://github.com/Gosia2024/minecraft_server",
    logo: "/img/mlogo.png",
    watermark: "DevSecOps",
  },
  Conduit: {
    image: "/img/conduit.png",
    alt: "Conduit",
    textKey: "conduit",
    github: "https://github.com/Gosia2024/conduit-deployment",
  },
  "Truck_sings_api": {
    image: "/img/truck.png",
    alt: "Truck Signs API",
    textKey: "truck",
    github: "https://github.com/Gosia2024/truck_signs_api",
  },
  "Juice-Shop-Master": {
    image: "/img/juice.png",
    alt: "OWASP Juice",
    textKey: "juice",
    github: "https://github.com/Gosia2024/juice-shop-meister",
  },
  "Baby-Tools-Shop": {
    image: "/img/baby.png",
    alt: "Baby Tools",
    textKey: "baby",
    github: "https://github.com/Gosia2024/baby-tools-shop",
  },
  Wordpress: {
    image: "/img/wordpress.png",
    alt: "WordPress",
    textKey: "wordpress",
    github: "https://github.com/Gosia2024/wordpress",
  },
  "V-Server-Setup": {
    image: "/img/v-server.png",
    alt: "V-Server",
    textKey: "vserver",
    github: "https://github.com/Gosia2024/v-server-setup",
  },
};

const MyProjectHighlights: React.FC = () => {
  const { t } = useTranslation("projectHighlight");
  const [selectedId, setSelectedId] = useState<ProjectId>(PROJECT_LINKS[0].id);

  /** --- USTAWIAMY WSZYSTKIE HOOKI / STAŁE BEZ WARUNKÓW (żeby nie było #310) --- */
  const meta = META[selectedId];                 // meta aktualnej karty
  const imgUrl = useBaseUrl(meta.image);         // URL miniatury (hook zawsze)
  const logoUrl = useBaseUrl(meta.logo ?? "");   // URL logotypu (hook zawsze)
  const hasLogo = Boolean(meta.logo);            // renderujemy warunkowo tylko element, nie hook

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} ${styles.mobileHidden}`}>
          {t("sectionTitle")}
        </h2>

        {/* ===== DESKTOP (lista + jedna karta) ===== */}
        <div className={styles.desktopOnly}>
          <div className={styles.content}>
            <nav className={styles.projectList} aria-label="Project list">
              <ol className={styles.projectListOl}>
                {PROJECT_LINKS.map(({ id }, i) => (
                  <li key={id} className={styles.projectItem}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(id)}
                      className={`${styles.projectLink} ${
                        selectedId === id ? styles.active : ""
                      }`}
                    >
                      <span className={styles.projectNum}>{i + 1}.</span>
                      <span className={styles.projectTitle}>
                        {t(`links.${id}`, id)}
                      </span>
                    </button>
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

            <div className={styles.cards}>
              <article className={styles.projectCard}>
                <div className={styles.header}>
                  <h3 className={`${styles.cardTitle} ${styles.desktopOnly}`}>
                    {t(`cards.${meta.textKey}.title`, t(`links.${selectedId}`, selectedId))}
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
                    <img
                      className={styles.thumb}
                      src={imgUrl}
                      alt={meta.alt}
                      width={355}
                      height={240}
                    />
                    {meta.watermark && (
                      <span className={styles.watermark}>{meta.watermark}</span>
                    )}
                    {hasLogo && (
                      <img
                        className={styles.logo}
                        src={logoUrl}
                        alt={`${selectedId} logo`}
                      />
                    )}
                  </div>

                  <div className={styles.info}>
                    <p className={styles.desc}>
                      {t(`cards.${meta.textKey}.desc`, t("common.defaultDesc"))}
                    </p>

                    <ActionButtons
                      docsTo={PROJECT_LINKS.find((p) => p.id === selectedId)!.url}
                      githubHref={meta.github}
                    />

                    <div className={styles.sepBar} aria-hidden="true" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* ===== MOBILE (Twoja wersja 1:1) ===== */}
        <div className={styles.mobileOnly}>
          <h3 className={`${styles.cardTitle} ${styles.mobileOnly}`}>
            {t("firstCard.title")}
          </h3>

          <div className={`${styles.mobileButtons} ${styles.mobileOnly}`}>
            <Link to={useBaseUrl("docs/projects/minecraft")}>
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

          <div className={styles.cards}>
            {/* 1) Minecraft */}
            <article className={styles.projectCard}>
              <div className={styles.header}>
                <h3 className={styles.cardTitle}>{t("firstCard.h3")}</h3>
                <div className={styles.tags}>
                  <TagIcon desktop="/img/myaml.png" mobile="/img/yaml_blue.png" alt={t("alts.yaml")} />
                  <TagIcon desktop="/img/mshell.png" mobile="/img/mshell_blue.png" alt={t("alts.shell")} />
                  <TagIcon desktop="/img/msec.png" mobile="/img/msec_blue.png" alt={t("alts.security")} />
                  <TagIcon desktop="/img/mcontainer.png" mobile="/img/mcontainer_blue.png" alt={t("alts.container")} />
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

                  <ActionButtons
                    docsTo="docs/projects/minecraft"
                    githubHref="https://github.com/Gosia2024/dso_blog"
                  />

                  <div className={styles.sepBar} aria-hidden="true" />
                </div>
              </div>
            </article>

            {/* 2) Clone (Container) */}
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
                  <img
                    className={styles.thumb}
                    src={useBaseUrl("/img/mobile_container.png")}
                    alt="Clone (Container)"
                    width={355}
                    height={240}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.desc}>{t("secondCard.desc")}</p>

                  <ActionButtons
                    docsTo="docs/projects/vserver-setup"
                    githubHref="https://github.com/Gosia2024/dso_blog"
                  />

                  <div className={styles.sepBar} aria-hidden="true" />
                </div>
              </div>
            </article>

            {/* 3) WordPress hosting */}
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
                  <img
                    className={styles.thumb}
                    src={useBaseUrl("/img/wordpress.png")}
                    alt={t("alts.wp")}
                    width={355}
                    height={240}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.desc}>{t("thirdCard.desc")}</p>

                  <ActionButtons
                    docsTo="docs/projects/wordpress"
                    githubHref="https://github.com/Gosia2024/dso_blog"
                  />

                  <div className={styles.sepBar} aria-hidden="true" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjectHighlights;
