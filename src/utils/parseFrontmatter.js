/**
 * Lightweight frontmatter parser — no Node.js APIs, safe for the browser.
 * Returns { data, content } matching the gray-matter interface.
 */
export function parseFrontmatter(raw) {
  const fence = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = raw.match(fence);

  if (!match) {
    return { data: {}, content: raw };
  }

  const yaml = match[1];
  const content = match[2] ?? '';
  const data = {};

  for (const line of yaml.split(/\r?\n/)) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;

    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();

    if (!key) continue;

    // Array: [item1, item2] or item1, item2
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else {
      // Strip optional surrounding quotes
      data[key] = value.replace(/^['"]|['"]$/g, '');
    }
  }

  return { data, content };
}
