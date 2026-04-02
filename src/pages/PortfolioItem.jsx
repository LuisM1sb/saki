import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import { getProjectBySlug, getAllProjects } from '../utils/portfolio';

marked.setOptions({ breaks: true, gfm: true });

const PortfolioItem = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const project = getProjectBySlug(slug, lang);
  const availableSlugs = getAllProjects(lang).map((p) => p.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-deep-blue pt-24 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-soft-gold text-sm font-medium mb-8">
            ← {t('portfolio.backToPortfolio')}
          </Link>
          <div className="card p-6 border border-red-500 text-sm font-mono">
            <p className="text-red-400 font-bold mb-4">⚠ Project not found — debug info</p>
            <p className="text-medium-gray mb-1">
              <span className="text-light-gray">slug from URL:</span> &quot;{slug}&quot;
            </p>
            <p className="text-medium-gray mb-1">
              <span className="text-light-gray">lang:</span> {lang}
            </p>
            <p className="text-medium-gray mt-3 mb-1">
              <span className="text-light-gray">available slugs ({availableSlugs.length}):</span>
            </p>
            {availableSlugs.length === 0 ? (
              <p className="text-red-400">— none (glob returned 0 files)</p>
            ) : (
              <ul className="list-disc list-inside text-soft-gold">
                {availableSlugs.map((s) => <li key={s}>{s}</li>)}
              </ul>
            )}
            <p className="text-medium-gray mt-4 text-xs">Check the browser console for more details.</p>
          </div>
        </div>
      </main>
    );
  }

  const html = marked(project.content);

  return (
    <>
      <Helmet>
        <title>{project.title} — Saki Lab</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <main className="min-h-screen bg-deep-blue pt-24 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-soft-gold hover:text-amber-400 transition-colors duration-200 text-sm font-medium mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('portfolio.backToPortfolio')}
          </Link>

          {/* Thumbnail */}
          {project.thumbnail ? (
            <div className="w-full rounded-xl overflow-hidden mb-8" style={{ aspectRatio: '16/9' }}>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              className="w-full rounded-xl overflow-hidden mb-8 bg-dark-gray flex items-center justify-center"
              style={{ aspectRatio: '16/9' }}
            >
              <span className="text-8xl">{project.emoji}</span>
            </div>
          )}

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl leading-none">{project.emoji}</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-light-gray leading-tight">
                  {project.title}
                </h1>
                {project.client && (
                  <p className="text-soft-gold text-sm font-medium mt-1">{project.client}</p>
                )}
              </div>
            </div>

            <p className="text-medium-gray text-lg mb-5">{project.description}</p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-dark-gray border border-gray-600 text-soft-gold font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Visit site button */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 btn-primary text-sm px-4 py-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('portfolio.visitSite')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </header>

          <hr className="border-gray-700 mb-10" />

          {/* Markdown content */}
          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <hr className="border-gray-700 mt-12 mb-8" />

          {/* Bottom actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/portfolio"
              className="btn-secondary inline-flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('portfolio.backToPortfolio')}
            </Link>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                {t('portfolio.visitSite')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioItem;
