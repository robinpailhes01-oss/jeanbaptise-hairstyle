import { Reveal } from '../lib/motion'
import { images, reels } from '../data/content'
import { Frame } from './Frame'
import { Reel } from './Reel'

/**
 * Galerie éditoriale pensée pour peu d'images : 4 photographies,
 * 3 réels — chacune traitée en grand, en quinconce.
 */
export function Gallery() {
  return (
    <section className="section gallery" id="images">
      <div className="gallery__head">
        <Reveal>
          <p className="eyebrow eyebrow--laiton">En images</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Photographies &amp; réels</p>
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
          <Reel {...reels[0]} />
          <p className="gallery__caption">
            <span>{reels[0].title}</span>
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
          <Reel {...reels[1]} />
          <p className="gallery__caption">
            <span>{reels[1].title}</span>
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
        <div className="gallery__item--f">
          <Reel {...reels[2]} />
          <p className="gallery__caption">
            <span>{reels[2].title}</span>
            <span>Réel III</span>
          </p>
        </div>
      </div>
    </section>
  )
}
