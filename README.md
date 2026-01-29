# PatrimEmotion® - Site Web

Site web pour PatrimEmotion®, une méthode psychométrique propriétaire appliquée à la finance patrimoniale.

## 🚀 Technologies

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. Cloner le repository
```bash
git clone <repository-url>
cd Site_PatrimEmotion
```

2. Installer les dépendances
```bash
npm install
```

3. Copier le fichier d'environnement
```bash
cp .env.example .env
```

4. Configurer les variables d'environnement dans `.env`

5. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
├── app/                    # Pages et layouts (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── methode/           # Page "La méthode"
│   ├── solutions/         # Pages solutions
│   ├── tarifs/            # Page tarifs
│   ├── contact/           # Page contact
│   └── test/              # Page test
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   └── Footer.tsx
├── public/                # Assets statiques
│   └── logo.png
└── Dev_Ressources/        # Ressources de développement
```

## 🚢 Déploiement

### Vercel (Développement)

1. Connecter le repository GitHub à Vercel
2. Les variables d'environnement seront configurées dans le dashboard Vercel
3. Le déploiement se fait automatiquement à chaque push

### OVH VPS (Production)

Le site sera hébergé sur un VPS OVH une fois le développement terminé.

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Lance ESLint

## 📄 Pages disponibles

- `/` - Page d'accueil
- `/methode` - La méthode PatrimEmotion®
- `/solutions/particuliers` - Solutions pour particuliers
- `/solutions/professionnels` - Solutions pour professionnels
- `/solutions/institutionnels` - Solutions pour institutionnels
- `/tarifs` - Tarifs
- `/contact` - Contact
- `/test` - Faire le test

## 🔧 Configuration

### Variables d'environnement

Voir `.env.example` pour la liste des variables d'environnement disponibles.

## 📞 Support

Pour toute question, contactez l'équipe de développement.

---

© 2026 PatrimEmotion® - AM Courtage & Patrimoine (AMCP)
