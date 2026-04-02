import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getAllProjects } from '../utils/portfolio';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const projects = getAllProjects(lang);

  return (
    <>
      <Helmet>
        <title>{t('portfolio.metaTitle')}</title>
        <meta name="description" content={t('portfolio.metaDescription')} />
      </Helmet>

      <main className="min-h-screen bg-deep-blue pt-24 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
              {t('portfolio.heading')}
            </h1>
            <p className="text-medium-gray text-lg max-w-2xl mx-auto">
              {t('portfolio.subheading')}
            </p>
          </div>

          {/* Grid */}
          {projects.length === 0 ? (
            <p className="text-center text-medium-gray">{t('portfolio.empty')}</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/portfolio/${project.slug}`}
                  className="card flex flex-col hover:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold rounded-xl overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full overflow-hidden bg-deep-blue"
                    style={{ aspectRatio: '16/9' }}
                  >
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-dark-gray">
                        <span className="text-6xl">{project.emoji}</span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Emoji + title */}
                    <div className="flex items-start gap-3 mb-2">
                      {project.thumbnail && (
                        <span className="text-2xl leading-none mt-0.5">{project.emoji}</span>
                      )}
                      <div>
                        <h2 className="text-lg font-bold text-light-gray leading-snug">
                          {project.title}
                        </h2>
                        {project.client && (
                          <p className="text-soft-gold text-xs font-medium mt-0.5">
                            {project.client}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-medium-gray text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-deep-blue border border-gray-600 text-soft-gold font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Portfolio;
