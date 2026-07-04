import { NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import '../styles/nav.css'

export default function Nav() {
  const { pathname } = useLocation()
  const { t, toggleLang } = useLanguage()
  const isHome = pathname === '/'

  const tabs = [
    { path: '/mining',   label: t.nav.mining },
    { path: '/trade',    label: t.nav.trade },
    { path: '/services', label: t.nav.services },
    { path: '/contact',  label: t.nav.contact },
  ]

  return (
    <nav className={`nav ${isHome ? 'nav--dark' : 'nav--light'}`}>
      <NavLink to="/" className="nav__logo">
        <LogoMark />
        <span className="nav__logo-name">{t.company.name}</span>
      </NavLink>

      <div className="nav__right">
        <div className="nav__tabs">
          {tabs.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav__tab${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button type="button" className="nav__lang" onClick={toggleLang}>
          {t.nav.langSwitch}
        </button>
      </div>
    </nav>
  )
}
