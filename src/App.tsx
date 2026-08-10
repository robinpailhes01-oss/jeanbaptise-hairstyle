import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Veil } from './components/Veil'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Saisons } from './components/Saisons'
import { Protocole } from './components/Protocole'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Legal } from './components/Legal'

export default function App() {
  const [veilDone, setVeilDone] = useState(false)
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Défilement inertiel doux (désactivé si l'utilisateur préfère moins de mouvement)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09, anchors: true })
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  if (route === '#/mentions') {
    return (
      <>
        <Legal />
        <Footer />
      </>
    )
  }

  return (
    <>
      {!veilDone && <Veil onDone={() => setVeilDone(true)} />}
      <Header />
      <main>
        <Hero ready />
        <Manifesto />
        <Services />
        <Gallery />
        <Saisons />
        <Protocole />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
