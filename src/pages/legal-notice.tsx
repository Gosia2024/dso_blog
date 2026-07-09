// src/pages/legal-notice.tsx
import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function LegalNotice() {
  return (
    <Layout>
      <Head>
        <title>Legal notice (Impressum)</title>
        <meta
          name="description"
          content="Legal and contact information of the site owner."
        />
      </Head>

      <main className="container margin-vert--lg">
        {/* Back button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
          <Link className="button button--secondary button--sm" to={useBaseUrl("/")}>
            ← Back to portfolio
          </Link>
        </div>

        <h1>Legal notice (Impressum)</h1>

        <h2>Site owner</h2>
        <p>
          Name / Company: <strong>Malgorzata Lingenfelder</strong>
        </p>
        <p>
          Address: <strong>Fantasiestr., Leipzig, Germany</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@malgorzata-lingenfelder.de">
            info@malgorzata-lingenfelder.de
          </a>
        </p>
        {/* Phone/registration lines omitted intentionally */}

        <h2>Hosting</h2>
        <p>
          Hosting provider: <strong>GitHub Pages (GitHub, Inc.)</strong>
        </p>
        <p>
          Website:{" "}
          <a href="https://pages.github.com/" target="_blank" rel="noreferrer">
            https://pages.github.com/
          </a>
        </p>

        <h2>Copyright</h2>
        <p>
          Unless stated otherwise, all content on this website is protected by
          copyright and owned by the site owner. Any reproduction, distribution,
          or other use requires prior written permission.
        </p>

        <h2>Disclaimer</h2>
        <p>
          We strive for accuracy but cannot guarantee completeness or timeliness
          of the information provided. External links lead to third-party
          websites; we have no control over their content and accept no
          liability for it.
        </p>

        <h2>Privacy & cookies</h2>
        <p>
          For information about personal data processing and cookies, please see
          our Privacy Policy: <a href="/privacy-policy">/privacy-policy</a>.
        </p>

        <h2>Trademarks & images</h2>
        <p>
          All trademarks are the property of their respective owners.
          Photos/graphics: sources and licenses as credited.
        </p>
      </main>
    </Layout>
  );
}

