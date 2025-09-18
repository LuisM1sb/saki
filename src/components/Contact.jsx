import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que el reCaptcha esté completado (solo si está configurado)
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (recaptchaSiteKey && !recaptchaToken) {
      showAlert('error', 'Por favor, completa la verificación reCaptcha.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaSiteKey ? recaptchaToken : null
        }),
      });

      const result = await response.json();

      if (response.ok) {
        showAlert('success', '¡Mensaje enviado correctamente! Te contactaremos pronto.');
        setFormData({ name: '', email: '', message: '' });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        showAlert('error', result.error || 'Error al enviar el mensaje. Inténtalo de nuevo.');
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('error', 'Error de conexión. Verifica tu internet e inténtalo de nuevo.');
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                
                {/* Alert Messages */}
                {alert.show && (
                  <div className={`mb-6 p-4 rounded-lg border ${
                    alert.type === 'success' 
                      ? 'bg-green-900/20 border-green-500 text-green-300' 
                      : 'bg-red-900/20 border-red-500 text-red-300'
                  }`}>
                    <div className="flex items-center">
                      {alert.type === 'success' ? (
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="font-medium">{alert.message}</span>
                    </div>
                  </div>
                )}
                
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

                  {/* reCaptcha */}
                  {import.meta.env.VITE_RECAPTCHA_SITE_KEY && (
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        theme="dark"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || (import.meta.env.VITE_RECAPTCHA_SITE_KEY && !recaptchaToken)}
                    className={`w-full btn-primary text-lg py-4 transition-all duration-300 ${
                      isSubmitting || (import.meta.env.VITE_RECAPTCHA_SITE_KEY && !recaptchaToken)
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'cursor-pointer hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      'Enviar Mensaje'
                    )}
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
