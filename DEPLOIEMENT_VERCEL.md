# Mise en ligne du site PatrimEmotion sur Vercel

Ce guide vous permet de déployer le site sur Vercel via Git (GitHub, GitLab ou Bitbucket).

---

## 1. Préparer le dépôt Git (sur votre machine)

Ouvrez un terminal dans le dossier du projet (`Site_PatrimEmotion`).

### Si Git n’est pas encore initialisé

```bash
git init
git add .
git commit -m "Initial commit - Site PatrimEmotion prêt pour déploiement"
```

### Si un dépôt existe déjà

```bash
git add .
git status
git commit -m "Mise à jour avant déploiement Vercel"   # si des changements sont à committer
```

---

## 2. Créer un dépôt sur GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous.
2. Cliquez sur **New repository** (ou **+** → **New repository**).
3. Donnez un nom au repo, par ex. `patrim-emotion-site`.
4. Ne cochez **pas** "Initialize with README" (le projet en a déjà un).
5. Cliquez sur **Create repository**.

Sur la page du nouveau dépôt, GitHub affiche l’URL du remote, par ex. :
`https://github.com/VOTRE_USERNAME/patrim-emotion-site.git`

---

## 3. Pousser le code vers GitHub

Dans le même terminal, à la racine du projet :

```bash
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/patrim-emotion-site.git
git push -u origin main
```

Remplacez `VOTRE_USERNAME/patrim-emotion-site` par l’URL exacte de votre dépôt.

Si vous utilisez l’authentification par mot de passe, GitHub peut demander un **Personal Access Token** plutôt que le mot de passe.

---

## 4. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous (avec GitHub si possible).
2. Cliquez sur **Add New…** → **Project**.
3. **Import Git Repository** : choisissez votre dépôt `patrim-emotion-site` (ou le nom que vous avez donné).
4. Vercel détecte automatiquement Next.js. Vous pouvez laisser :
   - **Framework Preset** : Next.js  
   - **Build Command** : `npm run build`  
   - **Output Directory** : (vide, défaut Next.js)  
   - **Install Command** : `npm install`
5. Cliquez sur **Deploy**.
6. Attendez la fin du build (1 à 2 min). Vous obtiendrez une URL du type :  
   `https://patrim-emotion-site-xxx.vercel.app`

---

## 5. Après le déploiement

- Chaque push sur `main` déclenchera un nouveau déploiement.
- Vous pouvez ajouter un **domaine personnalisé** dans **Project → Settings → Domains** (ex. `www.patrimemotion.fr`).
- Les variables d’environnement (si besoin plus tard) se configurent dans **Project → Settings → Environment Variables**.

---

## Fichiers déjà configurés pour Vercel

- **`vercel.json`** : build Next.js et région `cdg1` (Paris).
- **`.gitignore`** : `node_modules`, `.env`, `.next` sont ignorés.
- **Next.js 15** : compatible par défaut avec Vercel.

Si une étape bloque (Git, GitHub ou Vercel), décrivez l’erreur ou la capture d’écran et on pourra cibler la solution.
