import React from "react";
import styles from "./hero.module.css";
import Translate from '@docusaurus/Translate';

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left column: text content */}
      <div className={styles.textSection}>
        <p>
          <Translate id="hero.greeting">Hey there. 👋 I am </Translate>
        </p>

        {/* Main name/title */}
        <h1 className={styles.heroTitle}>Gosia</h1>

        {/* Role / subtitle */}
        <h2>Security operations developer</h2>

        {/* 🔽 Inline image visible ONLY on mobile, placed right under the h2 */}
        <div className={`${styles.imageInline} ${styles.mobileOnly}`}>
          <img src="./img/profile.jpg" alt="Profile" />
        </div>

        {/* Short self-intro (prompt text to be replaced with your own content) */}
        <p>
          Write some information about yourself that is IT related.
          <br />
          For example: <br />
          Why are you passionate about coding? Do you have a deep interest in
          games? What is your source of inspiration for improving your
          programming skills? Are you constantly learning and keeping up to
          date?
        </p>

        {/* Primary call-to-action */}
        <button className={styles.contactButton}>Contact me</button>
      </div>

      {/* Right column: image shown ONLY on desktop */}
      <div className={`${styles.imageSection} ${styles.desktopOnly}`}>
        <img src="./img/profile.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
