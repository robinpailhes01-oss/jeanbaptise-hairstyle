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

## Remplacer les visuels provisoires

Les images actuelles sont des visuels générés, en attendant les vraies photos.
Déposer les 4 photos dans `public/images/` sous les noms `photo-01.jpg` à
`photo-04.jpg` (format portrait 3:4 recommandé). Les emplacements « Réel I / II »
sont prêts à recevoir les deux vidéos.

## Modifier les textes

Tout le contenu éditorial (services, protocole, e-mail de contact) est centralisé
dans `src/data/content.ts`.
