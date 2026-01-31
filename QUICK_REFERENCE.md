# 🎨 Charte Graphique - Guide Rapide

## 📍 Quick Reference

### Palette de Couleurs
```css
--primary: hsl(213 55% 32%)      /* Bleu Profond #1B4F72 */
--secondary: hsl(169 52% 34%)    /* Vert Émeraude #2E867F */
--accent: hsl(46 87% 42%)        /* Or Sable #D4AC0D */
--background: hsl(210 18% 96%)   /* Gris Perle #F4F6F7 */
```

### Utilisation dans Components
```tsx
// Bouton primaire
<Button className="bg-primary text-primary-foreground">
  Démarrer
</Button>

// Bouton CTA
<Button className="bg-accent text-accent-foreground">
  Calculer ma retraite
</Button>

// Texte sombre
<p className="text-foreground">Corps de texte</p>

// Texte secondaire
<p className="text-muted-foreground">Description</p>
```

---

## 🔤 Typographie

### Classes Tailwind Prédéfinis
```tsx
// Titres
<h1>Text 3xl-6xl, Playfair Display Bold</h1>
<h2>Text 3xl-4xl, Playfair Display Semibold</h2>
<h3>Text 2xl-3xl, Montserrat Semibold</h3>
<h4>Text xl-2xl, Montserrat Semibold</h4>

// Corps
<p>Text lg (18px), line-height 1.6</p>

// Classes custom
<p className="text-lg-accessible">Texte lisible (20px)</p>
```

### Tailles Minimales (OBLIGATOIRES)
```
- Corps: 18px
- Heading: 20px+
- Boutons: 18px font-size
```

---

## ♿ Accessibilité

### Boutons
```tsx
// Bouton accessibles (OBLIGATOIRE)
<button className="button-lg-accessible">
  Cliquez
</button>

// Ou manuel
<button className="px-6 py-4 text-lg min-h-[56px]">
  Cliquez
</button>

// JAMAIS:
<button style={{outline: 'none'}}>  /* ❌ NON! */
```

### Focus States
```tsx
// Automatique avec Tailwind
<input className="focus-visible:ring-2 focus-visible:ring-ring" />

// Custom
<button className="focus-ring">Bouton</button>
```

### Labels
```tsx
// Form inputs
<label htmlFor="age">Votre âge</label>
<input id="age" type="number" />

// Boutons
<button aria-label="Ouvrir menu">☰</button>

// Sections
<nav aria-label="Navigation principale">
  {/* ... */}
</nav>
```

---

## 🎨 Utiliser le Panneau d'Accessibilité

### Component
```tsx
import AccessibilityPanel from '@/components/AccessibilityPanel';

export default App() {
  return (
    <>
      <AccessibilityPanel />
      {/* Reste de l'app */}
    </>
  );
}
```

### Configuration
```typescript
import { A11Y_CONFIG, a11yUtils } from '@/lib/a11y.config';

// Augmenter taille texte
a11yUtils.setFontSize(120); // 120%

// Activer contraste élevé
a11yUtils.toggleHighContrast(true);

// Respecter animations réduites
if (a11yUtils.prefersReducedMotion()) {
  disableAnimations();
}
```

---

## 🌐 Bilingue FR/AR

### Direction Automatique
```tsx
import { useLanguage } from '@/contexts/LanguageContext';

export default MyComponent() {
  const { language } = useLanguage();
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Contenu bi-lingue */}
    </div>
  );
}
```

### Tailwind RTL
```tsx
// Automatic avec dir="rtl"
<div dir="rtl" className="mr-4"><!-- Devient ml-4 en RTL --></div>

// Manual si besoin
<div className="ltr:mr-4 rtl:ml-4">Flexible</div>
```

### Polices RTL
```css
[dir="rtl"] {
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}

[dir="ltr"] {
  font-family: 'Roboto', sans-serif;
}
```

---

## 🎛️ Préférences Système

### Respecter les Préférences
```css
/* Dark mode */
@media (prefers-color-scheme: dark) {
  /* Styles dark */
}

/* Animations réduites */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}

/* Contraste élevé */
@media (prefers-contrast: more) {
  a {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
}
```

---

## 🔲 Éléments Graphiques Marocains

### Décoration Zellige
```tsx
// En footer automatiquement
<footer className="zellige-separator">
  {/* Gradient bleu-vert-bleu */}
</footer>

// Custom
<div className="zellige-pattern">
  {/* Pattern SVG simplifiée */}
</div>
```

