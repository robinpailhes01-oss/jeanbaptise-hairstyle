import { useEffect } from 'react'
import { EMAIL } from '../data/content'

const SOCIETE = {
  nom: 'Nudes London Limited',
  forme: 'Private Limited Company (société de droit anglais)',
  numero: '16350794',
  adresse: 'PO Box 4385, Cardiff, CF14 8LH, Royaume-Uni',
}

/** Mentions légales & CGV — page sobre, accessible depuis le pied de page. */
export function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="section legal">
      <a className="legal__retour" href="#">
        ← Retour au site
      </a>
      <p className="eyebrow eyebrow--laiton">Le cadre</p>
      <h1 className="legal__title display">Mentions légales &amp; CGV</h1>

      <section className="legal__bloc">
        <h2>Éditeur du site</h2>
        <p>
          {SOCIETE.nom} — {SOCIETE.forme}
          <br />
          Company number : {SOCIETE.numero}
          <br />
          Siège social : {SOCIETE.adresse}
          <br />
          Contact : {EMAIL}
        </p>
      </section>

      <section className="legal__bloc">
        <h2>Hébergement</h2>
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</p>
      </section>

      <section className="legal__bloc">
        <h2>Prestations &amp; réservations</h2>
        <p>
          Les prestations de coiffure sont réalisées sur rendez-vous, au lieu convenu avec
          le client. Chaque demande fait l’objet d’un devis ; la réservation est confirmée
          par écrit après accord sur la date, le lieu et le prix.
        </p>
      </section>

      <section className="legal__bloc">
        <h2>Tarifs &amp; paiement</h2>
        <p>
          Les tarifs sont communiqués sur devis, selon la prestation, le lieu et les
          déplacements. Le paiement s’effectue selon les modalités précisées sur le devis.
        </p>
      </section>

      <section className="legal__bloc">
        <h2>Annulation</h2>
        <p>
          Toute annulation doit être signalée au plus tôt. Une annulation tardive peut
          donner lieu à la facturation des frais déjà engagés, précisés au devis.
        </p>
      </section>

      <section className="legal__bloc">
        <h2>Données personnelles</h2>
        <p>
          Le site ne dépose pas de cookies de suivi. Les informations transmises via le
          formulaire de contact servent uniquement à répondre à votre demande et ne sont
          jamais partagées. Vous pouvez demander leur suppression à tout moment : {EMAIL}.
        </p>
      </section>

      <section className="legal__bloc">
        <h2>Propriété intellectuelle</h2>
        <p>
          Les photographies, vidéos et textes de ce site ne peuvent être reproduits sans
          autorisation écrite préalable.
        </p>
      </section>

      <section className="legal__bloc">
        <h2>Droit applicable</h2>
        <p>
          Les présentes conditions sont soumises au droit applicable au lieu
          d’établissement de l’éditeur. En cas de litige, une solution amiable sera
          recherchée avant toute action.
        </p>
      </section>
    </main>
  )
}
