// src/components/hero/Hero.tsx
import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from "@docusaurus/BrowserOnly";

function HeroInner() {
  const { t } = useTranslation("homepage");
  const { t: tContact } = useTranslation("contact");
  const emailHref = tContact("links.emailHref");
  const profileUrl = useBaseUrl("/img/gosia.png");

  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let isCancelled = false;
    let $el: any = null;

    async function initRipples() {
      if (!heroRef.current) return;

      // ⬇️ dynamiczny import tylko w przeglądarce
      const jQueryModule = await import("jquery");
      const $ = (jQueryModule as any).default || (jQueryModule as any);
      await import("jquery.ripples");

      if (isCancelled || !heroRef.current) return;

      $el = $(heroRef.current);

      try {
        $el.ripples({
         resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true
        });
      } catch (e) {
        console.error("Ripples init error:", e);
      }
    }

    initRipples();

    return () => {
      isCancelled = true;
      if ($el) {
        try {
          $el.ripples("destroy");
        } catch {}
      }
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.textSection}>
        <p>{t("greeting")}</p>

        <h1 className={styles.heroTitle}>{t("name")}</h1>
        <h2 className={styles.heroSubtitle}>{t("role")}</h2>

        {/* mobile-only image */}
        <div className={`${styles.imageInline} ${styles.mobileOnly}`}>
          <img src={profileUrl} alt="Profile" />
        </div>

        <p>{t("bio")}</p>

        <a className={styles.contactButton} href={emailHref}>
          {t("contact")}
        </a>
      </div>

      {/* desktop-only image */}
      <div className={`${styles.imageSection} ${styles.desktopOnly}`}>
        <img src={profileUrl} alt="Profile" />
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <BrowserOnly fallback={
      // statyczna wersja bez efektu na serwerze
      <section className={styles.hero}>
        <div className={styles.textSection}>
          {/* możesz wstawić tu ten sam tekst, bez efektu */}
        </div>
      </section>
    }>
      {() => <HeroInner />}
    </BrowserOnly>
  );
}
