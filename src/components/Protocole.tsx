import { Reveal } from '../lib/motion'
import { protocole, EMAIL } from '../data/content'

export function Protocole() {
  return (
    <section className="section protocole" id="protocole">
      <div className="protocole__head">
        <Reveal>
          <p className="eyebrow eyebrow--laiton">Pour les concierges &amp; les agences</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="protocole__title">Le protocole</h2>
        </Reveal>
      </div>
      <div className="protocole__steps">
        {protocole.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.15} className="protocole__step">
            <span className="protocole__num display">{step.num}</span>
            <h3 className="protocole__name">{step.name}</h3>
            <p className="protocole__desc">{step.desc}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <p className="protocole__note">
          Un dossier de présentation est à la disposition des hôtels et des agences —{' '}
          <a href={`mailto:${EMAIL}?subject=Dossier de présentation`}>sur simple demande</a>.
        </p>
      </Reveal>
    </section>
  )
}
