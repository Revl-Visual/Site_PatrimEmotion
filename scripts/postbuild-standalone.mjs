/**
 * Copie public/ et .next/static vers .next/standalone/ (mode output: standalone).
 * Utile sur VPS Infomaniak : démarrer avec `node .next/standalone/server.js`.
 */
import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.log("[postbuild] Pas de dossier .next/standalone — ignoré.");
  process.exit(0);
}

cpSync(join(root, "public"), join(standalone, "public"), { recursive: true });
cpSync(join(root, ".next", "static"), join(standalone, ".next", "static"), {
  recursive: true,
});
console.log("[postbuild] public/ et .next/static/ copiés dans .next/standalone/");
