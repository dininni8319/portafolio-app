// i18n.js
const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
// import a json file from public/locales
// this file will be generated with the command: yarn i18n
const en = require('./public/locales/en.json');
const it = require('./public/locales/it.json');
const de = require('./public/locales/de.json');
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    languages: ['en','it', 'de'],
    debug: false,
    lng: "en",
    resources: {
      en: {
        translation: en
      },
      it: {
        translation: it
      },
      de: {
        translation: de
      }
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
    }
  });

module.exports = i18n;
