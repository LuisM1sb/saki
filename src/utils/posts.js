import { parseFrontmatter as matter } from './parseFrontmatter.js';

// Import all markdown files from src/posts/
const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts() {
  const posts = Object.entries(modules).map(([filepath, raw]) => {
    const { data, content } = matter(raw);
    const filename = filepath.split('/').pop(); // e.g. "por-que-wordpress-es-lento.md"
    const slug = filename.replace(/\.md$/, '');
    return {
      slug,
      content,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      emoji: data.emoji || '📝',
      tags: data.tags || [],
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug) || null;
}
