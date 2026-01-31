/**
 * Accessibilité Configuration
 * Configuration complète pour les paramètres d'accessibilité
 * WCAG 2.1 Level AA Conformité
 */

export const A11Y_CONFIG = {
  // Taille du texte
  fontSize: {
    min: 80,          // 80%
    max: 200,         // 200%
    default: 100,     // 100%
    step: 10,         // Incrément de 10%
  },

  // Couleurs et contraste
  contrast: {
    normal: {
      ratio: 4.5,     // WCAG AA minimum
      description: 'Contraste standard',
    },
    high: {
      ratio: 7,       // WCAG AAA
      description: 'Contraste élevé (WCAG AAA)',
    },
  },

  // Animations
  animations: {
    normal: {
      duration: 300,
      enabled: true,
    },
    reduced: {
      duration: 50,
      enabled: false,
    },
  },

  // Taille des éléments interactifs
  buttonSize: {
    normal: {
      minHeight: '48px',
      padding: '12px 24px',
      fontSize: '16px',
    },
    large: {
      minHeight: '56px',
      padding: '16px 32px',
      fontSize: '18px',
    },
  },

  // Spacing pour accessibilité
  spacing: {
    focusRing: '4px',      // Offset du ring de focus
    buttonMinWidth: '100px',
    touchTarget: '44px',   // Minimum touch target
    itemSpacing: '24px',   // Entre items
  },

  // Typographie
  typography: {
    lineHeight: {
      tight: 1.2,      // Titres
      normal: 1.6,     // Corps
      relaxed: 1.8,    // Listes, descriptions
    },
    fontSize: {
      body: '18px',
      h3: '24px',
      h2: '32px',
      h1: '40px',
    },
  },

  // Couleurs minimales
  minContrast: {
    normal: 4.5,  // WCAG AA
    enhanced: 7,  // WCAG AAA
  },

  // Storage keys
  storage: {
    key: 'a11y-settings',
    version: 1,
  },

  // Préférences système
  systemPreferences: {
    reducedMotion: 'prefers-reduced-motion: reduce',
    highContrast: 'prefers-contrast: more',
    darkMode: 'prefers-color-scheme: dark',
  },

  // Hotkeys d'accessibilité
  hotkeys: {
    togglePanel: 'Alt+A',
    increaseFontSize: 'Alt+=',
    decreaseFontSize: 'Alt+-',
    toggleHighContrast: 'Alt+C',
    resetSettings: 'Alt+R',
  },
} as const;

/**
 * Classes CSS pour l'accessibilité
 */
export const A11Y_CLASSES = {
  // Focus visible (toujours appliqué)
  focusVisible: 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',

  // Boutons accessible
  buttonAccessible: 'min-h-[48px] px-6 py-3 text-base font-semibold transition-all',
  buttonLarge: 'min-h-[56px] px-8 py-4 text-lg font-semibold',

  // Texte lisible
  textAccessible: 'text-lg leading-relaxed md:text-xl',

  // Skip link (pour navigation clavier)
  skipLink: 'absolute top-0 left-0 -translate-y-full focus:translate-y-0 bg-primary text-primary-foreground px-4 py-2 z-50',

  // Invisible mais accessible au lecteur d'écran
  srOnly: 'sr-only absolute -inset-1 w-1 h-1 p-0 m-0 overflow-hidden',

  // High contrast mode
  highContrastContainer: 'high-contrast',
} as const;

/**
 * Fonctions d'accessibilité
 */
export const a11yUtils = {
  /**
   * Applique la taille du texte au document
   */
  setFontSize: (percentage: number) => {
    document.documentElement.style.fontSize = `${percentage}%`;
  },

  /**
   * Toggle mode contraste élevé
   */
  toggleHighContrast: (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  },

  /**
   * Respecte prefers-reduced-motion
   */
  respectReducedMotion: (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  },

  /**
   * Toggle grands boutons
   */
  toggleLargeButtons: (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('large-buttons');
    } else {
      document.documentElement.classList.remove('large-buttons');
    }
  },

  /**
   * Annonce un message pour lecteur d'écran
   */
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const ariaLive = document.createElement('div');
    ariaLive.setAttribute('aria-live', priority);
    ariaLive.setAttribute('aria-atomic', 'true');
    ariaLive.className = 'sr-only';
    ariaLive.textContent = message;
    document.body.appendChild(ariaLive);
    setTimeout(() => ariaLive.remove(), 1000);
  },

  /**
   * Vérifie si l'utilisateur préfère animations réduites
   */
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Vérifie si l'utilisateur préfère contraste élevé
   */
  prefersHighContrast: (): boolean => {
    return window.matchMedia('(prefers-contrast: more)').matches;
  },

  /**
   * Vérifie si l'utilisateur est en mode sombre
   */
  prefersDarkMode: (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  /**
   * Crée un élément focusable avec gestion complète
   */
  createAccessibleButton: (options: {
    label: string;
    onClick: () => void;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    disabled?: boolean;
  }): HTMLButtonElement => {
    const button = document.createElement('button');
    button.textContent = options.label;
    button.setAttribute('aria-label', options.ariaLabel || options.label);
    if (options.ariaDescribedBy) {
      button.setAttribute('aria-describedby', options.ariaDescribedBy);
    }
    button.disabled = options.disabled || false;
    button.addEventListener('click', options.onClick);
    return button;
  },
} as const;

/**
 * Textes d'accessibilité
 */
export const a11yTexts = {
  fr: {
    togglePanel: 'Ouvrir/Fermer le panneau d\'accessibilité',
    fontSize: 'Ajuster la taille du texte',
    increaseFontSize: 'Augmenter la taille du texte',
    decreaseFontSize: 'Diminuer la taille du texte',
    highContrast: 'Activer le mode contraste élevé',
    reducedMotion: 'Réduire les animations',
    largeButtons: 'Agrandir les boutons',
    reset: 'Réinitialiser les paramètres',
    announcement: {
      fontSizeIncreased: 'Taille du texte augmentée à {size}%',
      fontSizeDecreased: 'Taille du texte réduite à {size}%',
      highContrastEnabled: 'Mode contraste élevé activé',
      highContrastDisabled: 'Mode contraste élevé désactivé',
      settingsReset: 'Paramètres d\'accessibilité réinitialisés',
    },
  },
  ar: {
    togglePanel: 'فتح/إغلاق لوحة إمكانية الوصول',
    fontSize: 'ضبط حجم الخط',
    increaseFontSize: 'زيادة حجم الخط',
    decreaseFontSize: 'تقليل حجم الخط',
    highContrast: 'تفعيل وضع التباين العالي',
    reducedMotion: 'تقليل الرسوم المتحركة',
    largeButtons: 'تكبير الأزرار',
    reset: 'إعادة تعيين الإعدادات',
    announcement: {
      fontSizeIncreased: 'تم زيادة حجم الخط إلى {size}%',
      fontSizeDecreased: 'تم تقليل حجم الخط إلى {size}%',
      highContrastEnabled: 'تم تفعيل وضع التباين العالي',
      highContrastDisabled: 'تم تعطيل وضع التباين العالي',
      settingsReset: 'تم إعادة تعيين إعدادات إمكانية الوصول',
    },
  },
};

export default A11Y_CONFIG;
