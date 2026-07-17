import { motion, useReducedMotion } from 'motion/react'
import { easeCouture } from '../lib/motion'

const MARK = 'JEAN BAPTISTE'

/** Voile d'ouverture : les lettres montent, puis le rideau se lève. */
export function Veil({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <motion.div
        className="veil"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onAnimationComplete={onDone}
      />
    )
  }

  return (
    <motion.div
      className="veil"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1, delay: 1.7, ease: easeCouture }}
      onAnimationComplete={onDone}
    >
      <div className="veil__mark" aria-hidden="true">
        {MARK.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.045, ease: easeCouture }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
