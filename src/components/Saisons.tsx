import { Reveal } from '../lib/motion'
import { saisons } from '../data/content'

const LIEUX = ['Courchevel', 'Festival de Cannes', 'Côte d’Azur', 'Calvi', 'Paris']

/**
 * L'itinéraire de l'année : là où Jean Baptiste travaille, saison
 * par saison. Le bandeau défilant égrène les lieux comme un tableau
 * d'affichage de conciergerie.
 */
export function Saisons() {
  const ligne = LIEUX.map((l) => (
    <span key={l}>
      {l}
      <i aria-hidden="true"> · </i>
    </span>
  ))

  return (
    <section className="section saisons" id="saisons">
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <div className="ticker__half">{ligne}</div>
          <div className="ticker__half">{ligne}</div>
        </div>
      </div>
      <div className="saisons__head">
        <Reveal>
          <p className="eyebrow eyebrow--laiton">Mes saisons</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Je suis là où vous êtes</p>
        </Reveal>
      </div>
      {saisons.map((s, i) => (
        <Reveal key={s.lieu} delay={0.05} className={`saison ${i % 2 ? 'saison--droite' : ''}`}>
          <p className="eyebrow eyebrow--laiton">{s.periode}</p>
          <h3 className="saison__lieu display">{s.lieu}</h3>
          <p className="saison__note">{s.note}</p>
        </Reveal>
      ))}
    </section>
  )
}
