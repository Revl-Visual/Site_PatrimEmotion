/** Fichier dans /public — même nom à chaque mise à jour du visuel. */
export const LOGO_FILE = "/images/logo.png";

/**
 * Incrémenter ce nombre à chaque remplacement du logo sous le même nom de fichier,
 * pour contourner le cache navigateur et le cache image Next.js.
 */
export const LOGO_CACHE_BUSTER = "6";

export const LOGO_SRC = `${LOGO_FILE}?v=${LOGO_CACHE_BUSTER}`;
