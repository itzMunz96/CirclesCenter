import { MiningIllustration, MiningHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './InnerPage.css'

export default function Mining() {
  const { t } = useLanguage()
  const { mining } = t

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero page-hero--mining">
        <div className="page-hero__bg" />
        <MiningHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{mining.circle}</span>
          <h1 className="page-hero__title">{mining.title}</h1>
          <p className="page-hero__slogan">{mining.slogan}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        <div className="split">
          <div className="split-text">
            <span className="label">{mining.introLabel}</span>
            <h2 className="section-title">{mining.introTitle}</h2>
            {mining.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-visual">
            <MiningIllustration />
          </div>
        </div>

        <span className="label">{mining.servicesLabel}</span>
        <h2 className="section-title">{mining.servicesTitle}</h2>
        <ServicesList items={mining.services} />
      </div>

      <PageNavFooter
        label={mining.nextLabel}
        title={mining.next.title}
        to={mining.next.path}
      />
      <SiteFooter />
    </div>
  )
}
