import { useState } from 'react'
import { Veil } from './components/Veil'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Protocole } from './components/Protocole'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [veilDone, setVeilDone] = useState(false)

  return (
    <>
      {!veilDone && <Veil onDone={() => setVeilDone(true)} />}
      <Header />
      <main>
        <Hero ready />
        <Manifesto />
        <Services />
        <Gallery />
        <Protocole />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
