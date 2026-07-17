import { MaskedLine, Reveal } from '../lib/motion'

export function Manifesto() {
  return (
    <section className="section manifesto">
      <Reveal>
        <p className="eyebrow eyebrow--laiton">Le principe</p>
      </Reveal>
      <h2 className="manifesto__text display">
        <span className="manifesto__line">
          <MaskedLine>Le salon n’a plus</MaskedLine>
        </span>
        <span className="manifesto__line">
          <MaskedLine delay={0.12}>d’adresse. Il se déplace,</MaskedLine>
        </span>
        <span className="manifesto__line">
          <MaskedLine delay={0.24}>
            <em>en silence</em>, là où vous êtes.
          </MaskedLine>
        </span>
      </h2>
      <Reveal delay={0.3}>
        <p className="manifesto__aside">
          Jean Baptiste coiffe là où on l’attend : une suite au petit matin, un plateau
          avant la lumière, un salon privé la veille d’un soir important. Une seule
          exigence, la même partout — le geste juste, sans bruit.
        </p>
      </Reveal>
    </section>
  )
}
