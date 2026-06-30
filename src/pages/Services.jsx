import { ServicesIllustration, ServicesHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './InnerPage.css'

export default function Services() {
  const { t } = useLanguage()
  const { services } = t

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero page-hero--services">
        <div className="page-hero__bg" />
        <ServicesHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{services.circle}</span>
          <h1 className="page-hero__title">{services.title}</h1>
          <p className="page-hero__slogan">{services.slogan}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        <div className="split">
          <div className="split-text">
            <span className="label">{services.introLabel}</span>
            <h2 className="section-title">{services.introTitle}</h2>
            {services.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-visual">
            <ServicesIllustration />
          </div>
        </div>

        <span className="label">{services.servicesLabel}</span>
        <h2 className="section-title">{services.servicesTitle}</h2>
        <ServicesList items={services.services} />
      </div>

      <PageNavFooter
        label={services.nextLabel}
        title={services.next.title}
        to={services.next.path}
      />
      <SiteFooter />
    </div>
  )
}
