/**
 * Contenu éditorial provisoire — à valider avec Jean Baptiste.
 * Les images vivent dans public/images/ : remplacer les fichiers
 * par les vraies photos en conservant les mêmes noms.
 */

export const EMAIL = 'contact@jeanbaptiste-coiffure.fr'

export const images = {
  hero: '/images/photo-01.jpg',
  suite: '/images/photo-02.jpg',
  profil: '/images/photo-03.jpg',
  objets: '/images/photo-04.jpg',
}

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
    image: images.suite,
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
    image: images.hero,
  },
  {
    num: '04',
    name: 'Événements & Mariages',
    desc: 'Le jour où rien ne doit être laissé au hasard.',
    image: images.objets,
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
