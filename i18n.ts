import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
 .use(Backend)
 .use(LanguageDetector)
 .use(initReactI18next) // bind react-i18next to the instance
 .init({
  fallbackLng: "ar",
  debug: true,
  backend: {
   /* translation file path */
   loadPath: "/locales/{{lng}}.json"
  },
  preload: ["en"],
  detection: {
   /**
    * 👇 Change user language when:
    * - URL specifies a language, e.g., https://test.com/ar
    * - User enters site and a cookie with language exists
    * - Browser settings top language is supported by the site
    * - HTML element specifies the attribute lang
    */
   order: ["path"]
  },
  keySeparator: false,
  react: {
   useSuspense: false
  },
  interpolation: {
   escapeValue: false,
   formatSeparator: ","
  }
 })

export default i18n
