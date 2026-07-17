/**
 * Contenu éditorial — voix de Jean Baptiste, première personne.
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
    desc: 'Je viens coiffer vos hôtes dans leur suite, du matin au soir de gala.',
    image: images.bord,
  },
  {
    num: '02',
    name: 'Agences & Productions',
    desc: 'Shootings, plateaux, défilés : je suis là avant l’heure, prêt.',
    image: images.profil,
  },
  {
    num: '03',
    name: 'Particuliers',
    desc: 'Je viens chez vous, en toute discrétion. Le salon en moins, le confort en plus.',
    image: images.geste,
  },
  {
    num: '04',
    name: 'Événements & Mariages',
    desc: 'Le grand jour, j’arrive tôt et je reste le temps qu’il faut.',
    image: images.portrait,
  },
]

export const protocole = [
  {
    num: 'I',
    name: 'Vous m’écrivez',
    desc: 'Une date, un lieu, une envie. Je vous réponds dans la journée.',
  },
  {
    num: 'II',
    name: 'On prépare',
    desc: 'On échange, je note vos préférences, et j’arrive avec tout ce qu’il faut.',
  },
  {
    num: 'III',
    name: 'Je coiffe',
    desc: 'Je m’installe, je coiffe, je range. Il ne reste que le plaisir d’être bien coiffé.',
  },
]
