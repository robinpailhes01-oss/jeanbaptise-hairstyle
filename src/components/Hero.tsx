import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { easeCouture } from '../lib/motion'
import { images } from '../data/content'
import { Frame } from './Frame'

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -90])
  const wordmarkOpacity = useTransform(scrollYProgress, [0.35, 0.75], [1, 0])
  const figureY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60])

  const line = (text: string, delay: number, indent?: boolean) => (
    <span className={`hero__line ${indent ? 'hero__line--indent' : ''}`}>
      <motion.span
        style={{ display: 'block' }}
        initial={reduced ? { opacity: 0 } : { y: '105%' }}
        animate={ready ? (reduced ? { opacity: 1 } : { y: 0 }) : {}}
        transition={{ duration: 1.2, delay, ease: easeCouture }}
      >
        {text}
      </motion.span>
    </span>
  )

  return (
    <section className="hero" ref={ref} aria-label="Jean Baptiste, haute coiffure">
      <motion.h1 className="hero__wordmark" style={{ y: wordmarkY, opacity: wordmarkOpacity }}>
        {line('Jean', 0.1)}
        {line('Baptiste', 0.25, true)}
      </motion.h1>

      <motion.div
        className="hero__sub"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.9, ease: easeCouture }}
      >
        <span className="filet" aria-hidden="true" />
        <p className="eyebrow">Coiffeur — je viens à vous, à Paris &amp; partout ailleurs</p>
      </motion.div>

      <motion.figure className="hero__figure" style={{ y: figureY }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Frame src={images.geste} alt="Jean Baptiste sculptant un chignon en backstage" num="I" label="Photographie I" />
        </motion.div>
        <figcaption>En plein travail — backstage</figcaption>
      </motion.figure>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.3 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
        <span>Hôtels · Agences · Shootings · Mariages · Chez vous</span>
      </motion.div>
    </section>
  )
}
