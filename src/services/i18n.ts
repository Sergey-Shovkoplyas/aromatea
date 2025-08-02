import i18n from 'i18next';
import type { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define the configuration object with proper types
const i18nConfig: InitOptions = {
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
};

i18n
  // use i18next-http-backend with its options (optional, if needed)
  .use(Backend)
  // use i18next-browser-languagedetector with its options (optional, if needed)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // initialize i18n using the config
  .init(i18nConfig);

// Export the initialized i18n instance
export default i18n;
