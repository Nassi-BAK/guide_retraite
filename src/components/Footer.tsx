import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary text-primary-foreground relative">
      {/* Moroccan zellige pattern decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 zellige-separator" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Guide Retraite Maroc" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Guide Retraite Maroc
              </h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-sm">
              {t('footer.mission')}
            </p>
            <div className="flex items-center space-x-2 text-sm">
             
              <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />
              <span className="text-primary-foreground/80">{t('footer.forRetirees')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground border-b border-primary/30 pb-2">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/avant-retraite" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t('footer.beforeRetirement')}</span>
                </Link>
              </li>
              <li>
                <Link to="/apres-retraite" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t('footer.afterRetirement')}</span>
                </Link>
              </li>
              <li>
                <Link to="/diagnostic" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t('footer.diagnostic')}</span>
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t('footer.resources')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground border-b border-primary/30 pb-2">
              {t('footer.contactUs')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90">Casablanca, Maroc</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@guideretraite.ma" className="text-primary-foreground/90 hover:text-accent transition-colors">
                  contact@guideretraite.ma
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+212123456789" className="text-primary-foreground/90 hover:text-accent transition-colors">
                  +212 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-primary/30">
          <div className="bg-primary/20 rounded-lg p-4 backdrop-blur-sm border border-primary/30">
            <p className="text-xs text-primary-foreground/90 leading-relaxed text-center">
              <span className="font-semibold text-accent">{t('footer.disclaimerTitle')}: </span>
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/30 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Guide Retraite Maroc. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/80">
              <a href="mailto:contact@guideretraite.ma" className="hover:text-accent transition-colors">
                {t('footer.privacy')}
              </a>
              <span>•</span>
              <Link to="/" className="hover:text-accent transition-colors">
                {t('footer.home')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;