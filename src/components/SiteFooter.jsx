import { PhoneIconSmall, EmailIconSmall } from './icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import '../styles/footer.css'

export default function SiteFooter() {
  const { t } = useLanguage()
  const { name, nameShort, phone, email, founded } = t.company

  return (
    <footer className="site-footer">
      <span className="site-footer__brand">{name}</span>

      <div className="site-footer__contacts">
        <a className="site-footer__item" href={`tel:${phone.replace(/\s/g, '')}`}>
          <PhoneIconSmall />
          {phone}
        </a>
        <a className="site-footer__item" href={`mailto:${email}`}>
          <EmailIconSmall />
          {email}
        </a>
      </div>

      <span className="site-footer__copy">
        © {new Date().getFullYear()} {nameShort} · {founded}
      </span>
    </footer>
  )
}
