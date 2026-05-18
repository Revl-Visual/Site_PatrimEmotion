/**
 * Build adapté aux serveurs à RAM limitée (Infomaniak).
 * Webpack + heap plafonné pour éviter que le processus soit tué pendant la génération des pages.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

const env = {
  ...process.env,
  NODE_OPTIONS: process.env.NODE_OPTIONS ?? "--max-old-space-size=1536",
};
delete env.NODE_ENV;

console.log(`[PatrimEmotion] Build hosting — ${root}`);
console.log(`[PatrimEmotion] NODE_OPTIONS=${env.NODE_OPTIONS}`);

// Turbopack (défaut Next 16). Sur Linux Infomaniak, ajouter --webpack si la RAM reste insuffisante.
const useWebpack = process.argv.includes("--webpack");
const buildArgs = useWebpack ? ["next", "build", "--webpack"] : ["next", "build"];

const result = spawnSync("npx", buildArgs, {
  cwd: root,
  stdio: "inherit",
  env,
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const buildId = join(root, ".next", "BUILD_ID");
if (!existsSync(buildId)) {
  console.error("[PatrimEmotion] Build terminé sans .next/BUILD_ID — processus probablement interrompu.");
  process.exit(1);
}

console.log("[PatrimEmotion] Build OK :", buildId);
