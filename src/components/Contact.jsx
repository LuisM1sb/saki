import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // En un entorno real, aquí se enviaría el formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Saki Lab | Consulta Gratuita</title>
        <meta name="description" content="Contacta con nuestro equipo de diseño. Consulta gratuita para emprendedores. Respuesta en menos de 24 horas." />
        <meta name="keywords" content="contacto diseño web, consulta gratuita, soporte emprendedores, contacto estudio diseño" />
      </Helmet>
      <section id="contact" className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-gray mb-6">
                Contacto
              </h2>
              <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
              <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
                ¿Listo para transformar tu idea en realidad digital? Contáctanos para una 
                consulta gratuita y descubre cómo podemos ayudarte a hacer crecer tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card">
                <h3 className="text-2xl font-bold text-light-gray mb-6">
                  Envíanos un Mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-light-gray font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-deep-blue border border-gray-600 rounded-lg text-light-gray placeholder-medium-gray focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-light-gray font-medium mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-deep-blue border border-gray-600 rounded-lg text-light-gray placeholder-medium-gray focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-light-gray font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-deep-blue border border-gray-600 rounded-lg text-light-gray placeholder-medium-gray focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold transition-colors duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 cursor-pointer"
                  >
                    Enviar Mensaje
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-medium-gray text-sm">
                    * Campos obligatorios. Te responderemos en menos de 24 horas.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card">
                  <h3 className="text-2xl font-bold text-light-gray mb-6">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-soft-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light-gray mb-1">Email</h4>
                        <p className="text-medium-gray">info@sakilab.cl</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-soft-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light-gray mb-1">Horarios</h4>
                        <p className="text-medium-gray">Lunes - Viernes: 9:00 - 18:00</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-soft-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light-gray mb-1">Ubicación</h4>
                        <p className="text-medium-gray">Comuna de Providencia, Santiago de Chile</p>
                        <p className="text-medium-gray">Servicios remotos disponibles</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="card">
                  <h3 className="text-2xl font-bold text-light-gray mb-6">
                    Nuestra Ubicación
                  </h3>
                  
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1234567890!2d-70.6123456789!3d-33.4123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6c4c4c4c4c%3A0x1234567890abcdef!2sProvidencia%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Saki Lab - Providencia, Santiago de Chile"
                    ></iframe>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-medium-gray text-sm">
                      <strong className="text-light-gray">Dirección:</strong> Comuna de Providencia, Santiago de Chile<br/>
                      <strong className="text-light-gray">Servicios:</strong> Disponibles de forma remota para todo Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
