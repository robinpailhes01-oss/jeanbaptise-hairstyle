# Jean Baptiste — Conciergerie de Haute Coiffure

Site vitrine haut de gamme : un coiffeur-studio qui se déplace — palaces, agences,
productions, particuliers. Direction artistique sobre et chic (voir `DESIGN.md`).

## Lancer le projet

```bash
npm install
npm run dev      # développement
npm run build    # build de production (dist/)
npm run preview  # prévisualiser le build
```

## Visuels

Les 4 photographies de Jean Baptiste sont dans `public/images/`
(`photo-01.jpg` à `photo-04.jpg`) — pour en changer une, remplacer le fichier
en gardant le même nom. Les couvertures des 3 réels (`reel-01.jpg` à
`reel-03.jpg`) s'animeront dès que les vidéos seront déposées dans
`public/videos/` (`reel-01.mp4` à `reel-03.mp4`, format 9:16).

## Modifier les textes

Tout le contenu éditorial (services, protocole, e-mail de contact) est centralisé
dans `src/data/content.ts`.
