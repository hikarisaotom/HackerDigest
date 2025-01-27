import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './en.json';
import es from './es.json';


const fallback = { languageTag: 'en', isRTL: false };

const languageDetector = () => {
  const locales = RNLocalize.getLocales();
  if (Array.isArray(locales) && locales.length > 0) {
    // Detect the device language and return it
    return locales[0].languageTag;
  }
  return fallback.languageTag; // using en as default language
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: languageDetector(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
