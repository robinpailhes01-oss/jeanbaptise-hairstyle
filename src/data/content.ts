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
  detail: string
  prestations: string[]
  image: string
}

export const services: Service[] = [
  {
    num: '01',
    name: 'Palaces & Hôtels',
    desc: 'Vos hôtes, coiffés dans leur suite.',
    detail:
      'À l’heure qui arrange vos hôtes. Je travaille en silence, je laisse la chambre impeccable.',
    prestations: ['Brushing & coiffage', 'Chignons du soir', 'Coupe en suite', 'Forfaits séjour'],
    image: images.bord,
  },
  {
    num: '02',
    name: 'Agences & Productions',
    desc: 'Shootings, plateaux, défilés.',
    detail:
      'J’arrive avant l’équipe et je tiens la coiffure toute la journée, retouches comprises.',
    prestations: ['Shootings & campagnes', 'Défilés & showrooms', 'Clips & tournages', 'Direction coiffure'],
    image: images.profil,
  },
  {
    num: '03',
    name: 'Particuliers',
    desc: 'Chez vous, en toute discrétion.',
    detail:
      'On parle de ce qui vous va vraiment, et je coiffe pendant que le café passe.',
    prestations: ['Coupe & coiffage', 'Couleur & soin', 'Avant un événement', 'Rendez-vous réguliers'],
    image: images.geste,
  },
  {
    num: '04',
    name: 'Événements & Mariages',
    desc: 'Le grand jour, je suis là.',
    detail:
      'J’arrive tôt, je coiffe la mariée, et je reste pour la retouche d’avant les photos.',
    prestations: ['Essai coiffure', 'Jour J à domicile', 'Cortège & invités', 'Retouches sur place'],
    image: '/images/reel-02.jpg',
  },
]

/** Les saisons de Jean Baptiste — son itinéraire de l'année. */
export const saisons = [
  {
    periode: 'L’hiver',
    lieu: 'Courchevel',
    note: 'Chalets & palaces des neiges.',
  },
  {
    periode: 'En mai',
    lieu: 'Cannes',
    note: 'Le Festival, des marches aux suites.',
  },
  {
    periode: 'L’été',
    lieu: 'Calvi, en Corse',
    note: 'Villas, bateaux, mariages.',
  },
  {
    periode: 'Toute l’année',
    lieu: 'Paris & ailleurs',
    note: 'Dites-moi où vous êtes, j’arrive.',
  },
]

export const protocole = [
  {
    num: 'I',
    name: 'Vous m’écrivez',
    desc: 'Une date, un lieu. Je réponds dans la journée.',
  },
  {
    num: 'II',
    name: 'On prépare',
    desc: 'Je note vos préférences, j’arrive avec tout.',
  },
  {
    num: 'III',
    name: 'Je coiffe',
    desc: 'Je m’installe, je coiffe, je m’efface.',
  },
]
