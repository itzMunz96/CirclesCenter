import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('csc-lang') || 'en'
  })

  const isRTL = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    localStorage.setItem('csc-lang', lang)
  }, [lang, isRTL])

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, isRTL, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
