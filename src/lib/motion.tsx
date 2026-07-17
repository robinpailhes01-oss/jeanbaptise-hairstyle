import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export const easeCouture = [0.16, 1, 0.3, 1] as const

/** Fondu + translation douce au scroll. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay, ease: easeCouture }}
    >
      {children}
    </motion.div>
  )
}

/** Révélation en masque, ligne par ligne (le parent doit avoir overflow:hidden). */
export function MaskedLine({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.span
      style={{ display: 'block' }}
      initial={reduced ? { opacity: 0 } : { y: '110%' }}
      whileInView={reduced ? { opacity: 1 } : { y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, delay, ease: easeCouture }}
    >
      {children}
    </motion.span>
  )
}

/** Image qui se révèle : le cadre s'ouvre en clip-path, l'image dé-zoome. */
export function RevealImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string
  alt: string
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={`frame ${className ?? ''}`}
      initial={reduced ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
      whileInView={reduced ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, delay, ease: easeCouture }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={reduced ? {} : { scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.6, delay, ease: easeCouture }}
      />
    </motion.div>
  )
}
