import { useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../lib/motion'
import { EMAIL } from '../data/content'

/** Bouton magnétique : attiré doucement par le curseur. */
function MagneticCta() {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <a
      ref={ref}
      className="contact__cta"
      href={`mailto:${EMAIL}?subject=Demande de rendez-vous`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.5s, color 0.5s' }}
    >
      Écrire à la conciergerie
    </a>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal>
        <p className="eyebrow">Réponse dans la journée</p>
      </Reveal>
      <Reveal delay={0.1}>
        <motion.h2 className="contact__title">Prendre attache</motion.h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="contact__body">
          Pour un hôte, un plateau, un défilé ou un jour qui compte : une date, un lieu,
          une intention suffisent.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <MagneticCta />
      </Reveal>
      <Reveal delay={0.4}>
        <div className="contact__meta">
          <span>{EMAIL}</span>
          <span>Paris &amp; partout ailleurs</span>
          <span>Sur rendez-vous uniquement</span>
        </div>
      </Reveal>
    </section>
  )
}
