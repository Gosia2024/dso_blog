// src/components/header/Header.tsx

import React, { useState } from "react";
import styles from "./header.module.css";
import { useTranslation } from "react-i18next"; // ⬅ i18next only (no Link)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  function openMenu() { setIsMenuOpen(true); }
  function closeMenu() { setIsMenuOpen(false); }
  function handleNavClick() { setIsMenuOpen(false); }

  return (
    <header className={`${styles.header} fullBleed`}>
      {/* Desktop nav */}
      <nav className={styles.nav}>
        <a href="#about">{t("nav.about")}</a>
        <a href="#skills">{t("nav.skills")}</a>
        <a href="#projects">{t("nav.projects")}</a>
        <a href="#contact">{t("nav.contact")}</a>
      </nav>

      {/* Desktop language switcher — WITHOUT changing the route */}
      <div className={styles.langSwitcher}>
        <button type="button" onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button type="button" onClick={() => i18n.changeLanguage("de")}>DE</button>
        <button type="button" onClick={() => i18n.changeLanguage("pl")}>PL</button>
      </div>

      {/* Mobile hamburger */}
      <button
        className={styles.menuButton}
        onClick={openMenu}
        aria-label={t("nav.openMenu", { defaultValue: "Open menu" })}
        type="button"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label={t("nav.closeMenu", { defaultValue: "Close menu" })}
            type="button"
          >
            ✕
          </button>

          <a href="#about" onClick={handleNavClick}>{t("nav.about")}</a>
          <a href="#skills" onClick={handleNavClick}>{t("nav.skills")}</a>
          <a href="#projects" onClick={handleNavClick}>{t("nav.projects")}</a>
          <a href="#contact" onClick={handleNavClick}>{t("nav.contact")}</a>

          {/* Mobile language switcher — also WITHOUT changing the route */}
          <div className={styles.mobileLangSwitcher}>
            <button type="button" onClick={() => { i18n.changeLanguage("en"); handleNavClick(); }}>EN</button>
            <button type="button" onClick={() => { i18n.changeLanguage("de"); handleNavClick(); }}>DE</button>
            <button type="button" onClick={() => { i18n.changeLanguage("pl"); handleNavClick(); }}>PL</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
