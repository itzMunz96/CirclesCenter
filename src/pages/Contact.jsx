import { Link } from 'react-router-dom'
import { PhoneIcon, EmailIcon, ArrowRight, ContactRings } from '../components/icons/Icons'
import SiteFooter from '../components/SiteFooter'
import { COMPANY, OFFICES } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero__rings" aria-hidden="true">
          <ContactRings />
        </div>
        <div className="contact-hero__content">
          <span className="label label--gold">Reach Out</span>
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__sub">
            We'd love to hear from you. Reach us through any of the channels below.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        {/* Phone & Email cards */}
        <div className="contact-cards">

          <div className="contact-card">
            <div className="contact-card__icon">
              <PhoneIcon />
            </div>
            <span className="label">Phone</span>
            <div className="contact-card__value">{COMPANY.phone}</div>
            <a className="contact-card__action" href={`tel:${COMPANY.phone}`}>
              Call now <ArrowRight size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <EmailIcon />
            </div>
            <span className="label">Email</span>
            <div className="contact-card__value">{COMPANY.email}</div>
            <a className="contact-card__action" href={`mailto:${COMPANY.email}`}>
              Send email <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* Offices */}
        <span className="label" style={{ marginTop: '4rem', display: 'block' }}>Our Offices</span>
        <h2 className="section-title">Where to Find Us</h2>
        <div className="contact-offices">
          {OFFICES.map((o) => (
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
          <div className="page-nav-footer__label">Back to Start</div>
          <div className="page-nav-footer__title">Home</div>
        </div>
        <Link to="/" className="page-nav-footer__btn">
          <span>Go Home</span>
          <ArrowRight />
        </Link>
      </div>

      <SiteFooter />
    </div>
  )
}
