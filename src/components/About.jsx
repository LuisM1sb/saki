import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Quienes Somos - Saki Lab | Estudio de Diseño Profesional</title>
        <meta name="description" content="Conoce nuestro equipo especializado en diseño para emprendedores. Más de 5 años de experiencia creando soluciones digitales exitosas." />
        <meta name="keywords" content="estudio diseño, equipo profesional, experiencia emprendedores, diseño web especializado" />
      </Helmet>
      <section id="about" className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-gray mb-6">
                Quienes Somos
              </h2>
              <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
              <p className="text-lg text-medium-gray leading-relaxed">
                Especialistas en transformar visiones empresariales en experiencias digitales excepcionales
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-light-gray mb-6">
                  Nuestra Misión
                </h3>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  En Saki Lab, creemos que cada emprendedor merece tener acceso a soluciones 
                  de diseño profesional de alta calidad, sin comprometer su presupuesto. 
                  Nuestro equipo combina creatividad, tecnología y estrategia para crear 
                  experiencias digitales que impulsan el crecimiento de tu negocio.
                </p>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  Con más de 5 años de experiencia en el mercado, hemos ayudado a más de 
                  50 emprendedores y startups a establecer su presencia digital y alcanzar 
                  sus objetivos comerciales.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-soft-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-light-gray">Diseño Responsivo</span>
                  </div>
                  <div className="flex items-center text-soft-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-light-gray">SEO Optimizado</span>
                  </div>
                  <div className="flex items-center text-soft-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-light-gray">Soporte 24/7</span>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-soft-gold/20 to-dark-green/20 rounded-2xl p-8 border border-gray-700">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-deep-blue rounded-lg p-4 border border-gray-600">
                      <div className="w-8 h-8 bg-soft-gold rounded mb-3"></div>
                      <div className="h-2 bg-gray-600 rounded mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    </div>
                    <div className="bg-deep-blue rounded-lg p-4 border border-gray-600 mt-4">
                      <div className="w-8 h-8 bg-dark-green rounded mb-3"></div>
                      <div className="h-2 bg-gray-600 rounded mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                    </div>
                    <div className="bg-deep-blue rounded-lg p-4 border border-gray-600">
                      <div className="w-8 h-8 bg-soft-gold rounded mb-3"></div>
                      <div className="h-2 bg-gray-600 rounded mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                    </div>
                    <div className="bg-deep-blue rounded-lg p-4 border border-gray-600 mt-4">
                      <div className="w-8 h-8 bg-dark-green rounded mb-3"></div>
                      <div className="h-2 bg-gray-600 rounded mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-light-gray mb-3">Innovación</h4>
                <p className="text-medium-gray">
                  Utilizamos las últimas tecnologías y tendencias para crear soluciones modernas y eficientes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-light-gray mb-3">Calidad</h4>
                <p className="text-medium-gray">
                  Cada proyecto recibe atención personalizada y es entregado con los más altos estándares de calidad.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-light-gray mb-3">Accesibilidad</h4>
                <p className="text-medium-gray">
                  Planes económicos diseñados para que cualquier emprendedor pueda acceder a servicios profesionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
