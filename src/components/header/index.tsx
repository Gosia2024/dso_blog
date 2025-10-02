// src/components/header/Header.tsx

// Import React and the useState hook
import React, { useState } from "react";

// Import CSS Module styles for this component
import styles from "./header.module.css";

// Import Docusaurus components used for internal links and i18n text
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

// Define the Header component as a named function (no arrow functions)
function Header() {
  // Declare a piece of state to track if the mobile menu is open (initially false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Open the mobile menu by setting state to true
  function openMenu() {
    setIsMenuOpen(true);
  }

  // Close the mobile menu by setting state to false
  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Close the menu after clicking any navigation link (useful on mobile)
  function handleNavClick() {
    setIsMenuOpen(false);
  }

  // Render the header markup
  return (
    // Outer header wrapper with a styled class from CSS Modules
    <header className={styles.header}>
      {/* Desktop navigation bar with anchor links to page sections */}
      <nav className={styles.nav}>
        {/* Each link jumps to a section ID on the same page */}
        <a href="#about">
          {/* Translate component enables i18n keys with fallbacks */}
          <Translate id="nav.about">About me</Translate>
        </a>
        <a href="#skills">
          <Translate id="nav.skills">My skills</Translate>
        </a>
        <a href="#projects">
          <Translate id="nav.projects">My projects</Translate>
        </a>
        <a href="#contact">
          <Translate id="nav.contact">Contact</Translate>
        </a>
      </nav>

      {/* Desktop language switcher with Docusaurus <Link> for internal routing */}
      <div className={styles.langSwitcher}>
        {/* data-noBrokenLink tells Docusaurus to skip broken-link validation for these */}
        <Link to="/" data-noBrokenLink>EN</Link>
        <Link to="/de/" data-noBrokenLink>DE</Link>
        {/* Root ("/") is the default language (PL) in this setup */}
        <Link to="/pl/" data-noBrokenLink>PL</Link>
      </div>

      {/* Hamburger button visible on mobile; opens the mobile menu */}
      <button
        className={styles.menuButton}  // Style the button via CSS Modules
        onClick={openMenu}             // Click handler that opens the menu
        aria-label="Open menu"         // Accessibility label for screen readers
        type="button"                  // Ensure it doesn't submit any form accidentally
      >
        {/* Simple hamburger icon character */}
        ☰
      </button>

      {/* Conditionally render the mobile menu only when isMenuOpen is true */}
      {isMenuOpen && (
        // Use a dialog role for better accessibility when the menu overlays content
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          {/* Close button for the mobile menu */}
          <button
            className={styles.closeButton} // Style the close button
            onClick={closeMenu}            // Click handler that closes the menu
            aria-label="Close menu"        // Accessibility label
            type="button"                  // Button type to avoid form submission
          >
            {/* Close (X) icon character */}
            ✕
          </button>

          {/* Mobile navigation links; each closes the menu after click */}
          <a href="#about" onClick={handleNavClick}>
            <Translate id="nav.about">About me</Translate>
          </a>
          <a href="#skills" onClick={handleNavClick}>
            <Translate id="nav.skills">My skills</Translate>
          </a>
          <a href="#projects" onClick={handleNavClick}>
            <Translate id="nav.projects">My projects</Translate>
          </a>
          <a href="#contact" onClick={handleNavClick}>
            <Translate id="nav.contact">Contact</Translate>
          </a>

          {/* Mobile language switcher; mirrors the desktop switcher */}
          <div className={styles.mobileLangSwitcher}>
            {/* Use the same internal routes; close the menu after choosing a language */}
            <Link to="/en/" data-noBrokenLink onClick={handleNavClick}>EN</Link>
            <Link to="/de/" data-noBrokenLink onClick={handleNavClick}>DE</Link>
            <Link to="/"    data-noBrokenLink onClick={handleNavClick}>PL</Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Export the component as the default export so it can be imported elsewhere
export default Header;
