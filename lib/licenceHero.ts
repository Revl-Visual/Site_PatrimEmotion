/** Visuels hero licences — `public/images/licences/` */

export const LICENCE_HERO_IMAGES = [
  {
    src: "/images/licences/Licencie_fondateur.png",
    alt: "Licencié fondateur PatrimEmotion®",
  },
  {
    src: "/images/licences/licencie_certifie.png",
    alt: "Licencié certifié PatrimEmotion®",
  },
  {
    src: "/images/licences/licencie_confirme.png",
    alt: "Licencié confirmé PatrimEmotion®",
  },
  {
    src: "/images/licences/cabinet_expert.png",
    alt: "Cabinet expert PatrimEmotion®",
  },
  {
    src: "/images/licences/licencie_institutionnel.png",
    alt: "Licencié institutionnel PatrimEmotion®",
  },
] as const;

/** Hero : 1) fondateur seul, 2) certifié / confirmé / expert, 3) institutionnel seul */
export const LICENCE_HERO_ROW_FONDATEUR = LICENCE_HERO_IMAGES[0];
export const LICENCE_HERO_ROW_TROIS = LICENCE_HERO_IMAGES.slice(1, 4);
export const LICENCE_HERO_ROW_INSTITUTIONNEL = LICENCE_HERO_IMAGES[4];

/** Même taille pour tous les badges hero (alignée sur la ligne centrale à 3 colonnes) */
export const LICENCE_HERO_BADGE_FRAME_CLASS =
  "relative h-[92px] w-full max-w-[120px] sm:h-[112px] sm:max-w-[168px] md:h-[124px] md:max-w-[190px] lg:h-[132px] lg:max-w-[200px]";
