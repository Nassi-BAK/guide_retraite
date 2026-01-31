# Checklist de Validation - Charte Graphique

## 🎨 Palette de Couleurs

- [ ] **Bleu Profond (#1B4F72)** apparaît en header/footer
- [ ] **Vert Émeraude (#2E867F)** utilisé pour boutons secondaires
- [ ] **Or Sable (#D4AC0D)** visible sur CTA/boutons primaires
- [ ] **Gris Perle (#F4F6F7)** comme fond des pages
- [ ] Contraste Bleu + Or: ✅ 4.5:1 minimum (WCAG AA)
- [ ] Palette harmonieuse en light mode
- [ ] Palette harmonieuse en dark mode

## 📝 Typographie

- [ ] **Playfair Display** utilisé pour H1-H4
- [ ] **Montserrat** pour titres secondaires
- [ ] **Roboto** pour corps de texte (FR)
- [ ] **IBM Plex Sans Arabic** pour texte arabe (AR)
- [ ] Taille minimale corps: 18px ✅
- [ ] Taille titre H3: minimum 24px ✅
- [ ] Interlignage corps: 1.6-1.8 ✅
- [ ] Interlignage listes: 1.8 ✅
- [ ] Espacement lettres négatif sur titres
- [ ] Polices chargent correctement en FR ET AR

## ♿ Accessibilité

### Taille des Éléments
- [ ] Boutons: minimum 48px de hauteur ✅
- [ ] Boutons: minimum 100px de largeur ✅
- [ ] Targets tactiles: 44px+ ✅
- [ ] Focus ring: visible (4px) ✅
- [ ] Focus ring offset: 2px ✅

### Navigation Clavier
- [ ] Tab navigation fonctionne
- [ ] Enter sur boutons/links
- [ ] Escape pour fermer modales
- [ ] Order logique de tabulation
- [ ] Pas de focus trap

### Lecteur d'Écran
- [ ] Tous boutons ont aria-label ou texte
- [ ] Images ont alt text significatif
- [ ] Liens ont description claire
- [ ] Headings structurés h1 > h2 > h3
- [ ] Landmarks HTML5 (nav, main, footer)
- [ ] Live regions pour mises à jour

### Contraste
- [ ] Noir sur blanc: 21:1 ✅ (AAA)
- [ ] Bleu + Or: 4.5:1 ✅ (AA)
- [ ] Text + Background: 4.5:1+ ✅
- [ ] Icons + Background: 3:1+ ✅

## 🎛️ Panneau d'Accessibilité

- [ ] Bouton flottant visible bottom-right
- [ ] Bouton a icône Settings/X
- [ ] Panneau s'ouvre/ferme smoothly
- [ ] Taille du texte: ±10% fonctionne
  - [ ] 80% - 200% range
  - [ ] Applique au DOM entier
  - [ ] Persiste en localStorage
- [ ] Mode Contraste Élevé
  - [ ] Toggle fonctionne
  - [ ] Améliore vraiment contraste
  - [ ] Sauvegardé en localStorage
- [ ] Animations Réduites
  - [ ] Désactive Framer Motion
  - [ ] Transitions: 0.01ms
  - [ ] Respecte `prefers-reduced-motion`
- [ ] Grands Boutons
  - [ ] Augmente taille min-height
  - [ ] Augmente padding
  - [ ] Améliore pour seniors
- [ ] Bouton Réinitialiser
  - [ ] Retour aux défauts
  - [ ] localStorage effacé

## 🇲🇦 Identité Marocaine

- [ ] Zellige pattern en footer ✅
- [ ] Séparateur zellige avec gradient ✅
- [ ] Couleurs évoquent patrimoine
- [ ] Arches décoratives (si présentes)
- [ ] Pas de clichés "vieillesse"
- [ ] Images authentiques marocaines

## 🌐 Support Bilingue FR/AR

- [ ] Toggle FR/AR visible/accessible
- [ ] LTR en français ✅
- [ ] RTL en arabe ✅
- [ ] Polices chargent correctement
- [ ] Direction du texte correcte
- [ ] Boutons alignés correctement (RTL)
- [ ] Spacing cohérent (RTL)
- [ ] Navigation fonctionne en RTL

## 📱 Responsivité

- [ ] Desktop: layout optimal
- [ ] Tablet: readaptation correcte
- [ ] Mobile: buttons 48px+ ✅
- [ ] Mobile: font-size: 18px+
- [ ] Pas de horizontal scroll
- [ ] Padding adequat sur mobile

## 🎨 Dark Mode

- [ ] Bouton toggle disponible
- [ ] Couleurs adaptées au dark
- [ ] Contraste maintenu
- [ ] Lisibilité en dark mode
- [ ] Transitions smooth
- [ ] Images visibles en dark

## 🚀 Performance

- [ ] Polices chargent rapidement
- [ ] Pas de layout shift (CLS)
- [ ] Animations fluides (60fps)
- [ ] LocalStorage rapide
- [ ] Pas de memory leak
- [ ] Bundle size acceptable

## 🧪 Tests

### Desktop
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Zoom à 200%: lisible
- [ ] High DPI screens

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Touch interactions
- [ ] Orientation portrait/landscape

### Accessibilité Tools
- [ ] axe DevTools: 0 erreurs
- [ ] WebAIM Contrast Checker: AA+
- [ ] Lighthouse: 90+ Accessibility
- [ ] WAVE: 0 erreurs
- [ ] Keyboard Navigation: 100%

## 📊 Conformité Normes

- [ ] WCAG 2.1 Level AA ✅
- [ ] Directive UE Accessibilité Digital
- [ ] ADA Compliance (USA)
- [ ] AODA (Canada)
- [ ] Code de devoir marocain (si applicable)

## 📸 Images & Contenu

- [ ] Images seniors actifs
- [ ] Contextes authentiques
- [ ] Pas de clichés "fragiles"
- [ ] Lumière naturelle
- [ ] Diversité de genres/âges
- [ ] Références culturelles

## 📚 Documentation

- [ ] CHARTE_GRAPHIQUE.md complète
- [ ] a11y.config.ts documenté
- [ ] Components commentés
- [ ] Readme pour contributeurs
- [ ] Usage examples fournis

## 🎯 User Experience Seniors

- [ ] Navigation simple compris
- [ ] Aucune micro-interactions confuses
- [ ] Messages d'erreur clairs
- [ ] Confirmation pour actions importantes
- [ ] Tooltips utiles (pas trop)
- [ ] Feedback visuel pour actions
- [ ] Pas de time-outs surprises

## ✅ Validation Finale

- [ ] Toutes sections passent tests
- [ ] Pas d'erreurs console
- [ ] Pas d'avertissements critiques
- [ ] Performance: Lighthouse 90+
- [ ] SEO friendly
- [ ] Accessible à 100%
- [ ] Prêt pour production

---

## 📝 Notes

```
Date de la dernière vérification: ___________
Testeur: _________________________________
Navigateurs testés: _______________________
Problèmes trouvés: _________________________
Recommandations: ___________________________
```

---

## 🎓 Ressources de Test

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)

## 🚨 Points Critiques

1. **Taille Texte Minimum**: Ne pas descendre sous 18px
2. **Contraste**: Minimum 4.5:1 (AA) pour texte
3. **Focus Indicators**: JAMAIS supprimer (outline: none)
4. **Boutons**: Minimum 48x48px zones tactiles
5. **RTL**: Vérifier chaque page en arabe
6. **Animations**: Respecter prefers-reduced-motion

---

**Document Version**: 1.0  
**Dernière mise à jour**: Février 2026
