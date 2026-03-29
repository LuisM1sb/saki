import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-gray mb-6">
                {t('about.heading')}
              </h2>
              <div className="w-24 h-1 bg-soft-gold mx-auto mb-8"></div>
              <p className="text-lg text-medium-gray leading-relaxed">
                {t('about.tagline')}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-light-gray mb-6">
                  {t('about.missionTitle')}
                </h3>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  {t('about.missionP1')}
                </p>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  {t('about.missionP2')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-soft-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-light-gray">{t('about.tag1')}</span>
                  </div>
                  <div className="flex items-center text-soft-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-light-gray">{t('about.tag2')}</span>
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
                <h4 className="text-xl font-semibold text-light-gray mb-3">{t('about.values.innovation.title')}</h4>
                <p className="text-medium-gray">{t('about.values.innovation.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-light-gray mb-3">{t('about.values.quality.title')}</h4>
                <p className="text-medium-gray">{t('about.values.quality.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-light-gray mb-3">{t('about.values.accessibility.title')}</h4>
                <p className="text-medium-gray">{t('about.values.accessibility.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
