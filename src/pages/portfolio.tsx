// src/pages/portfolio.tsx
import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

import './portfolio.css';

import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/my-skills';
import MyProjectHighlights from '../components/my-project-highlights';
import Contact from '../components/contact';

export default function Portfolio() {
  return (
    <>
      <nav className="portfolioTopbar">
        <Link className="backLink" to="/" aria-label="Back to Docs">
          ← Back to Docs
        </Link>
      </nav>

      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Showcase of my work: skills, selected projects and contact information."
        />
      </Head>

      <div className="navbarSpacer" />
{/* Temporarily client-only to suppress hydration on this page */}
      <BrowserOnly fallback={<div />}>
        {() => (
          <>
            <section className="section edgePrimary"><Header /></section>
            <section className="section edgePrimary"><Hero /></section>
            <section className="section"><div className="inner"><MySkills /></div></section>
            <section className="section"><div className="inner"><MyProjectHighlights /></div></section>
            <section className="section"><div className="inner"><Contact /></div></section>
          </>
        )}
      </BrowserOnly>

      <Link className="fabBack" to="/" aria-label="Back to Docs">↑</Link>
    </>
  );
}
