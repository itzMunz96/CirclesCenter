import { PhoneIconSmall, EmailIconSmall } from './icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import '../styles/footer.css'

export default function SiteFooter() {
  const { t } = useLanguage()
  const { company } = t

  return (
    <footer className="site-footer">
      <span className="site-footer__brand">{company.name}</span>

      <div className="site-footer__contacts">
        <a className="site-footer__item" href={`tel:${company.phone}`}>
          <PhoneIconSmall />
          {company.phone}
        </a>
        <a className="site-footer__item" href={`mailto:${company.email}`}>
          <EmailIconSmall />
          {company.email}
        </a>
      </div>

      <span className="site-footer__copy">
        © {new Date().getFullYear()} {company.nameShort}
      </span>
    </footer>
  )
}
