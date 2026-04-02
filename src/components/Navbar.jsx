import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 64, behavior: 'smooth' });
    }
  };

  const handleHomeLink = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleSectionLink = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const linkClass = 'text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer';
  const mobileLinkClass = `${linkClass} py-2`;

  return (
    <>
      <nav className="fixed top-0 w-full bg-deep-blue/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" onClick={handleHomeLink} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-soft-gold rounded-lg flex items-center justify-center">
                <span className="text-deep-blue font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-light-gray">Saki Lab</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" onClick={handleHomeLink} className={linkClass}>
                {t('nav.home')}
              </a>
              <a href="/#about" onClick={(e) => handleSectionLink(e, 'about')} className={linkClass}>
                {t('nav.about')}
              </a>
              <a href="/#services" onClick={(e) => handleSectionLink(e, 'services')} className={linkClass}>
                {t('nav.services')}
              </a>
              <a href="/#contact" onClick={(e) => handleSectionLink(e, 'contact')} className={linkClass}>
                {t('nav.contact')}
              </a>
              <Link to="/blog" className={linkClass}>
                {t('nav.blog')}
              </Link>
              <Link to="/portfolio" className={linkClass}>
                {t('nav.portfolio')}
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Mobile: language switcher + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={toggleMobileMenu}
                className="text-light-gray hover:text-soft-gold transition-colors duration-300 cursor-pointer"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-deep-blue/95 backdrop-blur-sm border-b border-gray-700">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                <a href="/" onClick={handleHomeLink} className={mobileLinkClass}>
                  {t('nav.home')}
                </a>
                <a href="/#about" onClick={(e) => handleSectionLink(e, 'about')} className={mobileLinkClass}>
                  {t('nav.about')}
                </a>
                <a href="/#services" onClick={(e) => handleSectionLink(e, 'services')} className={mobileLinkClass}>
                  {t('nav.services')}
                </a>
                <a href="/#contact" onClick={(e) => handleSectionLink(e, 'contact')} className={mobileLinkClass}>
                  {t('nav.contact')}
                </a>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  {t('nav.blog')}
                </Link>
                <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  {t('nav.portfolio')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
