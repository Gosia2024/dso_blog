// src/components/my-skills/MySkills.tsx  (adjust the path to your file)
import React, { useEffect, useState } from "react";
import styles from "./my-skills.module.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

/* Hook in this file — no external imports */
function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

type SkillId =
  | "html"
  | "css"
  | "static"
  | "python"
  | "shell"
  | "yaml"
  | "container"
  | "cicd"
  | "security";

type SkillData = {
  id: SkillId;
  icon: string;
  iconW: number;
  iconH: number;
};

// icons and dimensions stay hardcoded in the source
const skillsBase: SkillData[] = [
  { id: "html",      icon: "./img/html.png",   iconW: 22.19, iconH: 49.9 },
  { id: "css",       icon: "./img/css.png",    iconW: 22.19, iconH: 49.9 },
  { id: "static",    icon: "./img/static.png", iconW: 22.19, iconH: 49.9 },
  { id: "python",    icon: "./img/python.png", iconW: 22.19, iconH: 49.9 },
  { id: "shell",     icon: "./img/shell.png",  iconW: 22.19, iconH: 49.9 },
  { id: "yaml",      icon: "./img/yaml.png",   iconW: 22.19, iconH: 49.9 },
  { id: "container", icon: "./img/docker.png", iconW: 22.19, iconH: 49.9 },
  { id: "cicd",      icon: "./img/ci.png", iconW: 22.19, iconH: 49.9 },
  { id: "security",  icon: "./img/sec.png",    iconW: 22.19, iconH: 49.9 }
];

// mobile groups by ID — independent of translations
const groupsMobileIds: SkillId[][] = [
  ["html", "css", "static"],
  ["python", "shell", "yaml"],
  ["container", "cicd", "security"]
];

const mobileSettings: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  mobileFirst: true,
  swipeToSlide: true,
  touchThreshold: 8,
  speed: 350,
  slidesToShow: 1,
  adaptiveHeight: true
};

export default function MySkills() {
  const isMobile = useIsMobile(600);
  const { t } = useTranslation("mySkills");

  // pull display name and description list from translations
  const skillsAll = skillsBase.map((s) => ({
    ...s,
    name: t(`skills.${s.id}.name`) as string,
    description: t(`skills.${s.id}.desc`, { returnObjects: true }) as string[]
  }));

  // helper: find the object by ID
  const byId = (id: SkillId) => skillsAll.find((s) => s.id === id)!;

  const list = (arr: typeof skillsAll) =>
    arr.map((s) => (
      <article key={s.id} className={styles.skillCard} tabIndex={0}>
        <div className={styles.skillStack}>
          <img
            className={styles.skillIcon}
            src={s.icon}
            alt={s.name}
            width={s.iconW}
            height={s.iconH}
          />
          <span className={styles.skillName}>{s.name}</span>
        </div>

        <div className={styles.skillOverlay}>
          <h3 className={styles.overlayTitle}>How I used these skills</h3>
          <ul className={styles.overlayList}>
            {s.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </article>
    ));

  return (
    <section className={styles.skillsSection} id="skills" aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <header className={styles.headline}>
          <h2 id="skills-heading">{t("sectionTitle")}</h2>
        </header>

        <div className={styles.content}>
          {isMobile ? (
            <Slider {...mobileSettings}>
              {groupsMobileIds.map((group, gi) => (
                <div key={gi} className={styles.mobileCard}>
                  {group.map((id) => {
                    const s = byId(id);
                    return (
                      <div key={s.id} className={styles.mobileItem}>
                        <div className={styles.mobileIconCol}>
                          <img
                            className={styles.mobileIcon}
                            src={s.icon}
                            alt={s.name}
                            width={s.iconW}
                            height={s.iconH}
                          />
                          <span className={styles.mobileName}>{s.name}</span>
                        </div>

                        {/* text column */}
                        <div className={styles.mobileTextCol}>
                          <ul className={styles.mobileList}>
                            {s.description.map((line, i) => (<li key={i}>{line}</li>))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </Slider>
          ) : (
            list(skillsAll)
          )}
        </div>
      </div>
    </section>
  );
}
