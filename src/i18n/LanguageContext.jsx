import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'csc-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem(STORAGE_KEY) || 'en'
  })

  const isRTL = lang === 'ar'

  // Keep <html> in sync for correct text direction and font rendering
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, isRTL])

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))

  const value = {
    lang,
    isRTL,
    toggleLang,
    t: translations[lang],
  }

  return (
    <LanguageContext.Provider value={value}>
      <div className={isRTL ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
