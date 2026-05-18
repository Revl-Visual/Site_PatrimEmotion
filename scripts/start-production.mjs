/**
 * Démarre Next en production depuis la racine du projet (là où est package.json).
 * Si .next/BUILD_ID est absent, lance npm run build avant next start.
 * Contourne les hébergeurs où le build et le start n'ont pas le même répertoire de travail.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const buildIdPath = join(root, ".next", "BUILD_ID");

process.chdir(root);
console.log(`[PatrimEmotion] Répertoire : ${process.cwd()}`);

function run(command, args, env = process.env) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    env,
    shell: process.platform === "win32",
  });
  return result.status ?? 1;
}

if (!existsSync(buildIdPath)) {
  console.log("[PatrimEmotion] .next/BUILD_ID absent — build en cours…");
  const buildEnv = { ...process.env };
  delete buildEnv.NODE_ENV;
  const code = run("npm", ["run", "build"], buildEnv); // build-hosting (webpack, RAM limitée)
  if (code !== 0) {
    process.exit(code);
  }
  if (!existsSync(buildIdPath)) {
    console.error(
      "[PatrimEmotion] Le build s'est terminé mais .next/BUILD_ID est toujours absent.",
    );
    console.error("Vérifiez que npm run build s'exécute bien dans :", root);
    process.exit(1);
  }
  console.log("[PatrimEmotion] Build OK :", buildIdPath);
} else {
  console.log("[PatrimEmotion] Build trouvé :", buildIdPath);
}

const startCode = run("npx", ["next", "start"], {
  ...process.env,
  NODE_ENV: "production",
});
process.exit(startCode);
