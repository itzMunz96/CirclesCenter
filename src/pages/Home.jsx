import { Link } from 'react-router-dom'
import { LogoMarkLarge, MiningIcon, TradeIcon, ServicesIcon } from '../components/icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import './Home.css'

const ICONS = [MiningIcon, TradeIcon, ServicesIcon]

export default function Home() {
  const { t } = useLanguage()
  const { company, home, offices } = t

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
        <div className="home__logo">
          <LogoMarkLarge />
        </div>

        <p className="home__eyebrow">
          {company.name} · {home.eyebrowSuffix} {company.founded}
        </p>
        <h1 className="home__title">{home.title1}<br />{home.title2}</h1>
        <p className="home__tagline">{company.tagline}</p>

        {/* Circle entry cards */}
        <div className="home__cards">
          {home.cards.map(({ to, title, sub }, i) => {
            const Icon = ICONS[i]
            return (
              <Link key={to} to={to} className="home__card">
                <div className="home__card-icon">
                  <Icon />
                </div>
                <div className="home__card-title">{title}</div>
                <div className="home__card-sub">{sub}</div>
              </Link>
            )
          })}
        </div>
      </main>

      <footer className="home__footer">
        {offices.map((o) => o.city).join(' · ')} · {home.footerSuffix} {company.founded}
      </footer>
    </div>
  )
}
