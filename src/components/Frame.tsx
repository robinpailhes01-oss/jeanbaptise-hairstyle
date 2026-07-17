import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { easeCouture } from '../lib/motion'

/**
 * Cadre photo : affiche l'image si elle existe, sinon un emplacement
 * élégant numéroté (les vraies photos remplaceront les fichiers
 * de public/images/ sans toucher au code).
 */
export function Frame({
  src,
  alt,
  num,
  label,
  className,
  reel = false,
}: {
  src?: string
  alt: string
  num: string
  label: string
  className?: string
  reel?: boolean
}) {
  const [missing, setMissing] = useState(!src)
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={`frame ${missing ? 'frame--placeholder' : ''} ${className ?? ''}`}
      initial={reduced ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
      whileInView={reduced ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease: easeCouture }}
      style={reel ? { aspectRatio: '9 / 16' } : { aspectRatio: '3 / 4' }}
    >
      {!missing && src ? (
        <motion.img
          src={src}
          alt={alt}
          onError={() => setMissing(true)}
          initial={reduced ? {} : { scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.6, ease: easeCouture }}
        />
      ) : (
        <>
          <span className="frame__num display">{num}</span>
          <span className="frame__label">{label}</span>
        </>
      )}
      {reel && (
        <div className="reel-badge" aria-hidden="true">
          <span className="reel-badge__ring">Réel</span>
        </div>
      )}
    </motion.div>
  )
}
