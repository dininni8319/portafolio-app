const { i18n } = require('i18n');

module.exports = {
  i18n,
  defaultLanguage: 'en',
  otherLanguages: ['it'], // Add other languages as needed
  localePath: 'public/locales',
  localeSubpaths: {
    en: 'en',
    fr: 'it',
  },
};

