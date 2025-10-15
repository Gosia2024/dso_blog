// src/pages/portfolio.tsx
import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import './portfolio.css'; // einfache Styles (section/inner/topbar)

import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/my-skills';
import MyProjectHighlights from '../components/my-project-highlights';
import Contact from '../components/contact';

export default function Portfolio() {
  const home = useBaseUrl('/');

  return (
    <>
      {/* Obenleiste  */}
      <nav className="portfolioTopbar">
        <Link className="backLink" to={home} aria-label="Back to Docs">
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

      {/* HEADER + HERO: voller Streifen (Hintergrund über ganze Breite) */}
      <section className="section edgePrimary">
        <Header />
      </section>

      <section className="section edgePrimary">
        <Hero />
      </section>

      {/* Inhaltlich zentriert: inner hält die Maximalbreite */}
      <section className="section">
        <div className="inner">
          <MySkills />
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <MyProjectHighlights />
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <Contact />
        </div>
      </section>

      {/* Falls du den Floating-Button */}
      <a className="fabBack" href={home} aria-label="Back to Docs">
        ↑
      </a>
    </>
  );
}
