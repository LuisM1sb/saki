import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getAllPosts } from '../utils/posts';

const posts = getAllPosts();

function formatDate(dateStr, locale) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'es' ? 'es-CL' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const Blog = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('blog.metaTitle')}</title>
        <meta name="description" content={t('blog.metaDescription')} />
      </Helmet>

      <main className="min-h-screen bg-deep-blue pt-24 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
              {t('blog.heading')}
            </h1>
            <p className="text-medium-gray text-lg max-w-2xl mx-auto">
              {t('blog.subheading')}
            </p>
          </div>

          {/* Posts grid */}
          {posts.length === 0 ? (
            <p className="text-center text-medium-gray">{t('blog.empty')}</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="card flex flex-col hover:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold rounded-xl"
                >
                  {/* Emoji */}
                  <div className="text-5xl mb-4 leading-none">{post.emoji}</div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-light-gray mb-2 leading-snug">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-medium-gray text-sm leading-relaxed mb-4 flex-1">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-deep-blue border border-gray-600 text-soft-gold font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Date */}
                  <time
                    dateTime={post.date}
                    className="text-xs text-medium-gray border-t border-gray-700 pt-3 mt-auto"
                  >
                    {formatDate(post.date, i18n.language)}
                  </time>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Blog;
