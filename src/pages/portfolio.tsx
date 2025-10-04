import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import './portfolio.css'; // page-scoped styles (full-bleed, topbar, floating back button)

import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/my-skills';
import MyProjectHighlights from '../components/my-project-highlights';
import Contact from '../components/contact';

// EdgeToEdge — stretches a section to viewport edges (full-bleed).
// Implementation detail:
// - .fullBleed uses negative margins to escape the default centered container:
//   width: 100vw; margin-left/right: calc(50% - 50vw);
const EdgeToEdge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <section className={['fullBleed', className].filter(Boolean).join(' ')}>
    {children}
  </section>
);

export default function Portfolio() {
  // Always navigates back to your site root respecting baseUrl
  // Example in prod: https://gosia2024.github.io/dso_blog/
  const home = useBaseUrl('/');

  return (
    <>
      {/* Lightweight top bar (only on this page) for a clear "back" affordance. */}
      <nav className="portfolioTopbar">
        <Link className="backLink" to={home} aria-label="Back to Docs">
          ← Back to Docs
        </Link>
      </nav>

      {/* Page-level head tags (SSR-friendly) */}
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Showcase of my work: skills, selected projects and contact information."
        />
        {/*
          Optional social share tags (uncomment and customize if needed):
          <meta property="og:title" content="Portfolio" />
          <meta property="og:description" content="My projects and skills." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={useBaseUrl('/portfolio')} />
          <meta property="og:image" content={useBaseUrl('/img/og-portfolio.png')} />
        */}
      </Head>

      {/* Spacer under a global sticky navbar (set height in CSS; or keep 0 if not sticky). */}
      <div className="navbarSpacer" />

      {/* HEADER + HERO share the same background and meet seamlessly.
         Utilities:
         - edgePrimary: themed background for the stripe
         - killMargins: remove outer spacing if inner components handle their own
         - noSeam: ensure a clean visual join between adjacent sections
       */}
      <EdgeToEdge className="edgePrimary killMargins noSeam">
        <Header />
      </EdgeToEdge>

      <EdgeToEdge className="edgePrimary killMargins noSeam">
        <Hero />
      </EdgeToEdge>

      {/* Remaining sections: still full-bleed, each manages its own inner container/max-width. */}
      <EdgeToEdge>
        <MySkills />
      </EdgeToEdge>

      <EdgeToEdge>
        <MyProjectHighlights />
      </EdgeToEdge>

      <EdgeToEdge>
        <Contact />
      </EdgeToEdge>

      {/* Floating back-to-docs button (visible on mobile/desktop). */}
      <a className="fabBack" href={home} aria-label="Back to Docs">
        ↑
      </a>
    </>
  );
}