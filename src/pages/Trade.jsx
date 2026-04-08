import { TradeIllustration, TradeHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { TRADE, OFFICES } from '../data/content'
import './InnerPage.css'

export default function Trade() {
  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero page-hero--trade">
        <div className="page-hero__bg" />
        <TradeHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{TRADE.circle}</span>
          <h1 className="page-hero__title">{TRADE.title}</h1>
          <p className="page-hero__slogan">{TRADE.slogan}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        {/* Split: illustration left, text right */}
        <div className="split split--flip">
          <div className="split-text">
            <span className="label">Global Trade Operations</span>
            <h2 className="section-title">Sudan to the World, and Back</h2>
            {TRADE.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-visual">
            <TradeIllustration />
          </div>
        </div>

        {/* Services */}
        <span className="label">What We Do</span>
        <h2 className="section-title">Trade Services</h2>
        <ServicesList items={TRADE.services} />

        {/* Offices */}
        <span className="label" style={{ marginTop: '4rem', display: 'block' }}>Our Offices</span>
        <h2 className="section-title">Where We Operate</h2>
        <div className="offices-strip">
          {OFFICES.map((o) => (
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
        label="Next Circle"
        title={TRADE.next.label}
        to={TRADE.next.path}
      />
      <SiteFooter />
    </div>
  )
}
