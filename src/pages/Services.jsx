import { ServicesIllustration, ServicesHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { SERVICES } from '../data/content'
import './InnerPage.css'

export default function Services() {
  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero page-hero--services">
        <div className="page-hero__bg" />
        <ServicesHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{SERVICES.circle}</span>
          <h1 className="page-hero__title">{SERVICES.title}</h1>
          <p className="page-hero__slogan">{SERVICES.slogan}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        {/* Split: text + illustration */}
        <div className="split">
          <div className="split-text">
            <span className="label">Business Support</span>
            <h2 className="section-title">Promoting Brands,<br />Connecting Markets</h2>
            {SERVICES.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-visual">
            <ServicesIllustration />
          </div>
        </div>

        {/* Services */}
        <span className="label">What We Do</span>
        <h2 className="section-title">Services Offered</h2>
        <ServicesList items={SERVICES.services} />
      </div>

      <PageNavFooter
        label={SERVICES.next.label === 'Contact' ? 'Get in Touch' : 'Next Circle'}
        title={SERVICES.next.label}
        to={SERVICES.next.path}
      />
      <SiteFooter />
    </div>
  )
}
