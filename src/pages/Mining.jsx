import { MiningIllustration, MiningHeroDeco } from '../components/icons/Icons'
import ServicesList from '../components/ServicesList'
import PageNavFooter from '../components/PageNavFooter'
import SiteFooter from '../components/SiteFooter'
import { MINING } from '../data/content'
import './InnerPage.css'

export default function Mining() {
  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero page-hero--mining">
        <div className="page-hero__bg" />
        <MiningHeroDeco />
        <div className="page-hero__content">
          <span className="label label--gold">{MINING.circle}</span>
          <h1 className="page-hero__title">{MINING.title}</h1>
          <p className="page-hero__slogan">{MINING.slogan}</p>
        </div>
      </div>

      {/* Body */}
      <div className="page-body">

        {/* Split: text + illustration */}
        <div className="split">
          <div className="split-text">
            <span className="label">Our Core Activity</span>
            <h2 className="section-title">Exploring Sudan's Mineral Potential</h2>
            {MINING.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-visual">
            <MiningIllustration />
          </div>
        </div>

        {/* Services */}
        <span className="label">What We Do</span>
        <h2 className="section-title">Mining Services</h2>
        <ServicesList items={MINING.services} />
      </div>

      <PageNavFooter
        label="Next Circle"
        title={MINING.next.label}
        to={MINING.next.path}
      />
      <SiteFooter />
    </div>
  )
}
