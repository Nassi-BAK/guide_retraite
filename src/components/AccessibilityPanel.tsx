import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Plus, Minus, Eye, Volume2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  largeButtons: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  reducedMotion: false,
  largeButtons: false,
};

export const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [mounted, setMounted] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('a11y-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
    setMounted(true);
  }, []);

  // Save settings to localStorage and apply to DOM
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('a11y-settings', JSON.stringify(settings));

    const root = document.documentElement;

    // Apply font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Apply high contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.classList.add('reduce-motion');
    } else {
      root.style.removeProperty('--animation-duration');
      root.classList.remove('reduce-motion');
    }

    // Apply large buttons
    if (settings.largeButtons) {
      root.classList.add('large-buttons');
    } else {
      root.classList.remove('large-buttons');
    }
  }, [settings, mounted]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const increaseFontSize = () => {
    updateSetting('fontSize', Math.min(settings.fontSize + 10, 200));
  };

  const decreaseFontSize = () => {
    updateSetting('fontSize', Math.max(settings.fontSize - 10, 80));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Réglages d'accessibilité"
        title="Accessibilité"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Settings className="h-6 w-6" />
          )}
        </motion.div>
        <span className="ml-2 text-sm font-semibold hidden sm:inline">
          {isOpen ? 'Fermer' : 'A11y'}
        </span>
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-border p-6 w-80 max-w-[calc(100vw-2rem)]"
          >
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Accessibilité
            </h3>

            <div className="space-y-4">
              {/* Font Size Control */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Taille du texte: {settings.fontSize}%
                </label>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={decreaseFontSize}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    aria-label="Diminuer la taille du texte"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 h-2 bg-secondary/20 rounded-full relative">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-300"
                      style={{ width: `${(settings.fontSize - 80) / 1.2}%` }}
                    />
                  </div>
                  <Button
                    onClick={increaseFontSize}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    aria-label="Augmenter la taille du texte"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="w-4 h-4 rounded cursor-pointer"
                    aria-label="Mode contraste élevé"
                  />
                  <Eye className="h-4 w-4 text-primary" />
                  Contraste élevé
                </label>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="w-4 h-4 rounded cursor-pointer"
                    aria-label="Réduire les animations"
                  />
                  <Volume2 className="h-4 w-4 text-primary" />
                  Réduire les animations
                </label>
              </div>

              {/* Large Buttons Toggle */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeButtons}
                    onChange={(e) => updateSetting('largeButtons', e.target.checked)}
                    className="w-4 h-4 rounded cursor-pointer"
                    aria-label="Grands boutons"
                  />
                  <Plus className="h-4 w-4 text-primary" />
                  Grands boutons
                </label>
              </div>

              {/* Reset Button */}
              <Button
                onClick={resetSettings}
                variant="outline"
                className="w-full mt-4 gap-2"
                aria-label="Réinitialiser les paramètres d'accessibilité"
              >
                <RotateCcw className="h-4 w-4" />
                Réinitialiser
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityPanel;
