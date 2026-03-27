# Informe SEO Técnico — Saki Lab

**Fecha:** 2026-03-26
**Proyecto:** sakilab.cl (React 19 + Vite + Tailwind CSS)
**Desplegado en:** Vercel

---

## Diagnóstico inicial

### Problemas críticos

**HashRouter — URLs no indexables**
El proyecto usaba `HashRouter`, lo que generaba URLs del tipo `sakilab.cl/#/`. Los crawlers de Google no indexan correctamente las rutas con hash. Se requería migrar a `BrowserRouter` con soporte de servidor para las rutas.

**CDN script de react-helmet en index.html**
Se cargaba `react-helmet@6.1.0` vía unpkg como script UMD bloqueante. Era incompatible con el entorno ESM de Vite y con React 19, y no estaba siendo usado mediante import en ningún componente.

**`<meta>` incorrecto en Footer.jsx**
El componente `Footer` contenía un `<meta name="description">` que sobreescribía la descripción correcta definida en `App.jsx`.

### Problemas moderados

**Meta tags incompletos**

| Tag | Estado inicial |
|-----|----------------|
| `og:title` | Solo en App.jsx, ausente en index.html |
| `og:description` | Solo en App.jsx, ausente en index.html |
| `og:image` | Ausente en ambos |
| `og:url` | Ausente en ambos |
| `og:locale` | Ausente |
| `og:site_name` | Ausente |
| `twitter:site` | Ausente |
| `twitter:image` | Ausente |
| `canonical` | Ausente en ambos |

**Meta tags duplicados en tres lugares**
`index.html`, `App.jsx` y `Footer.jsx` definían meta tags de forma inconsistente, sin una fuente única de verdad.

**Favicon genérico de Vite**
El favicon apuntaba a `/vite.svg` (logo por defecto de Vite).

**Copyright desactualizado**
El footer mostraba `© 2025 Saki Lab` en lugar de 2026.

### Optimización de build

`vite.config.js` tenía configuración mínima sin estrategia de chunking. El vendor bundle (React, React DOM, React Router) se mezclaba con el código de la aplicación, impidiendo que el navegador cachee las dependencias entre deploys.

### Archivos faltantes

- `public/robots.txt` — ausente
- `public/sitemap.xml` — ausente
- `vercel.json` — ausente (necesario para BrowserRouter en Vercel)

---

## Cambios aplicados

### `src/main.jsx` — HashRouter → BrowserRouter

```jsx
// Antes
import { HashRouter } from 'react-router-dom'
<HashRouter><App /></HashRouter>

// Después
import { BrowserRouter } from 'react-router-dom'
<BrowserRouter><App /></BrowserRouter>
```

### `vercel.json` (nuevo)

Rewrite SPA necesario para que Vercel sirva `index.html` en cualquier ruta, evitando errores 404 al recargar la página o acceder directamente a una URL.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### `index.html` — Meta tags completos

- Eliminado el CDN script de `react-helmet@6.1.0`
- Favicon actualizado de `/vite.svg` a `/favicon.svg`
- Agregados: `canonical`, `og:url`, `og:image`, `og:image:width`, `og:image:height`, `og:locale`, `og:site_name`, `twitter:site`, `twitter:image`

### `src/App.jsx` — Eliminación de meta tags duplicados

Se removieron todos los `<title>` y `<meta>` del componente. Los meta tags ahora viven exclusivamente en `index.html`, como fuente única de verdad para un sitio de una sola ruta.

### `src/components/Footer.jsx`

- Eliminado `<meta name="description">` incorrecto
- Copyright actualizado: `© 2025` → `© 2026`

### `public/robots.txt` (nuevo)

```
User-agent: *
Allow: /

Sitemap: https://sakilab.cl/sitemap.xml
```

### `public/sitemap.xml` (nuevo)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sakilab.cl/</loc>
    <lastmod>2026-03-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### `vite.config.js` — Vendor chunk separado

```js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
      },
    },
  },
},
```

Separa las dependencias en un chunk `vendor` independiente. El navegador puede cachear este bundle entre deploys ya que las dependencias cambian con menos frecuencia que el código de la aplicación.

---

## Pendiente

| Acción | Detalle |
|--------|---------|
| Subir `/public/og-image.png` | Imagen de preview social, 1200×630 px |
| Subir `/public/favicon.svg` | Reemplaza el vite.svg genérico de Vite |
| Enviar sitemap a Google Search Console | `https://sakilab.cl/sitemap.xml` |
| Verificar Open Graph | Usar [opengraph.xyz](https://www.opengraph.xyz) una vez subida la `og-image.png` |
