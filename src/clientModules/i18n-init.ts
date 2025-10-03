import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// common
import enCommon from '../locales/en/common.json';
import plCommon from '../locales/pl/common.json';
import deCommon from '../locales/de/common.json';

// homepage (DODAJ TE 3 IMPORTY)
import enHome from '../locales/en/homepage.json';
import plHome from '../locales/pl/homepage.json';
import deHome from '../locales/de/homepage.json';

const isBrowser = typeof window !== 'undefined';

if (!i18n.isInitialized && isBrowser) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: enCommon, homepage: enHome },
        pl: { common: plCommon, homepage: plHome },
        de: { common: deCommon, homepage: deHome },
      },
      ns: ['common', 'homepage'],     // <-- mamy 2 namespace'y
      defaultNS: 'common',            // <-- domyślnie "common"
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      detection: { order: ['localStorage','querystring','navigator'], caches: ['localStorage'] },
      // debug: true, // włącz na chwilę jeśli chcesz podgląd w konsoli
    });
}

export default i18n;
