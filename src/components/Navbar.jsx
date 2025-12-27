import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // 4rem = 64px (h-16)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="fixed top-0 w-full bg-deep-blue/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-soft-gold rounded-lg flex items-center justify-center">
                <span className="text-deep-blue font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-light-gray">Saki Lab</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer"
              >
                Inicio
              </Link>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer"
              >
                Quienes Somos
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer"
              >
                Servicios
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer"
              >
                Contacto
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer py-2"
                >
                  Inicio
                </Link>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer py-2"
                >
                  Quienes Somos
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer py-2"
                >
                  Servicios
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="text-light-gray hover:text-soft-gold transition-colors duration-300 font-medium cursor-pointer py-2"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
