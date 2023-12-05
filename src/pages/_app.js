import '@/styles/globals.css'
import Navbar from '../../components/Navbar'
import { appWithTranslation } from 'next-i18next'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default appWithTranslation(App)
