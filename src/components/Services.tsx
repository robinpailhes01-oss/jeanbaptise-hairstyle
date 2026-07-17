import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Reveal, easeCouture } from '../lib/motion'
import { services } from '../data/content'

/**
 * Index des services, façon index de maison de couture.
 * Chaque ligne s'ouvre (photo + détail + prestations) ; au survol,
 * sur les écrans avec souris, sa photographie suit le curseur.
 */
export function Services() {
  const [open, setOpen] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const pos = useRef({ x: 0, y: 0 })
  const [, force] = useState(0)
  const reduced = useReducedMotion()
  const canHover =
    typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

  const onMove = (e: React.MouseEvent) => {
    pos.current = { x: e.clientX, y: e.clientY }
    force((n) => n + 1)
  }

  const cursor = hovered !== null && open !== hovered ? services[hovered] : null
  const showCursorImage = canHover && !reduced && cursor

  return (
    <section className="section" id="conciergerie" onMouseMove={onMove}>
      <div className="services__head">
        <Reveal>
          <p className="eyebrow eyebrow--laiton">Ce que je fais</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Sur rendez-vous</p>
        </Reveal>
      </div>
      <ul className="services__list">
        {services.map((s, i) => {
          const isOpen = open === i
          return (
            <Reveal key={s.num} delay={i * 0.06} y={20}>
              <li
                className={`service-row ${isOpen ? 'service-row--open' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  type="button"
                  className="service-row__inner"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="service-row__num">{s.num}</span>
                  <span className="service-row__name">{s.name}</span>
                  <span className="service-row__desc">{s.desc}</span>
                  <span className="service-row__toggle" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="service-panel"
                      initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: easeCouture }}
                    >
                      <div className="service-panel__inner">
                        <div className="service-panel__media">
                          <img src={s.image} alt="" loading="lazy" />
                        </div>
                        <div className="service-panel__text">
                          <p className="service-panel__detail">{s.detail}</p>
                          <ul className="service-panel__prestations">
                            {s.prestations.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </Reveal>
          )
        })}
      </ul>

      <AnimatePresence>
        {showCursorImage && cursor && (
          <motion.div
            className="service-row__image"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: pos.current.x + 24,
              y: pos.current.y - 160,
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ opacity: { duration: 0.35 }, scale: { duration: 0.35 }, x: { duration: 0.4, ease: 'easeOut' }, y: { duration: 0.4, ease: 'easeOut' } }}
          >
            <img src={cursor.image} alt="" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
