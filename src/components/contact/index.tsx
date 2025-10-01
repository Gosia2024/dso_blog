import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.inner}>
        {/* Headlines (one line) */}
        {/* Mobile-only helper text */}
<p className={styles.mobileHint}>
  Write some information about your other projects. What other projects have you been working on so far?
</p>
{/* CTA tylko na mobile */}
<a href="#projects" className={styles.mobileCta}>
  See more projects
</a>
        <div className={styles.headlines}>
          <p role="heading" aria-level={2} className={styles.title}>
            Contact me
          </p>
          <p role="heading" aria-level={3} className={styles.subtitle}>
            Looking forward to hearing from you!
          </p>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Left column */}
          <div className={styles.left}>
            <p className={styles.bodyIntro}>Include the information like:</p>
            <ul className={styles.bodyList}>
              <li>Feel free to reach out with job offers or opportunities like...</li>
              <li>What role are you looking for?</li>
              <li>How you will contribute to the new team.</li>
              <li>Are you open for remote work or even relocate?</li>
            </ul>
          </div>

          {/* Right column */}
          <div className={styles.right}>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <img src="./img/email.png" alt="" aria-hidden="true" className={styles.iconImg} />
                <a className={styles.link} href="mailto:felix.wallke@gmail.com">
                  info@malgorzata-lingenfelder@de
                </a>
              </div>

              <div className={styles.contactItem}>
                <img src="./img/linked.png" alt="" aria-hidden="true" className={styles.iconImg} />
                <a className={styles.link} href="#">Profile Page</a>
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
          aria-label="Back to top"
        >
          <img src="./img/arrow.png" alt="" aria-hidden="true" className={styles.arrowIcon} />
        </button>

        <p className={styles.copy}>© Gosia 2025</p>
        <p className={styles.legal}>
          <a className={styles.legalLink} href="#">Legal notice</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
