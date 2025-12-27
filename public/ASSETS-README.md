# Archivos de Assets Requeridos

Este directorio contiene los archivos estáticos del sitio. Para personalizar tu landing page, necesitas generar/reemplazar los siguientes archivos:

## Favicon e Iconos

| Archivo | Tamaño | Descripción | Cómo Generarlo |
|---------|--------|-------------|----------------|
| `favicon.ico` | 32x32, 16x16 | Icono del navegador | [favicon.io](https://favicon.io) o [realfavicongenerator.net](https://realfavicongenerator.net) |
| `icon.svg` | Vectorial | Favicon SVG moderno | Edita el archivo existente o usa tu logo |
| `apple-touch-icon.png` | 180x180 | Icono para iOS | Genera desde tu logo en los sitios anteriores |

## Imágenes para Redes Sociales (Open Graph)

| Archivo | Tamaño | Descripción |
|---------|--------|-------------|
| `og-image.png` | 1200x630 | Imagen que aparece al compartir en Facebook, LinkedIn, WhatsApp |
| `twitter-image.png` | 1200x600 | (Opcional) Imagen específica para Twitter |

### Herramientas para crear og-image.png:

1. **Canva** (gratis): [canva.com](https://canva.com) - Busca "Open Graph template"
2. **Figma** (gratis): [figma.com](https://figma.com) - Crea un frame de 1200x630px
3. **OG Image Generator**: [og-image.vercel.app](https://og-image.vercel.app)

### Contenido recomendado para og-image.png:

- Logo de la empresa
- Título principal del sitio
- Tagline o descripción corta
- Colores de marca
- Evitar mucho texto (se ve pequeño en móviles)

## Logo

Para agregar tu logo:

1. Coloca tu logo como `logo.svg` o `logo.png` en este directorio
2. Actualiza `BRAND.logo` en:
   - `components/Navbar.tsx`
   - `components/Footer.tsx`

## Imágenes del Hero

Para reemplazar la ilustración placeholder del Hero:

1. Coloca tu imagen como `hero-image.png` o `hero-image.svg`
2. Edita `components/Hero.tsx` y reemplaza el SVG por:

```tsx
<img src="/hero-image.png" alt="Hero" className="w-full h-full object-cover rounded-2xl" />
```

## Generadores Recomendados

- **Favicon completo**: https://realfavicongenerator.net
- **Iconos rápidos**: https://favicon.io
- **Imágenes OG**: https://og-image.vercel.app
- **Iconos SVG gratuitos**: https://yesicon.app
- **Ilustraciones**: https://undraw.co/illustrations

---

## Cómo usar yesicon.app para personalizar iconos

El template usa iconos SVG inline. Puedes mejorarlos con iconos de [yesicon.app](https://yesicon.app):

### Paso a paso:

1. Ve a https://yesicon.app
2. Busca el icono que necesitas (ej: "rocket", "email", "phone")
3. Haz clic en el icono
4. Copia el código SVG
5. Pégalo en el componente correspondiente

### Archivos con iconos personalizables:

| Archivo | Iconos | Descripción |
|---------|--------|-------------|
| `components/Features.tsx` | 6 iconos | Características del servicio |
| `components/CTA.tsx` | 3 iconos | Email, teléfono, horario |
| `components/Footer.tsx` | 4 iconos | Redes sociales |
| `components/Services.tsx` | Checkmarks | Lista de features |

### Sets de iconos recomendados:

| Set | Estilo | Ideal para |
|-----|--------|------------|
| **Heroicons** | Línea/Sólido | UI moderna, apps |
| **Phosphor** | Múltiples pesos | Versatilidad |
| **Tabler** | Línea consistente | Dashboard |
| **Lucide** | Minimalista | Sitios limpios |
| **Simple Icons** | Logos de marcas | Redes sociales |

### Tip: Mantener consistencia

- Usa iconos del mismo set en todo el sitio
- Mantén `className="w-12 h-12"` para Features, `w-6 h-6` para pequeños
- Usa `text-primary-600` para que respeten los colores de marca
