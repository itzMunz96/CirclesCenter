import { TradeIllustration, TradeHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './InnerPage.css'

export default function Trade() {
  const { t } = useLanguage()
  const { trade, offices } = t

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero page-hero--trade">
        <div className="page-hero__bg" />
        <TradeHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{trade.circle}</span>
          <h1 className="page-hero__title">{trade.title}</h1>
          <p className="page-hero__slogan">{trade.slogan}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        <div className="split split--flip">
          <div className="split-text">
            <span className="label">{trade.introLabel}</span>
            <h2 className="section-title">{trade.introTitle}</h2>
            {trade.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-visual">
            <TradeIllustration />
          </div>
        </div>

        <span className="label">{trade.servicesLabel}</span>
        <h2 className="section-title">{trade.servicesTitle}</h2>
        <ServicesList items={trade.services} />

        <span className="label" style={{ marginTop: '4rem', display: 'block' }}>{trade.officesLabel}</span>
        <h2 className="section-title">{trade.officesTitle}</h2>
        <div className="offices-strip">
          {offices.map((o) => (
            <div className="office-block" key={o.country}>
              <span className="office-block__flag">{o.flag}</span>
              <div>
                <div className="office-block__country">{o.country}</div>
                <div className="office-block__city">{o.city}</div>
                <div className="office-block__role">{o.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageNavFooter
        label={trade.nextLabel}
        title={trade.next.title}
        to={trade.next.path}
      />
      <SiteFooter />
    </div>
  )
}
