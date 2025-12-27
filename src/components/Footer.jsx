import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Conecta con Saki Lab en redes sociales. Síguenos en X (Twitter) y LinkedIn para las últimas actualizaciones." />
      </Helmet>
      <footer className="bg-deep-blue border-t border-gray-700">
        <div className="container-custom">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-2">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-soft-gold rounded-lg flex items-center justify-center">
                    <span className="text-deep-blue font-bold text-lg">S</span>
                  </div>
                  <span className="text-xl font-bold text-light-gray">Saki Lab</span>
                </Link>
                <p className="text-medium-gray mb-6 max-w-md leading-relaxed">
                  Estudio de diseño especializado en emprendedores y startups. 
                  Transformamos ideas en experiencias digitales excepcionales con 
                  planes económicos y soporte profesional.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://x.com/sakilab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-gray hover:bg-soft-gold rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 text-light-gray group-hover:text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/sakilab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-gray hover:bg-soft-gold rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 text-light-gray group-hover:text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-light-gray mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/" 
                      className="text-medium-gray hover:text-soft-gold transition-colors duration-300"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/#about" 
                      className="text-medium-gray hover:text-soft-gold transition-colors duration-300"
                    >
                      Quienes Somos
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/#services" 
                      className="text-medium-gray hover:text-soft-gold transition-colors duration-300"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/#contact" 
                      className="text-medium-gray hover:text-soft-gold transition-colors duration-300"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-light-gray mb-4">Servicios</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="text-medium-gray">Diseño Web</span>
                  </li>
                  <li>
                    <span className="text-medium-gray">SEO & Marketing</span>
                  </li>
                  <li>
                    <span className="text-medium-gray">E-commerce</span>
                  </li>
                  <li>
                    <span className="text-medium-gray">Consultoría</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-medium-gray text-sm mb-4 md:mb-0">
                © 2025 Saki Lab. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-medium-gray hover:text-soft-gold transition-colors duration-300">
                  Política de Privacidad
                </a>
                <a href="#" className="text-medium-gray hover:text-soft-gold transition-colors duration-300">
                  Términos de Servicio
                </a>
                <a href="#" className="text-medium-gray hover:text-soft-gold transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
