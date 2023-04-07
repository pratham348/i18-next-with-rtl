import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../../i18n'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
const App = ({ Component, pageProps }: AppProps) => {
  const { asPath, locale, pathname, replace, query } = useRouter()
  const { i18n: { dir, language } } = useTranslation()
  useEffect(() => {
    // 👇 Synch Next.js locale with i18n language property
    replace({ pathname, query }, asPath, { locale: language })
    // 👇 Flips the document direction if i18n language is RTL based
    document.body.dir = dir()
  }, [language])
  return <Component {...pageProps} />
}
export default App