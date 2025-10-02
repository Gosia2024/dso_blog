import React from "react";
import styles from "./hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Translate from '@docusaurus/Translate';
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textSection}>
      <p>
    <Translate id="hero.greeting">Hey there. 👋 I am</Translate>
  </p>

        <h1 className={styles.heroTitle}>Gosia</h1>

        <h2 className={styles.heroSubtitle}>Security operations developer</h2>

        {/* mobile-only image under the subtitle */}
        <div className={`${styles.imageInline} ${styles.mobileOnly}`}>
          <img src="./img/profile.jpg" alt="Profile" />
        </div>

        <p>
        Write some information about yourself that is IT related.
For example:
Why are you passionate about coding? Do you have a deep interest in games? What is your source of inspiration for improving your programming skills? Are you constantly learning and keeping up to date?

        </p>

        <button className={styles.contactButton}>Contact me</button>
      </div>

      {/* desktop-only side image */}
      <div className={`${styles.imageSection} ${styles.desktopOnly}`}>
        <img src="./img/profile.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
