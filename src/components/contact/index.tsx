// src/components/contact/Contact.tsx  (dostosuj ścieżkę do swojego pliku)
import React from "react";
import styles from "./contact.module.css";
import { useTranslation } from "react-i18next";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Contact() {
  const { t } = useTranslation("contact");

  const emailHref = t("links.emailHref");
  const emailLabel = t("links.emailLabel");
  const profileHref = t("links.profileHref");
  const profileLabel = t("links.profileLabel");

  // obrazki przez baseUrl (jeśli masz baseUrl w Docusaurus)
  const emailIcon = useBaseUrl("/img/email.png");
  const linkedIcon = useBaseUrl("/img/linked.png");
  const arrowIcon = useBaseUrl("/img/arrow.png");

  const bullets = t("bullets", { returnObjects: true }) as string[];

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.inner}>

        {/* Mobile-only helper text + CTA */}
        <p className={styles.mobileHint}>{t("mobileHint")}</p>
        <a href="#projects" className={styles.mobileCta}>{t("mobileCta")}</a>

        {/* Headlines */}
        <div className={styles.headlines}>
          <p role="heading" aria-level={2} className={styles.title}>
            {t("title")}
          </p>
          <p role="heading" aria-level={3} className={styles.subtitle}>
            {t("subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Left column */}
          <div className={styles.left}>
            <p className={styles.bodyIntro}>{t("bodyIntro")}</p>
            <ul className={styles.bodyList}>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          {/* Right column */}
          <div className={styles.right}>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <img src={emailIcon} alt="" aria-hidden="true" className={styles.iconImg} />
                <a className={styles.link} href={emailHref}>
                  {emailLabel}
                </a>
              </div>

              <div className={styles.contactItem}>
                <img src={linkedIcon} alt="" aria-hidden="true" className={styles.iconImg} />
                <a className={styles.link} href={profileHref}>
                  {profileLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section footer */}
      <div className={styles.footerArea}>
        <button
          type="button"
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("backToTopAria")}
        >
          <img src={arrowIcon} alt="" aria-hidden="true" className={styles.arrowIcon} />
        </button>

        <p className={styles.copy}>{t("copyright")}</p>
        <p className={styles.legal}>
          <a className={styles.legalLink} href="#">{t("legal")}</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
