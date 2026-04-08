import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Mining from './pages/Mining'
import Trade from './pages/Trade'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/mining"   element={<Mining />} />
        <Route path="/trade"    element={<Trade />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </>
  )
}
