import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import { getPostBySlug } from '../utils/posts';

// Configure marked for safe rendering
marked.setOptions({ breaks: true, gfm: true });

function formatDate(dateStr, locale) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'es' ? 'es-CL' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const post = getPostBySlug(slug, lang);

  if (!post) return <Navigate to="/blog" replace />;

  const html = marked(post.content);

  return (
    <>
      <Helmet>
        <title>{post.title} — Saki Lab</title>
        <meta name="description" content={post.description} />
      </Helmet>

      <main className="min-h-screen bg-deep-blue pt-24 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-soft-gold hover:text-amber-400 transition-colors duration-200 text-sm font-medium mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('blog.backToBlog')}
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="text-6xl mb-4 leading-none">{post.emoji}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-light-gray mb-3 leading-tight">
              {post.title}
            </h1>
            <p className="text-medium-gray text-lg mb-4">{post.description}</p>

            <div className="flex flex-wrap items-center gap-3">
              <time dateTime={post.date} className="text-sm text-medium-gray">
                {formatDate(post.date, lang)}
              </time>
              <span className="text-gray-600">•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-dark-gray border border-gray-600 text-soft-gold font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <hr className="border-gray-700 mb-10" />

          {/* Markdown content */}
          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <hr className="border-gray-700 mt-12 mb-8" />

          {/* Back button bottom */}
          <Link
            to="/blog"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('blog.backToBlog')}
          </Link>
        </div>
      </main>
    </>
  );
};

export default BlogPost;
