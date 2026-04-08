import { Link } from 'react-router-dom'
import { ArrowRight } from './icons/Icons'
import '../styles/footer.css'

export default function PageNavFooter({ label, title, to }) {
  return (
    <div className="page-nav-footer">
      <div>
        <div className="page-nav-footer__label">{label}</div>
        <div className="page-nav-footer__title">{title} →</div>
      </div>
      <Link to={to} className="page-nav-footer__btn">
        <span>Explore</span>
        <ArrowRight />
      </Link>
    </div>
  )
}
