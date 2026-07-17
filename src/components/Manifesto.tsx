import { motion, useReducedMotion } from 'motion/react'
import { Reveal, easeCouture } from '../lib/motion'

/**
 * La révélation ligne à ligne est pilotée par le h2 (jamais masqué),
 * pas par les lignes elles-mêmes : sous Safari iOS, un élément glissé
 * hors d'un parent overflow:hidden n'est jamais « visible » pour
 * IntersectionObserver, et l'animation ne partait pas.
 */
export function Manifesto() {
  const reduced = useReducedMotion()

  const line = (children: React.ReactNode) => (
    <span className="manifesto__line">
      <motion.span
        style={{ display: 'block' }}
        variants={
          reduced
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : { hidden: { y: '110%' }, visible: { y: 0 } }
        }
        transition={{ duration: 1.1, ease: easeCouture }}
      >
        {children}
      </motion.span>
    </span>
  )

  return (
    <section className="section manifesto">
      <Reveal>
        <p className="eyebrow eyebrow--laiton">L’idée</p>
      </Reveal>
      <motion.h2
        className="manifesto__text display"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {line('Mon salon, c’est')}
        {line('là où vous êtes. Une suite,')}
        {line(
          <>
            un plateau, <em>chez vous</em>.
          </>,
        )}
      </motion.h2>
      <Reveal delay={0.2}>
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
