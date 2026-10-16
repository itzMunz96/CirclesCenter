import { Link } from 'react-router-dom'
import {
  LogoMarkLarge, MiningIcon, TradeIcon, ServicesIcon,
  PhoneIconSmall, EmailIconSmall,
} from '../components/icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import './Home.css'

const ICONS = {
  '/mining':   MiningIcon,
  '/trade':    TradeIcon,
  '/services': ServicesIcon,
}

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      {/* Ambient concentric rings.
          Two static SVGs in animated wrappers — animating the HTML wrapper
          lets the GPU composite each as its own layer. Animating the SVG
          circles directly would repaint the whole graphic every frame. */}
      <div className="home__rings" aria-hidden="true">
        <div className="home__rings-layer">
          <svg viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="290" stroke="#8db7c0" strokeWidth="1" />
            <circle cx="300" cy="300" r="155" stroke="#8db7c0" strokeWidth="1" />
          </svg>
        </div>
        <div className="home__rings-layer home__rings-layer--offset">
          <svg viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="220" stroke="#8db7c0" strokeWidth="1" />
            <circle cx="300" cy="300" r="90"  stroke="#8db7c0" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <main className="home__inner">
        <div className="home__logo">
          <LogoMarkLarge />
        </div>

        <p className="home__eyebrow">
          {t.company.name} · {t.home.eyebrowSuffix} {t.company.founded}
        </p>

        <h1 className="home__title">
          {t.home.title1}<br />{t.home.title2}
        </h1>

        <p className="home__tagline">{t.company.tagline}</p>

        <div className="home__cards">
          {t.home.cards.map(({ to, title, sub }) => {
            const Icon = ICONS[to]
            return (
              <Link key={to} to={to} className="home__card">
                <div className="home__card-icon"><Icon /></div>
                <div className="home__card-title">{title}</div>
                <div className="home__card-sub">{sub}</div>
              </Link>
            )
          })}
        </div>
      </main>

      {/* Home footer. Deliberately different from the inner-page SiteFooter:
          that one is a left/right bar, this is centred to match the hero's
          symmetry, and sits on the page background rather than a darker
          band so the screen reads as one composition. */}
      <footer className="home__footer">
        <div className="home__footer-contact">
          <a href={`tel:${t.company.phone.replace(/\s/g, '')}`} className="home__footer-link">
            <PhoneIconSmall />
            {t.company.phone}
          </a>
          <span className="home__footer-sep" aria-hidden="true" />
          <a href={`mailto:${t.company.email}`} className="home__footer-link">
            <EmailIconSmall />
            {t.company.email}
          </a>
        </div>

        <div className="home__footer-meta">
          {t.offices.map((o) => o.city).join(' · ')}
          {' · '}
          © {new Date().getFullYear()} {t.company.nameShort}
          {' · '}
          {t.home.footerSuffix} {t.company.founded}
        </div>
      </footer>
    </div>
  )
}
