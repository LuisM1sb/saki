import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-soft-gold/10 border border-soft-gold/20 text-soft-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-soft-gold rounded-full mr-2"></span>
              Especialistas en Emprendedores
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-light-gray mb-6 leading-tight">
              Transformamos
              <span className="block text-soft-gold">Ideas en Realidad</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-medium-gray mt-4">
                Digital
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-medium-gray mb-8 max-w-2xl mx-auto leading-relaxed">
              Diseño web profesional, SEO y marketing digital con planes económicos 
              diseñados específicamente para emprendedores y startups que buscan 
              destacar en el mercado digital.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#products" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('products');
                  if (element) {
                    const navbarHeight = 64; // 4rem = 64px (h-16)
                    const elementPosition = element.offsetTop - navbarHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="btn-primary text-lg px-8 py-4 cursor-pointer"
              >
                Ver Planes
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
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
                className="btn-secondary text-lg px-8 py-4 cursor-pointer"
              >
                Consulta Gratuita
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-gold mb-2">50+</div>
                <div className="text-medium-gray">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-gold mb-2">98%</div>
                <div className="text-medium-gray">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-gold mb-2">24/7</div>
                <div className="text-medium-gray">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-soft-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-soft-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
