import { useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { easeCouture } from '../lib/motion'

/**
 * En-tête fixe. Il s'efface quand on descend (pour laisser la page
 * respirer) et revient sur un fond léger quand on remonte. Le wordmark
 * n'apparaît qu'une fois le hero quitté.
 */
export function Header() {
  const { scrollY } = useScroll()
  const reduced = useReducedMotion()
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 320)
    setSolid(y > 80)
  })

  const markOpacity = useTransform(scrollY, [400, 700], [0, 1])

  return (
    <motion.header
      className={`header ${solid ? 'header--solid' : ''}`}
      animate={{ y: hidden && !reduced ? '-100%' : '0%' }}
      transition={{ duration: 0.6, ease: easeCouture }}
    >
      <motion.a
        href="#"
        className="header__mark"
        style={{ opacity: markOpacity }}
        aria-label="Jean Baptiste — retour en haut"
      >
        Jean Baptiste
      </motion.a>
      <nav className="header__nav" aria-label="Navigation principale">
        <a className="header__link" href="#conciergerie">
          Ce que je fais
        </a>
        <a className="header__link" href="#images">
          En images
        </a>
        <a className="header__link" href="#protocole">
          Comment ça se passe
        </a>
        <a className="header__link" href="#contact">
          M’écrire
        </a>
      </nav>
    </motion.header>
  )
}
