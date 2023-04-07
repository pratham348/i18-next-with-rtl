import { Html, Head, Main, NextScript } from 'next/document'
import { useTranslation } from 'react-i18next'

export default function Document() {
  const { i18n } = useTranslation()

  return (
    <Html lang={i18n.language} dir={'ltr'}>
      <Head />
      <body lang={i18n.language} dir={'ltr'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