### Séparateurs
```tsx
// Automatic avec classe
<div className="zellige-separator" />

// Ou manuel
<div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary my-8" />
```

### Arches Décoratives
```tsx
<div className="arch-decoration">
  <img src="important-image.jpg" />
</div>

// CSS: border-radius en haut avec opacity 0.1
```

---

## 📏 Spacing & Layout

### Padding Standard
```tsx
// Conteneur
<div className="content-container">
  {/* max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 */}
</div>

// Sections
<section className="section-padding">
  {/* py-12 md:py-16 lg:py-20 */}
</section>
```

### Gaps
```tsx
// Grille
<div className="grid gap-8 lg:gap-12">
  {/* 24-32px spacing */}
</div>

// Flex
<div className="flex gap-6">
  {/* 24px spacing */}
</div>
```

---

## 🎯 Checklist Avant Commit

- [ ] Couleurs utilisent variables CSS (pas hardcoded)
- [ ] Texte minimum 18px
- [ ] Boutons minimum 48px hauteur
- [ ] Focus visibles sur tous inputs/buttons
- [ ] Aria-labels sur éléments sans texte
- [ ] Images ont alt text
- [ ] Navigation clavier fonctionne
- [ ] RTL/LTR bien appliqué
- [ ] Pas d'erreurs console
- [ ] Lighthouse a11y: 90+

---

## 🚨 Ne JAMAIS Faire

```tsx
// ❌ Supprimer focus rings
button {
  outline: none;
}

// ❌ Texte trop petit
<p style={{fontSize: '12px'}}>...</p>

// ❌ Boutons trop petits
<button style={{width: '20px', height: '20px'}}>...</button>

// ❌ Couleurs sans contraste
<p className="text-gray-300 bg-white">...</p>

// ❌ Icônes seules sans label
<button>
  <Icon />  {/* Pas d'aria-label, pas de texte */}
</button>

// ❌ Hardcoder couleurs
style={{color: '#1B4F72'}}  {/* Utiliser --primary */}

// ❌ Oublier direction RTL
<div className="mr-4">  {/* Sera ml-4 en RTL */}
```

---

## ✅ Toujours Faire

```tsx
// ✅ Utiliser variables CSS
<button className="bg-primary text-primary-foreground" />

// ✅ Texte minimum 18px
<p className="text-lg">...</p>

// ✅ Boutons accessibles
<button className="button-lg-accessible">Cliquer</button>

// ✅ Focus visibles
<input className="focus-visible:ring-2" />

// ✅ Labels pour inputs
<label htmlFor="age">Âge:</label>
<input id="age" />

// ✅ Alt text pour images
<img src="photo.jpg" alt="Senior marocain en famille" />

// ✅ Navigation clavier
<nav role="navigation" aria-label="...">

// ✅ Support RTL
<div dir={dir} className="text-start">
```

---

## 📚 Documentation Complète

| Document | Voir |
|----------|------|
| Charte détaillée | `CHARTE_GRAPHIQUE.md` |
| Checklist validation | `CHECKLIST_VALIDATION.md` |
| Résumé implémentation | `IMPLEMENTATION_SUMMARY.md` |
| Config A11y | `src/lib/a11y.config.ts` |
| Panneau A11y | `src/components/AccessibilityPanel.tsx` |

---

## 🆘 Questions Rapides

**Q: Comment ajouter nouveau bouton CTA?**
```tsx
<Button className="bg-accent text-accent-foreground">Action</Button>
```

**Q: Comment faire texte secondaire?**
```tsx
<p className="text-muted-foreground">Texte light</p>
```

**Q: Comment respecter dark mode?**
```tsx
// Automatique avec Tailwind dark:
<div className="bg-white dark:bg-slate-800">
```

**Q: Comment tester accessibilité?**
1. Chrome DevTools → Lighthouse
2. axe DevTools extension
3. Tab keyboard navigation
4. NVDA screen reader

**Q: Comment sauvegarder préférences utilisateur?**
```tsx
// Automatique via AccessibilityPanel
// Stockage: localStorage avec clé 'a11y-settings'
```

---

## 📞 Support

- **A11y Panel**: Bouton en bas-droit (Settings icon)
- **Config**: `src/lib/a11y.config.ts`
- **Bugs**: Vérifier `CHECKLIST_VALIDATION.md`

---

**Version**: 1.0  
**Dernière mise à jour**: Février 2026  
**Status**: ✅ Prêt à l'emploi
