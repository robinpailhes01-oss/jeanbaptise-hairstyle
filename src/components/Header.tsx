import { motion, useScroll, useTransform } from 'motion/react'

/**
 * En-tête fixe. Le wordmark n'apparaît qu'une fois le hero quitté :
 * c'est la « métamorphose » du wordmark monumental en signature discrète.
 */
export function Header() {
  const { scrollY } = useScroll()
  const markOpacity = useTransform(scrollY, [400, 700], [0, 1])
  const markY = useTransform(scrollY, [400, 700], [8, 0])

  return (
    <header className="header">
      <motion.a
        href="#"
        className="header__mark"
        style={{ opacity: markOpacity, y: markY }}
        aria-label="Jean Baptiste — retour en haut"
      >
        Jean Baptiste
      </motion.a>
      <nav className="header__nav" aria-label="Navigation principale">
        <a className="header__link" href="#conciergerie">
          La Conciergerie
        </a>
        <a className="header__link" href="#images">
          En images
        </a>
        <a className="header__link" href="#protocole">
          Protocole
        </a>
        <a className="header__link" href="#contact">
          Prendre attache
        </a>
      </nav>
    </header>
  )
}
