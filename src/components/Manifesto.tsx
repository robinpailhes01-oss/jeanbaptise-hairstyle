import { MaskedLine, Reveal } from '../lib/motion'

export function Manifesto() {
  return (
    <section className="section manifesto">
      <Reveal>
        <p className="eyebrow eyebrow--laiton">L’idée</p>
      </Reveal>
      <h2 className="manifesto__text display">
        <span className="manifesto__line">
          <MaskedLine>Mon salon, c’est</MaskedLine>
        </span>
        <span className="manifesto__line">
          <MaskedLine delay={0.12}>là où vous êtes — une suite,</MaskedLine>
        </span>
        <span className="manifesto__line">
          <MaskedLine delay={0.24}>
            un plateau, <em>chez vous</em>.
          </MaskedLine>
        </span>
      </h2>
      <Reveal delay={0.3}>
        <p className="manifesto__aside">
          Je m’appelle Jean Baptiste. Je coiffe depuis plus de dix ans, des backstages de
          défilés aux suites d’hôtel. Ce que j’aime : arriver avec mes ciseaux, m’installer
          n’importe où, et vous rendre la vie simple. Vous n’avez rien à préparer — juste à
          être là.
        </p>
      </Reveal>
    </section>
  )
}
