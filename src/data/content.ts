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
    desc: 'Je viens coiffer vos hôtes dans leur suite, du matin au soir de gala.',
    detail:
      'Vos hôtes me retrouvent dans leur suite, à l’heure qui les arrange. Je travaille en silence, je laisse la chambre impeccable — et votre conciergerie ne reçoit que des compliments.',
    prestations: ['Brushing & coiffage', 'Chignons du soir', 'Coupe en suite', 'Forfaits séjour'],
    image: images.bord,
  },
  {
    num: '02',
    name: 'Agences & Productions',
    desc: 'Shootings, plateaux, défilés : je suis là avant l’heure, prêt.',
    detail:
      'Un plateau qui tourne n’attend pas. J’arrive avant l’équipe, je suis la lumière, et je tiens la coiffure toute la journée — retouches comprises.',
    prestations: ['Shootings & campagnes', 'Défilés & showrooms', 'Clips & tournages', 'Direction coiffure'],
    image: images.profil,
  },
  {
    num: '03',
    name: 'Particuliers',
    desc: 'Je viens chez vous, en toute discrétion. Le salon en moins, le confort en plus.',
    detail:
      'Chez vous, au calme. On prend le temps de parler de vos cheveux, de ce qui vous va vraiment — et je coiffe pendant que le café passe.',
    prestations: ['Coupe & coiffage', 'Couleur & soin', 'Avant un événement', 'Rendez-vous réguliers'],
    image: images.geste,
  },
  {
    num: '04',
    name: 'Événements & Mariages',
    desc: 'Le grand jour, j’arrive tôt et je reste le temps qu’il faut.',
    detail:
      'Un mariage se joue le matin. J’arrive tôt, je coiffe la mariée puis ceux qui comptent, et je reste pour la retouche juste avant les photos.',
    prestations: ['Essai coiffure', 'Jour J à domicile', 'Cortège & invités', 'Retouches sur place'],
    image: '/images/reel-02.jpg',
  },
]

/** Les saisons de Jean Baptiste — son itinéraire de l'année. */
export const saisons = [
  {
    periode: 'L’hiver',
    lieu: 'Courchevel',
    note: 'Les chalets et les palaces des neiges. Je coiffe au coin du feu, avant le dîner.',
  },
  {
    periode: 'En mai',
    lieu: 'Cannes',
    note: 'Le Festival : montées des marches, shootings, retouches de dernière minute dans les suites.',
  },
  {
    periode: 'L’été',
    lieu: 'Calvi, en Corse',
    note: 'Villas, bateaux, mariages. Les plus belles coiffures sont celles qui tiennent face au vent.',
  },
  {
    periode: 'Toute l’année',
    lieu: 'Paris & ailleurs',
    note: 'Je voyage léger. Dites-moi où vous êtes, j’arrive.',
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
