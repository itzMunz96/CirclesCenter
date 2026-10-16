import { MiningIllustration, MiningHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './InnerPage.css'

export default function Mining() {
  const { t } = useLanguage()
  const p = t.mining

  return (
    <div className="page-wrapper">
      <div className="page-hero page-hero--mining">
        <div className="page-hero__bg" />
        <MiningHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{p.circle}</span>
          <h1 className="page-hero__title">{p.title}</h1>
          <p className="page-hero__slogan">{p.slogan}</p>
        </div>
      </div>

      <div className="page-body">
        <div className="split">
          <div className="split-text">
            <span className="label">{p.introLabel}</span>
            <h2 className="section-title">{p.introTitle}</h2>
            {p.intro.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="split-visual">
            <MiningIllustration />
          </div>
        </div>

        <span className="label">{p.servicesLabel}</span>
        <h2 className="section-title">{p.servicesTitle}</h2>
        <ServicesList items={p.services} />
      </div>

      <PageNavFooter label={p.nextLabel} title={p.next.title} to={p.next.path} />
      <SiteFooter />
    </div>
  )
}
