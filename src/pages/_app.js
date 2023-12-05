import '@/styles/globals.css'
import Navbar from '../../components/Navbar'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
