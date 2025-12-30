# Weliive Landing Page - Next.js

Landing page storytelling avec design "Dark Liquid Glass" construite avec Next.js 14+, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Stack Technique

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** (avec configuration personnalisée)
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## 📦 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:1005](http://localhost:1005) dans votre navigateur.

## 🏗️ Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout principal avec metadata
│   ├── page.tsx             # Page principale avec scroll container
│   └── globals.css          # Styles globaux Tailwind
├── components/
│   ├── sections/            # Sections de la landing page
│   │   ├── IntroOverlay.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── AuditSection.tsx
│   │   └── MVPSection.tsx
│   └── ui/                  # Composants UI réutilisables
│       ├── GlassCard.tsx
│       └── AnimatedBackground.tsx
├── tailwind.config.ts       # Configuration Tailwind avec couleurs personnalisées
└── package.json
```

## 🎨 Caractéristiques

- **Scroll Snap** : Chaque section occupe 100vh avec scroll snap
- **Glass Morphism** : Effet de verre dépoli avec backdrop-filter
- **Animations fluides** : Framer Motion pour les transitions
- **Responsive** : Design adaptatif mobile/desktop
- **TypeScript** : Typage strict pour une meilleure maintenabilité

## 📝 Notes

- Les couleurs personnalisées sont définies dans `tailwind.config.ts`
- Le composant `GlassCard` est réutilisable pour tous les éléments en verre
- Les animations sont gérées par Framer Motion avec des variants personnalisés

