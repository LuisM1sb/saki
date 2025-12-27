
const Services = () => {
  const services = [
    {
      name: "Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados que destacan en el mercado digital. Desde landing pages hasta aplicaciones web complejas.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        "Diseño responsivo y moderno",
        "Optimización SEO integrada",
        "Rendimiento optimizado",
        "Integración con sistemas existentes"
      ]
    },
    {
      name: "Proyectos Cloud AWS",
      description: "Implementamos soluciones escalables en la nube con Amazon Web Services. Arquitectura, migración y optimización de infraestructura cloud.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: [
        "Arquitectura cloud escalable",
        "Migración a AWS",
        "Optimización de costos",
        "Seguridad y compliance"
      ]
    },
    {
      name: "Consultoría TI",
      description: "Asesoría estratégica en tecnología para optimizar tus procesos, mejorar la eficiencia y tomar decisiones informadas sobre tu infraestructura digital.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Análisis de infraestructura",
        "Estrategia tecnológica",
        "Optimización de procesos",
        "Roadmap de implementación"
      ]
    }
  ];

  return (
    <>
      <section id="services" className="section-padding bg-deep-blue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-gray mb-6">
              Nuestros Servicios
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Soluciones tecnológicas integrales diseñadas para impulsar tu negocio. 
              Desde desarrollo web hasta infraestructura cloud, te acompañamos en cada paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-soft-gold/20 hover:ring-2 hover:ring-soft-gold/50 hover:bg-dark-gray/60"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-soft-gold">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-light-gray mb-4">{service.name}</h3>
                  <p className="text-medium-gray leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-soft-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-light-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const navbarHeight = 64;
                      const elementPosition = element.offsetTop - navbarHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-deep-blue hover:shadow-lg hover:shadow-soft-gold/20"
                >
                  Consultar Servicio
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-dark-gray/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl font-bold text-light-gray mb-4">
                ¿Necesitas una solución personalizada?
              </h3>
              <p className="text-medium-gray mb-6">
                Cada proyecto es único. Trabajamos contigo para crear soluciones tecnológicas 
                que se adapten perfectamente a las necesidades específicas de tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const navbarHeight = 64;
                      const elementPosition = element.offsetTop - navbarHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="btn-primary transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-soft-gold/30 cursor-pointer"
                >
                  Consulta Gratuita
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      const navbarHeight = 64;
                      const elementPosition = element.offsetTop - navbarHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="btn-secondary transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-soft-gold/20 cursor-pointer"
                >
                  Conoce Más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

