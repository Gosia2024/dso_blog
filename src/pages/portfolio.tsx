// src/pages/portfolio.tsx
// -----------------------------------------------------------------------------
// This file defines the "Portfolio" page for a Docusaurus site.
// It uses React + TypeScript (TSX) and composes several presentational sections
// (Header, Hero, MySkills, MyProjectHighlights, Contact).
//
// Notable conventions:
// - We use a small wrapper component (EdgeToEdge) to create full-bleed sections
//   that extend to the viewport edges (bypassing the default Docusaurus container).
// - Page-level <Head> sets the document title and SEO description.
// - Styling for full-bleed and spacing utilities lives in ./portfolio.css.
// -----------------------------------------------------------------------------

import React from 'react';
import Head from '@docusaurus/Head';     // Docusaurus helper for managing <head> tags (SSR-friendly)
import './portfolio.css';                // Page-scoped styles (utilities like .fullBleed, .navbarSpacer, etc.)

// Page sections (local components). Each renders a self-contained slice of the page.
import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/my-skills';
import MyProjectHighlights from '../components/my-project-highlights';
import Contact from '../components/contact';

/**
 * EdgeToEdge — full-width (full-bleed) layout wrapper.
 *
 * Purpose:
 * - Docusaurus content typically sits inside a centered container.
 * - This wrapper applies a global `.fullBleed` utility so the section spans
 *   the entire viewport width (great for hero/stripe backgrounds).
 *
 * Type signature:
 * - React.FC with React.PropsWithChildren so it accepts children and an optional className.
 * - `className?: string` lets you pass additional utility classes (e.g. background variants).
 *
 * Implementation details:
 * - We concatenate 'fullBleed' with any incoming className, filtering falsy values.
 * - `.fullBleed` CSS is responsible for the edge-to-edge effect:
 *     margin-left: calc(50% - 50vw);
 *     margin-right: calc(50% - 50vw);
 *     width: 100vw;
 *
 * Accessibility:
 * - This wrapper renders a semantic <section>, which is appropriate for distinct page regions.
 */
const EdgeToEdge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <section className={['fullBleed', className].filter(Boolean).join(' ')}>
    {children}
  </section>
);

export default function Portfolio() {
  return (
    <>
      {/* <Head> updates the document <head>. Docusaurus will SSR this properly. */}
      <Head>
        {/* Page title (shows in browser tab and search engines) */}
        <title>Portfolio</title>

        {/* Basic SEO: short, descriptive summary of the page content */}
        <meta name="description" content="My projects" />
      </Head>

      {/* Spacer below the navbar.
         - If your navbar is sticky/fixed, this prevents content from sitting underneath it.
         - If your navbar is NOT sticky, keep this at 0 height in CSS (no visual effect).
         - Adjust height in `portfolio.css` via `.navbarSpacer { height: <px|rem>; }`
      */}
      <div className="navbarSpacer" />

      {/* HEADER + HERO share the same background and touch the edges.
         - `edgePrimary` can be a background theme (e.g., gradient or brand color).
         - `killMargins` removes outer margins/padding if components add their own.
         - `noSeam` is a cosmetic class to ensure the two sections meet without a visible seam.
         - All three classes are optional utilities defined in `portfolio.css`.
      */}
      <EdgeToEdge className="edgePrimary killMargins noSeam">
        <Header />
      </EdgeToEdge>

      <EdgeToEdge className="edgePrimary killMargins noSeam">
        <Hero />
      </EdgeToEdge>

      {/* Remaining sections render full-bleed but manage their own internal containers/backgrounds.
         - Keep them inside EdgeToEdge for visual continuity across the viewport.
         - Inside each component, you can still center content with a max-width container.
      */}
      <EdgeToEdge>
        <MySkills />
      </EdgeToEdge>

      <EdgeToEdge>
        <MyProjectHighlights />
      </EdgeToEdge>

      <EdgeToEdge>
        <Contact />
      </EdgeToEdge>
    </>
  );
}

/* ------------------------------------ Notes -----------------------------------
- Where to style:
  - `portfolio.css` should define:
      .fullBleed           // width:100vw; negative margins to escape container
      .navbarSpacer        // height for sticky nav offset (or 0 if not needed)
      .edgePrimary         // shared background for Header + Hero
      .killMargins, .noSeam  // optional utilities to control spacing/joins

- TypeScript niceties:
  - Using React.FC with PropsWithChildren gives you children typing + default `children` prop.
  - You could also inline the props: `({ className, children }: { className?: string; children: React.ReactNode }) => ...`

- Performance:
  - This file renders a simple composition — no heavy logic/hooks here.
  - If any child sections become expensive to render, consider memoizing them
    (e.g., `export default React.memo(MySkills)`), but only if you measure a benefit.

- SEO:
  - Consider enhancing <Head> with Open Graph/Twitter tags if this page is shareable.

- Accessibility:
  - Ensure each section has appropriate headings (h1/h2/h3) inside the components.
  - Keep color contrast in mind for any backgrounds used in `edgePrimary`.

- Docusaurus specifics:
  - Pages in `src/pages` map directly to routes.
  - This file will be served at `/portfolio` by default.
------------------------------------------------------------------------------- */
