// src/components/hero/Hero.tsx
import React from "react";
import styles from "./hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Hero() {
  const { t } = useTranslation("homepage");
    const { t: tContact } = useTranslation("contact");   // add
  const emailHref = tContact("links.emailHref");        // add
  const profileUrl = useBaseUrl("./img/gosia.png");

  return (
    <section className={styles.hero}>
      <div className={styles.textSection}>
        <p>{t("greeting")}</p>

        <h1 className={styles.heroTitle}>{t("name")}</h1>

        <h2 className={styles.heroSubtitle}>{t("role")}</h2>

        {/* mobile-only image under the subtitle */}
        <div className={`${styles.imageInline} ${styles.mobileOnly}`}>
          <img src={profileUrl} alt="Profile" />
        </div>

        <p>{t("bio")}</p>

        <a className={styles.contactButton} href={emailHref}>
  {t("contact")}
</a>
      </div>

      {/* desktop-only side image */}
      <div className={`${styles.imageSection} ${styles.desktopOnly}`}>
        <img src={profileUrl} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
