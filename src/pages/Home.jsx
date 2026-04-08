import { Link } from 'react-router-dom'
import { LogoMarkLarge, MiningIcon, TradeIcon, ServicesIcon } from '../components/icons/Icons'
import { COMPANY, OFFICES } from '../data/content'
import './Home.css'

const CIRCLES = [
  { to: '/mining',   Icon: MiningIcon,   title: 'Mining',          sub: "Earth's Wealth" },
  { to: '/trade',    Icon: TradeIcon,    title: 'Import & Export', sub: 'Connecting the World' },
  { to: '/services', Icon: ServicesIcon, title: 'Services',        sub: 'Integrated & Professional' },
]

export default function Home() {
  return (
    <div className="home">
      {/* animated concentric rings background */}
      <div className="home__rings" aria-hidden="true">
        <svg viewBox="0 0 600 600" fill="none">
          <circle className="ring" cx="300" cy="300" r="290" stroke="#8db7c0" strokeWidth="1" />
          <circle className="ring" cx="300" cy="300" r="220" stroke="#8db7c0" strokeWidth="1" style={{ animationDelay: '1s' }} />
          <circle className="ring" cx="300" cy="300" r="155" stroke="#8db7c0" strokeWidth="1" style={{ animationDelay: '2s' }} />
          <circle className="ring" cx="300" cy="300" r="90"  stroke="#8db7c0" strokeWidth="1" style={{ animationDelay: '3s' }} />
        </svg>
      </div>

      <main className="home__inner">
        {/* Logo */}
        <div className="home__logo">
          <LogoMarkLarge />
        </div>

        <p className="home__eyebrow">
          {COMPANY.name} · Est. {COMPANY.founded}
        </p>
        <h1 className="home__title">Three Circles.<br />One Vision.</h1>
        <p className="home__tagline">{COMPANY.tagline}</p>

        {/* Circle entry cards */}
        <div className="home__cards">
          {CIRCLES.map(({ to, Icon, title, sub }) => (
            <Link key={to} to={to} className="home__card">
              <div className="home__card-icon">
                <Icon />
              </div>
              <div className="home__card-title">{title}</div>
              <div className="home__card-sub">{sub}</div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="home__footer">
        {OFFICES.map((o) => o.city).join(' · ')} · Est. {COMPANY.founded}
      </footer>
    </div>
  )
}
