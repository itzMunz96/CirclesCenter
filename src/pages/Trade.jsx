import { TradeIllustration, TradeHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { useLanguage } from '../i18n/LanguageContext'
import './InnerPage.css'

export default function Trade() {
  const { t } = useLanguage()
  const p = t.trade

  return (
    <div className="page-wrapper">
      <div className="page-hero page-hero--trade">
        <div className="page-hero__bg" />
        <TradeHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{p.circle}</span>
          <h1 className="page-hero__title">{p.title}</h1>
          <p className="page-hero__slogan">{p.slogan}</p>
        </div>
      </div>

      <div className="page-body">
        <div className="split split--flip">
          <div className="split-text">
            <span className="label">{p.introLabel}</span>
            <h2 className="section-title">{p.introTitle}</h2>
            {p.intro.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="split-visual">
            <TradeIllustration />
          </div>
        </div>

        <span className="label">{p.servicesLabel}</span>
        <h2 className="section-title">{p.servicesTitle}</h2>
        <ServicesList items={p.services} />

        <span className="label" style={{ marginTop: 'var(--block-gap)' }}>{p.officesLabel}</span>
        <h2 className="section-title">{p.officesTitle}</h2>
        <div className="offices-strip">
          {t.offices.map((o) => (
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

      <PageNavFooter label={p.nextLabel} title={p.next.title} to={p.next.path} />
      <SiteFooter />
    </div>
  )
}
