import { Link } from 'react-router-dom'
import { PhoneIconSmall, EmailIconSmall } from './icons/Icons'
import { COMPANY } from '../data/content'
import '../styles/footer.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="site-footer__brand">{COMPANY.name}</span>

      <div className="site-footer__contacts">
        <a className="site-footer__item" href={`tel:${COMPANY.phone}`}>
          <PhoneIconSmall />
          {COMPANY.phone}
        </a>
        <a className="site-footer__item" href={`mailto:${COMPANY.email}`}>
          <EmailIconSmall />
          {COMPANY.email}
        </a>
      </div>

      <span className="site-footer__copy">
        © {new Date().getFullYear()} {COMPANY.nameShort} · Est. {COMPANY.founded}
      </span>
    </footer>
  )
}
