import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from '../locales/en/common.json';
import commonES from '../locales/es/common.json';
import commonPT from '../locales/pt/common.json';

const resources = {
  en: {
    common: commonEN,
  },
  es: {
    common: commonES,
  },
  pt: {
    common: commonPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: ['common'],
  defaultNS: 'common',
  lng: 'pt',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
