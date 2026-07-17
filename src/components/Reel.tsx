import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { easeCouture } from '../lib/motion'

/**
 * Réel : joue la vidéo (muette, en boucle) si le fichier existe,
 * sinon affiche sa couverture. La bague « Réel » signe le format.
 */
export function Reel({ cover, video, title }: { cover: string; video: string; title: string }) {
  const [videoOk, setVideoOk] = useState(false)
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="frame"
      style={{ aspectRatio: '9 / 16' }}
      initial={reduced ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
      whileInView={reduced ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease: easeCouture }}
    >
      <motion.img
        src={cover}
        alt={title}
        initial={reduced ? {} : { scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.6, ease: easeCouture }}
      />
      {!reduced && (
        <video
          src={video}
          muted
          loop
          playsInline
          autoPlay
          onCanPlay={() => setVideoOk(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoOk ? 1 : 0,
            transition: 'opacity 0.6s',
          }}
        />
      )}
      <div className="reel-badge" aria-hidden="true">
        <span className="reel-badge__ring">Réel</span>
      </div>
    </motion.div>
  )
}
