# Jean Baptiste — Conciergerie de Haute Coiffure

## Brief stratégique

- **Offre** : un coiffeur-studio très haut de gamme qui se déplace — suites de palaces,
  plateaux, backstages, domiciles. Vendu comme une *conciergerie de coiffure* aux hôtels,
  agences et productions (B2B), et aux particuliers exigeants.
- **Audience** : concierges & guest relations de palaces, bookers d'agences, directions
  de production, clientèle privée. Ils achètent : discrétion, fiabilité, goût, prestige.
- **Job unique de la page** : donner à un concierge ou une agence l'envie — et le moyen
  immédiat — de prendre attache.
- **Pour** : le geste sûr, le service silencieux, le sur-mesure.
- **Contre** : le salon de masse, le tape-à-l'œil, l'attente.
- **Archétypes** : L'Amant (sensorialité, beauté du geste) × Le Souverain (excellence
  discrète, protocole).

## Direction esthétique

**Remix** : le minimalisme solaire de Jacquemus (ivoire, typographie oversize, vides
généreux, lumière méditerranéenne) × la papeterie de palace (protocole, filets fins,
laiton mat, majuscules espacées).

## Tokens

### Couleur
| Token | Hex | Usage |
|---|---|---|
| `--porcelaine` | `#F3F0EA` | fond dominant |
| `--craie` | `#FAF8F3` | surfaces claires, placeholders |
| `--encre` | `#1A1713` | texte, section finale inversée |
| `--taupe` | `#877E72` | texte secondaire |
| `--laiton` | `#9C7B4F` | accent rare : micro-labels, filets, hover |
| `--ligne` | `rgba(26,23,19,.14)` | hairlines |

### Typographie
- **Display** : Italiana (400) — wordmark, titres monumentaux, chiffres du protocole.
- **Texte / labels** : Archivo (300–500) — corps, majuscules espacées (tracking 0.14–0.22em).
- Échelle display : clamp fluide, wordmark ≈ 15vw.

### Espace & forme
- Base 8px. Sections : 160px desktop / 96px mobile.
- Radius : 0 partout (papeterie). Aucune ombre portée — la profondeur vient de la lumière
  des photos et des hairlines.

### Signature
Le **wordmark monumental** qui occupe le hero et se métamorphose au scroll en wordmark
d'en-tête (crossfade lié au scroll). Tout le reste demeure silencieux autour.

## Système de motion (Motion / motion-react)

1. **Séquence d'ouverture** : voile porcelaine → lettres du wordmark montent en masque
   (stagger 45ms, ease [0.16,1,0.3,1]) → révélation de la photo (clip-path) → labels.
2. **Scroll** : révélations en masque ligne à ligne (manifeste), images scale 1.12→1 dans
   conteneur overflow-hidden, parallaxe douce sur la galerie.
3. **Micro-interactions** : index de services avec image qui suit le curseur, soulignés
   qui se dessinent, bouton magnétique (contact).
4. **`prefers-reduced-motion`** : tout est dégradé en fondus simples.

## Contenu

Copie française provisoire, registre sobre (le client n'a pas encore validé ses textes).
4 photos + 2 réels prévus : emplacements conçus pour peu d'images, traitées en grand.
Visuels actuels = provisoires (générés), à remplacer par les vraies photos dans
`public/images/`.
