const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'default',
    locales: [
      'default',
      'en', 
      'it',
      'de',
    ],
  },
  localePath: path.resolve('./public/locales'),
}
