import { useState } from 'react'
import { Reveal } from '../lib/motion'
import { EMAIL } from '../data/content'

const PROFILS = ['Un hôtel', 'Une agence ou une production', 'Un mariage', 'Un particulier']

/**
 * Formulaire de demande : sans serveur, il compose l'e-mail
 * (sujet + corps pré-remplis) et ouvre l'application mail.
 */
function DemandeForm() {
  const [profil, setProfil] = useState(PROFILS[0])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nom = String(data.get('nom') ?? '')
    const date = String(data.get('date') ?? '')
    const lieu = String(data.get('lieu') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = `Demande de rendez-vous — ${profil}${date ? ` — ${date}` : ''}`
    const lignes = ['Bonjour Jean Baptiste,', '', `Je suis : ${profil}`]
    if (nom) lignes.push(`Nom : ${nom}`)
    if (date) lignes.push(`Date souhaitée : ${date}`)
    if (lieu) lignes.push(`Lieu : ${lieu}`)
    if (message) lignes.push('', message)
    const body = lignes.join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="demande" onSubmit={onSubmit}>
      <div className="demande__grid">
        <label className="demande__field">
          <span className="demande__label">Votre nom</span>
          <input className="demande__input" type="text" name="nom" autoComplete="name" required />
        </label>
        <label className="demande__field">
          <span className="demande__label">Vous êtes</span>
          <select
            className="demande__input"
            name="profil"
            value={profil}
            onChange={(e) => setProfil(e.target.value)}
          >
            {PROFILS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="demande__field">
          <span className="demande__label">Date souhaitée</span>
          <input className="demande__input" type="text" name="date" placeholder="Le 14 septembre, ou « à discuter »" />
        </label>
        <label className="demande__field">
          <span className="demande__label">Lieu</span>
          <input className="demande__input" type="text" name="lieu" placeholder="Hôtel, adresse, ville…" />
        </label>
        <label className="demande__field demande__field--full">
          <span className="demande__label">Votre demande</span>
          <textarea
            className="demande__input"
            name="message"
            rows={3}
            placeholder="Dites-moi tout : l’occasion, l’heure, le nombre de personnes…"
          />
        </label>
      </div>
      <button type="submit" className="contact__cta demande__submit">
        Envoyer ma demande
      </button>
      <p className="demande__note">Le bouton ouvre votre messagerie, message déjà prêt.</p>
    </form>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal>
        <p className="eyebrow">Je réponds dans la journée</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="contact__title">Écrivez-moi</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="contact__body">
          Dites-moi la date et le lieu — je m’occupe du reste.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <DemandeForm />
      </Reveal>
      <Reveal delay={0.4}>
        <div className="contact__meta">
          <span>{EMAIL}</span>
          <span>Paris &amp; partout ailleurs</span>
          <span>Sur rendez-vous</span>
        </div>
      </Reveal>
    </section>
  )
}
