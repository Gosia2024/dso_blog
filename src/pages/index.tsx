import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

/**
 * HomepageHeader
 * - Uses Docusaurus hero utilities and a local CSS module.
 * - Renders site title, tagline, and a row of CTA buttons.
 */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
         
  {/* <Link
      className="button button--secondary button--lg"
      to="/docs/guides/intro"
    >
      Docusaurus Tutorial - 5min ⏱️
    </Link> */}

          {/* spacer placeholder (kept from original; remove if not needed) */}
          <></>

          <Link
            className="button button--secondary button--lg"
            to="/docs/projects/overview"
          >
            To my Projects 
          </Link>

          {/* NEW: direct link to the Portfolio page */}
          <Link
            className="button button--primary button--lg"
            to="/portfolio"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * Home page
 * - Wraps content in Docusaurus <Layout> for SEO and shared chrome.
 * - The main area shows feature tiles/components.
 */
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
