import { parseFrontmatter } from './parseFrontmatter.js';

const modulesEs = import.meta.glob('../portfolio/es/*.md', { query: '?raw', import: 'default', eager: true });
const modulesEn = import.meta.glob('../portfolio/en/*.md', { query: '?raw', import: 'default', eager: true });

function parseModules(modules) {
  const map = {};
  for (const [filepath, raw] of Object.entries(modules)) {
    const slug = filepath.split('/').pop().replace(/\.md$/, '');
    const { data, content } = parseFrontmatter(raw);
    map[slug] = {
      slug,
      content,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      emoji: data.emoji || '🚀',
      url: data.url || '',
      thumbnail: data.thumbnail || '',
      tags: data.tags || [],
      client: data.client || '',
    };
  }
  return map;
}

export function getAllProjects(lang = 'es') {
  const esMap = parseModules(modulesEs);
  const enMap = parseModules(modulesEn);
  const merged = lang === 'en' ? { ...esMap, ...enMap } : esMap;
  return Object.values(merged).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getProjectBySlug(slug, lang = 'es') {
  const esMap = parseModules(modulesEs);
  console.log('[portfolio] modulesEs keys:', Object.keys(modulesEs));
  console.log('[portfolio] esMap keys:', Object.keys(esMap));
  console.log('[portfolio] looking for slug:', slug, '| lang:', lang);
  if (lang === 'en') {
    const enMap = parseModules(modulesEn);
    console.log('[portfolio] enMap keys:', Object.keys(enMap));
    return enMap[slug] ?? esMap[slug] ?? null;
  }
  return esMap[slug] ?? null;
}
