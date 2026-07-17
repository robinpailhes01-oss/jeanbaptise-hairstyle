import { Reveal } from '../lib/motion'
import { images } from '../data/content'
import { Frame } from './Frame'

/**
 * Galerie éditoriale pensée pour peu d'images : 4 photographies,
 * 2 réels — chacune traitée en grand, en quinconce.
 */
export function Gallery() {
  return (
    <section className="section gallery" id="images">
      <div className="gallery__head">
        <Reveal>
          <p className="eyebrow eyebrow--laiton">En images</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Quatre photographies — deux réels</p>
        </Reveal>
      </div>
      <div className="gallery__grid">
        <div className="gallery__item--a">
          <Frame src={images.profil} alt="Carré ondulé, de profil, face à la mer" num="III" label="Photographie III" />
          <p className="gallery__caption">
            <span>Le carré — Riviera</span>
            <span>III / IV</span>
          </p>
        </div>
        <div className="gallery__item--b">
          <Frame alt="Réel — le geste en mouvement" num="I" label="Réel I — à venir" reel />
          <p className="gallery__caption">
            <span>En mouvement</span>
            <span>Réel I</span>
          </p>
        </div>
        <div className="gallery__item--c">
          <Frame src={images.portrait} alt="Portrait de Jean Baptiste" num="IV" label="Photographie IV" />
          <p className="gallery__caption">
            <span>Jean Baptiste</span>
            <span>IV / IV</span>
          </p>
        </div>
        <div className="gallery__item--d">
          <Frame alt="Réel — en suite" num="II" label="Réel II — à venir" reel />
          <p className="gallery__caption">
            <span>En suite</span>
            <span>Réel II</span>
          </p>
        </div>
        <div className="gallery__item--e">
          <Frame src={images.bord} alt="À bord, en déplacement" num="II" label="Photographie II" />
          <p className="gallery__caption">
            <span>À bord — en déplacement</span>
            <span>II / IV</span>
          </p>
        </div>
      </div>
    </section>
  )
}
