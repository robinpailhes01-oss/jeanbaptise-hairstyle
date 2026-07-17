import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../lib/motion'
import { services } from '../data/content'

/**
 * Index des services, façon index de maison de couture :
 * au survol d'une ligne, sa photographie suit le curseur.
 */
export function Services() {
  const [active, setActive] = useState<number | null>(null)
  const [failed, setFailed] = useState<Record<number, boolean>>({})
  const pos = useRef({ x: 0, y: 0 })
  const [, force] = useState(0)
  const reduced = useReducedMotion()

  const onMove = (e: React.MouseEvent) => {
    pos.current = { x: e.clientX, y: e.clientY }
    force((n) => n + 1)
  }

  const current = active !== null ? services[active] : null
  const showImage = !reduced && current?.image && !failed[active!]

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
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.06} y={20}>
            <li
              className="service-row"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="service-row__inner">
                <span className="service-row__num">{s.num}</span>
                <h3 className="service-row__name">{s.name}</h3>
                <p className="service-row__desc">{s.desc}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {showImage && current && (
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
            <img
              src={current.image}
              alt=""
              onError={() => setFailed((f) => ({ ...f, [active!]: true }))}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
