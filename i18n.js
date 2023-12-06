// i18n.js
const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
// import a json file from public/locales
// this file will be generated with the command: yarn i18n
const en = require('./public/locales/en.json');
const it = require('./public/locales/it.json');
i18n
  .use(initReactI18next)
  .init({
    defaultLanguage: 'en',
    otherLanguages: ['it'],
    localeSubpaths: {
      en: 'en',
      es: 'it',
    },
    resources: {
      en: {
        translation: en
      },
      it: {
        translation: it
      }
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
    }
  });

module.exports = i18n;
