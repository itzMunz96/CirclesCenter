import { NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './icons/Icons'
import { PAGES } from '../data/content'
import '../styles/nav.css'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className={`nav ${isHome ? 'nav--dark' : 'nav--light'}`}>
      <NavLink to="/" className="nav__logo">
        <LogoMark />
        <span className="nav__logo-name">Circles Services Center</span>
      </NavLink>

      <div className="nav__tabs">
        {PAGES.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `nav__tab${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
