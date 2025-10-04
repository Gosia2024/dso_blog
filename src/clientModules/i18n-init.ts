// src/clientModules/i18n-init.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ----- Namespaces: common -----
import enCommon from '../locales/en/common.json';
import plCommon from '../locales/pl/common.json';
import deCommon from '../locales/de/common.json';

// ----- Namespaces: homepage -----
import enHome from '../locales/en/homepage.json';
import plHome from '../locales/pl/homepage.json';
import deHome from '../locales/de/homepage.json';

// ----- Namespaces: projectHighlight -----
import enProjectHighlight from '../locales/en/projectHighlight.json';
import plProjectHighlight from '../locales/pl/projectHighlight.json';
import deProjectHighlight from '../locales/de/projectHighlight.json';

// ----- Namespaces: mySkills -----
import enMySkills from '../locales/en/mySkills.json';
import plMySkills from '../locales/pl/mySkills.json';
import deMySkills from '../locales/de/mySkills.json';

// ----- Namespaces: contact (added) -----
import enContact from '../locales/en/contact.json';
import plContact from '../locales/pl/contact.json';
import deContact from '../locales/de/contact.json';

// Guard: only run in the browser (Docusaurus also renders on the server)
const isBrowser = typeof window !== 'undefined';

// Initialize i18next once, client-side only
if (!i18n.isInitialized && isBrowser) {
  i18n
    .use(LanguageDetector)     // auto-detect user language (localStorage, URL, browser)
    .use(initReactI18next)     // pass i18n down to react-i18next
    .init({
      // Translation resources grouped by language + namespace
      resources: {
        en: {
          common: enCommon,
          homepage: enHome,
          projectHighlight: enProjectHighlight,
          mySkills: enMySkills,
          contact: enContact,            // NEW: contact namespace
        },
        pl: {
          common: plCommon,
          homepage: plHome,
          projectHighlight: plProjectHighlight,
          mySkills: plMySkills,
          contact: plContact,            // NEW: contact namespace
        },
        de: {
          common: deCommon,
          homepage: deHome,
          projectHighlight: deProjectHighlight,
          mySkills: deMySkills,
          contact: deContact,            // NEW: contact namespace
        },
      },

      // List all namespaces used in the app (ensure 'contact' is included)
      ns: ['common', 'homepage', 'projectHighlight', 'mySkills', 'contact'],
      defaultNS: 'common',      // default namespace when none is specified
      fallbackLng: 'en',        // fallback language if key is missing

      // React already escapes; keep values raw
      interpolation: { escapeValue: false },

      // Language detection strategy & caching
      detection: {
        order: ['localStorage', 'querystring', 'navigator'],
        caches: ['localStorage'],
      },

      // Enable for troubleshooting:
      // debug: true,
    });
}

export default i18n;
