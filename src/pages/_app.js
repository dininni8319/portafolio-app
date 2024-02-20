import '@/styles/globals.css'
import Navbar from '../../components/Navbar'
import { appWithTranslation } from 'next-i18next'
import { I18nextProvider } from 'react-i18next'
import { i18n } from '../../i18n'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <ToastContainer />
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default appWithTranslation(App)
