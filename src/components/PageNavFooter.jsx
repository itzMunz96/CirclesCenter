import { Link } from 'react-router-dom'
import { ArrowRight } from './icons/Icons'
import { useLanguage } from '../i18n/LanguageContext'
import '../styles/footer.css'

export default function PageNavFooter({ label, title, to }) {
  const { t } = useLanguage()

  return (
    <div className="page-nav-footer">
      <div>
        <div className="page-nav-footer__label">{label}</div>
        <div className="page-nav-footer__title">{title}</div>
      </div>
      <Link to={to} className="page-nav-footer__btn">
        <span>{t.common.explore}</span>
        <ArrowRight />
      </Link>
    </div>
  )
}
