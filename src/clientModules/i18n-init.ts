// src/clientModules/i18n-init.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// common
import enCommon from '../locales/en/common.json';
import plCommon from '../locales/pl/common.json';
import deCommon from '../locales/de/common.json';

// homepage
import enHome from '../locales/en/homepage.json';
import plHome from '../locales/pl/homepage.json';
import deHome from '../locales/de/homepage.json';

// projectHighlight
import enProjectHighlight from '../locales/en/projectHighlight.json';
import plProjectHighlight from '../locales/pl/projectHighlight.json';
import deProjectHighlight from '../locales/de/projectHighlight.json';

// mySkills
import enMySkills from '../locales/en/mySkills.json';
import plMySkills from '../locales/pl/mySkills.json';
import deMySkills from '../locales/de/mySkills.json';

// contact  ⬅ DODANE
import enContact from '../locales/en/contact.json';
import plContact from '../locales/pl/contact.json';
import deContact from '../locales/de/contact.json';

const isBrowser = typeof window !== 'undefined';

if (!i18n.isInitialized && isBrowser) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: enCommon,
          homepage: enHome,
          projectHighlight: enProjectHighlight,
          mySkills: enMySkills,
          contact: enContact,              // ⬅
        },
        pl: {
          common: plCommon,
          homepage: plHome,
          projectHighlight: plProjectHighlight,
          mySkills: plMySkills,
          contact: plContact,              // ⬅
        },
        de: {
          common: deCommon,
          homepage: deHome,
          projectHighlight: deProjectHighlight,
          mySkills: deMySkills,
          contact: deContact,              
        },
      },
      ns: ['common', 'homepage', 'projectHighlight', 'mySkills', 'contact'], // ⬅dopisany 'contact'
      defaultNS: 'common',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      detection: {
        order: ['localStorage', 'querystring', 'navigator'],
        caches: ['localStorage'],
      },
      // debug: true,
    });
}

export default i18n;
