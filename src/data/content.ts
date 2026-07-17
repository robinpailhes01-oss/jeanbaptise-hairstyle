/**
 * Contenu éditorial provisoire — à valider avec Jean Baptiste.
 * Les images vivent dans public/images/ : remplacer les fichiers
 * en conservant les mêmes noms.
 */

export const EMAIL = 'contact@jeanbaptiste-coiffure.fr'

export const images = {
  geste: '/images/photo-01.jpg',
  bord: '/images/photo-02.jpg',
  profil: '/images/photo-03.jpg',
  portrait: '/images/photo-04.jpg',
}

/**
 * Couvertures des réels. Quand les fichiers vidéo seront disponibles,
 * les déposer dans public/videos/ sous reel-01.mp4, reel-02.mp4,
 * reel-03.mp4 : ils remplaceront automatiquement les couvertures.
 */
export const reels = [
  { cover: '/images/reel-01.jpg', video: '/videos/reel-01.mp4', title: 'Le chignon tressé' },
  { cover: '/images/reel-02.jpg', video: '/videos/reel-02.mp4', title: 'Les tulipes' },
  { cover: '/images/reel-03.jpg', video: '/videos/reel-03.mp4', title: 'Le jour J' },
]

export type Service = {
  num: string
  name: string
  desc: string
  image?: string
}

export const services: Service[] = [
  {
    num: '01',
    name: 'Palaces & Hôtels',
    desc: 'Le service en suite, pour vos hôtes, du lever au gala.',
    image: images.bord,
  },
  {
    num: '02',
    name: 'Agences & Productions',
    desc: 'Plateaux, shootings, défilés. Une main sûre, à l’heure.',
    image: images.profil,
  },
  {
    num: '03',
    name: 'Particuliers',
    desc: 'À domicile, sur rendez-vous. La discrétion en plus.',
    image: images.geste,
  },
  {
    num: '04',
    name: 'Événements & Mariages',
    desc: 'Le jour où rien ne doit être laissé au hasard.',
    image: images.portrait,
  },
]

export const protocole = [
  {
    num: 'I',
    name: 'La demande',
    desc: 'Un message, une date, un lieu. La conciergerie confirme la disponibilité dans la journée.',
  },
  {
    num: 'II',
    name: 'La préparation',
    desc: 'Préférences, contraintes, repérage. Tout est réglé avant même d’arriver.',
  },
  {
    num: 'III',
    name: 'Le geste',
    desc: 'Jean Baptiste s’installe, œuvre, et s’efface. Il ne reste que la coiffure.',
  },
]
