# Déploiement PatrimEmotion sur Infomaniak

## Diagnostic de vos logs

Si vous voyez :

```text
> node-basic-landing@0.0.1 start
> nest start
```

**ce n’est pas ce projet.** Infomaniak exécute encore le **modèle NestJS** fourni par défaut (`node-basic-landing`), pas le site PatrimEmotion (Next.js).

Ce dépôt s’appelle **`patrim-emotion-site`** et démarre avec **`next start`**, jamais `nest start`.

Les erreurs `Cannot find module 'ansis'` / `commander` / `nest: not found` viennent de ce mauvais projet ou d’un `node_modules` corrompu mélangé sur le serveur.

Les erreurs TypeScript sur `Site_PatrimEmotion/app/...` indiquent souvent que la **racine de l’application** dans le Manager pointe vers le **mauvais dossier** (dossier parent au lieu du dossier qui contient `package.json`).

---

## Configuration dans le Manager Infomaniak (Node.js)

| Paramètre | Valeur |
|-----------|--------|
| **Racine de l’application** | Dossier qui contient **directement** `package.json` (`patrim-emotion-site`) — pas un parent |
| **Version Node.js** | **20 LTS** (éviter Node 24 pour Next.js 15) |
| **Commande d’installation** | `npm ci` |
| **Commande de build** | `npm run build` |
| **Commande de démarrage** | `npm start` |
| **Variable `NODE_ENV`** | `production` |
| **Variable `PORT`** | Laisser celle imposée par Infomaniak (ne pas inventer) |

Ne pas utiliser le modèle **NestJS** / **node-basic-landing**. Créez une application Node.js **vide / personnalisée** ou modifiez les commandes ci-dessus.

---

## Remise à zéro du serveur (recommandé)

1. Dans le Manager, **supprimez** l’ancienne app Node ou videz `/srv/customer/sites/patrimemotion.fr/`.
2. Uploadez **uniquement** le contenu de ce dossier (`Site_PatrimEmotion`) : `app/`, `components/`, `lib/`, `public/`, `package.json`, `package-lock.json`, etc.
3. **Ne pas** uploader `node_modules` depuis Windows — laisser `npm ci` sur le serveur Linux.
4. Vérifiez qu’il n’y a **plus** de `nest-cli.json`, ni de `package.json` avec `"name": "node-basic-landing"`.

---

## Vérification après déploiement

Dans les logs au démarrage, vous devez voir :

```text
> patrim-emotion-site@0.1.0 start
> next start ...
```

et **pas** `nest start`.

Test SSH (si disponible) :

```bash
cd /srv/customer/sites/patrimemotion.fr
cat package.json | head -5    # "name": "patrim-emotion-site"
npm ci
npm run build
npm start
```

---

## Mode standalone (VPS)

Le build produit `.next/standalone/`. Le script `postbuild` y copie `public/` et `.next/static/`.

Démarrage alternatif :

```bash
npm run build
npm run start:standalone
```

(avec `NODE_ENV=production` et le `PORT` Infomaniak)

---

## Variables d’environnement

| Variable | Obligatoire |
|----------|-------------|
| `NODE_ENV` | `production` |
| `PORT` | Fourni par Infomaniak |

Aucune clé Sanity ni API externe pour ce site vitrine.

---

## Hébergement PHP seul

Si votre offre est **uniquement PHP / statique** sans Node.js, Next.js ne pourra pas tourner tel quel. Il faut une offre **Node.js** Infomaniak ou un **VPS / Cloud Server**.

---

## Support

En cas de blocage, indiquez au support Infomaniak : application **Next.js 15**, commande de start **`npm start`** (`next start`), Node **20 LTS**, racine = dossier du `package.json` PatrimEmotion.
