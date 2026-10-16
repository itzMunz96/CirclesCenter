import { Link } from 'react-router-dom'
import { PhoneIcon, EmailIcon, ArrowRight, ContactRings } from '../components/icons/Icons'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const { phone, email } = t.company

  return (
    <div className="page-wrapper">

      <div className="contact-hero">
        <div className="contact-hero__rings" aria-hidden="true">
          <ContactRings />
        </div>
        <span className="label label--gold">{c.label}</span>
        <h1 className="contact-hero__title">{c.title}</h1>
        <p className="contact-hero__sub">{c.sub}</p>
      </div>

      <div className="contact-body">

        <div className="contact-cards">
          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card__icon"><PhoneIcon /></div>
            <div className="contact-card__label">{c.phoneLabel}</div>
            <div className="contact-card__value">{phone}</div>
            <a className="contact-card__action" href={`tel:${phone.replace(/\s/g, '')}`}>
              {c.phoneAction}
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-card__icon"><EmailIcon /></div>
            <div className="contact-card__label">{c.emailLabel}</div>
            <div className="contact-card__value">{email}</div>
            <a className="contact-card__action" href={`mailto:${email}`}>
              {c.emailAction}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <span className="label">{c.officesLabel}</span>
        <h2 className="section-title">{c.officesTitle}</h2>
        <div className="contact-offices">
          {t.offices.map((o) => (
            <div className="contact-office" key={o.country}>
              <span className="contact-office__flag">{o.flag}</span>
              <div>
                <div className="contact-office__country">{o.country}</div>
                <div className="contact-office__city">{o.city}</div>
                <div className="contact-office__role">{o.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-nav-footer">
        <div>
          <div className="page-nav-footer__label">{c.backLabel}</div>
          <div className="page-nav-footer__title">{c.backTitle}</div>
        </div>
        <Link to="/" className="page-nav-footer__btn">
          <span>{c.goHome}</span>
          <ArrowRight />
        </Link>
      </div>

      <SiteFooter />
    </div>
  )
}
