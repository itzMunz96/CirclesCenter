import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import '../styles/nav.css'

export default function Nav() {
  const { pathname } = useLocation()
  const { t, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const isHome = pathname === '/'

  const links = [
    { to: '/',         label: t.nav.home },
    { to: '/mining',   label: t.nav.mining },
    { to: '/trade',    label: t.nav.trade },
    { to: '/services', label: t.nav.services },
    { to: '/contact',  label: t.nav.contact },
  ]

  // Close the drawer whenever the route changes
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const theme = isHome ? 'dark' : 'light'

  return (
    <>
      <nav className={`nav nav--${theme}`}>
        <NavLink to="/" className="nav__logo">
          <LogoMark />
          <span className="nav__logo-name">{t.company.name}</span>
        </NavLink>

        <div className="nav__right">
          {/* Desktop tabs — hidden under 960px */}
          <div className="nav__tabs">
            {links.slice(1).map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav__tab${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button className="nav__lang" onClick={toggleLang}>
            {t.nav.langSwitch}
          </button>

          {/* Hamburger — shown under 960px */}
          <button
            className={`nav__burger${open ? ' open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer nav__drawer--${theme}${open ? ' open' : ''}`}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav__drawer-tab${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div
        className={`nav__backdrop${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
      />
    </>
  )
}
