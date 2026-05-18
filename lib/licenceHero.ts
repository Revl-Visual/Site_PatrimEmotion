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
  "relative z-10 mx-auto h-[72px] w-[96px] shrink-0 sm:h-[84px] sm:w-[118px] md:h-[92px] md:w-[132px] lg:h-[100px] lg:w-[148px]";

export const LICENCE_HERO_BADGE_IMAGE_SIZE = { width: 148, height: 100 } as const;
