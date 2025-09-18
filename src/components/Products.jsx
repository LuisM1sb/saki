
const Products = () => {
  const plans = [
    {
      name: "Plan Despegue",
      price: "$119.900",
      period: "CLP",
      description: "Perfecto para emprendedores que están comenzando su aventura digital",
      features: [
        "Diseño web responsivo",
        "Hasta 5 páginas",
        "SEO básico incluido",
        "Formulario de contacto",
        "Soporte por email",
        "Hosting básico incluido"
      ],
      popular: false,
      color: "soft-gold"
    },
    {
      name: "Plan Emprende",
      price: "$159.900",
      period: "CLP",
      description: "Ideal para startups en crecimiento que necesitan más funcionalidades",
      features: [
        "Todo lo del Plan Despegue",
        "Hasta 10 páginas",
        "SEO avanzado",
        "Integración con redes sociales",
        "Analytics de Google",
        "Soporte prioritario",
        "Backup automático"
      ],
      popular: true,
      color: "dark-green"
    },
    {
      name: "Plan Pyme",
      price: "$199.900",
      period: "CLP",
      description: "Solución completa para empresas establecidas que buscan maximizar su presencia digital",
      features: [
        "Todo lo del Plan Emprende",
        "Páginas ilimitadas",
        "E-commerce básico",
        "Marketing automation",
        "Soporte 24/7",
        "Consultoría mensual",
        "Reportes detallados"
      ],
      popular: false,
      color: "soft-gold"
    }
  ];

  return (
    <>
      <section id="products" className="section-padding bg-deep-blue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-gray mb-6">
              Nuestros Planes
            </h2>
            <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Soluciones diseñadas específicamente para emprendedores y startups. 
              Cada plan incluye todo lo necesario para hacer crecer tu negocio digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`card relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-soft-gold/20 ${
                  plan.popular ? 'ring-2 ring-soft-gold transform scale-105' : ''
                } hover:ring-2 hover:ring-soft-gold/50 hover:bg-dark-gray/60`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-soft-gold text-deep-blue px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-soft-gold/40 cursor-pointer">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-light-gray mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-soft-gold">{plan.price}</span>
                    <span className="text-medium-gray">{plan.period}</span>
                    <div className="text-sm text-medium-gray mt-1">IVA incluido</div>
                  </div>
                  <p className="text-medium-gray leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-soft-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-light-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ${
                  plan.popular 
                    ? 'bg-soft-gold text-deep-blue hover:bg-yellow-400 hover:shadow-lg hover:shadow-soft-gold/30' 
                    : 'bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-deep-blue hover:shadow-lg hover:shadow-soft-gold/20'
                }`}>
                  {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-dark-gray/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl font-bold text-light-gray mb-4">
                ¿Necesitas algo personalizado?
              </h3>
              <p className="text-medium-gray mb-6">
                Todos nuestros planes incluyen consultoría gratuita. Si necesitas funcionalidades 
                específicas para tu negocio, podemos crear un plan personalizado que se adapte 
                perfectamente a tus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const navbarHeight = 64; // 4rem = 64px (h-16)
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
                <button className="btn-secondary transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-soft-gold/20 cursor-pointer">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-soft-gold mb-2">50+</div>
              <div className="text-medium-gray">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-soft-gold mb-2">98%</div>
              <div className="text-medium-gray">Satisfacción</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-soft-gold mb-2">24/7</div>
              <div className="text-medium-gray">Soporte</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-soft-gold mb-2">5+</div>
              <div className="text-medium-gray">Años Experiencia</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
