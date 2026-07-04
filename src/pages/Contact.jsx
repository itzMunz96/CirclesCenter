import { Link } from 'react-router-dom'
import { PhoneIcon, EmailIcon, ArrowRight, ContactRings } from '../components/icons/Icons'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const { contact, company, offices } = t

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero__rings" aria-hidden="true">
          <ContactRings />
        </div>
        <div className="contact-hero__content">
          <span className="label label--gold">{contact.label}</span>
          <h1 className="contact-hero__title">{contact.title}</h1>
          <p className="contact-hero__sub">{contact.sub}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card__icon">
              <PhoneIcon />
            </div>
            <span className="label">{contact.phoneLabel}</span>
            <div className="contact-card__value">{company.phone}</div>
            <a className="contact-card__action" href={`tel:${company.phone}`}>
              {contact.phoneAction} <ArrowRight size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <EmailIcon />
            </div>
            <span className="label">{contact.emailLabel}</span>
            <div className="contact-card__value">{company.email}</div>
            <a className="contact-card__action" href={`mailto:${company.email}`}>
              {contact.emailAction} <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <span className="label" style={{ marginTop: '4rem', display: 'block' }}>{contact.officesLabel}</span>
        <h2 className="section-title">{contact.officesTitle}</h2>
        <div className="contact-offices">
          {offices.map((o) => (
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

      {/* Back to home nav */}
      <div className="page-nav-footer">
        <div>
          <div className="page-nav-footer__label">{contact.backLabel}</div>
          <div className="page-nav-footer__title">{contact.backTitle}</div>
        </div>
        <Link to="/" className="page-nav-footer__btn">
          <span>{contact.goHome}</span>
          <ArrowRight />
        </Link>
      </div>

      <SiteFooter />
    </div>
  )
}
