import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Mining from './pages/Mining'
import Trade from './pages/Trade'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { useLanguage } from './i18n/LanguageContext'

export default function App() {
  const { pathname } = useLocation()
  const { isRTL } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Nav />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/mining"   element={<Mining />} />
        <Route path="/trade"    element={<Trade />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </div>
  )
}
