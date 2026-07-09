import React, {useEffect} from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../clientModules/i18n-init';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Root({ children }: { children: React.ReactNode }) {
  // synchronizacja z dropdownem języka Docusaurusa
  const { i18n: docusaurusI18n } = useDocusaurusContext();
  useEffect(() => {
    const lang = docusaurusI18n.currentLocale;
    if (lang && i18n.language !== lang) i18n.changeLanguage(lang);
  }, [docusaurusI18n.currentLocale]);

  return <I18nextProvider i18n={i18n as any}>{children}</I18nextProvider>;
}
