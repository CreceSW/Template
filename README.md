# 🚀 Landing Page Template - Next.js 14 + TypeScript + Tailwind CSS

Template profesional de landing page estático creado con las tecnologías más modernas del stack recomendado para startups de desarrollo web.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Características

- ⚡ **Next.js 14+** con App Router
- 🔷 **TypeScript** para type safety
- 🎨 **Tailwind CSS** para estilos modernos
- 📱 **Responsive Design** (móvil, tablet, escritorio)
- 🎯 **SEO Optimizado**
- 🚀 **Performance optimizado**
- ♿ **Accesible** (WAI-ARIA)
- 🎭 **Componentes reutilizables**
- 📝 **Formulario de contacto** funcional
- 🌙 **Smooth scroll** entre secciones

## 📋 Secciones Incluidas

El template incluye todas las secciones esenciales para un landing page profesional:

1. **Navbar** - Navegación responsive con menú móvil
2. **Hero** - Sección principal con CTA y estadísticas
3. **Features** - 6 características destacadas con iconos
4. **About** - Sección sobre nosotros con puntos clave
5. **Services** - 6 paquetes de servicios con precios
6. **Testimonials** - Testimonios de clientes con ratings
7. **CTA/Contact** - Formulario de contacto funcional
8. **Footer** - Footer completo con enlaces y redes sociales

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14.2.0
- **Lenguaje**: TypeScript 5.4.0
- **Estilos**: Tailwind CSS 3.4.0
- **Runtime**: Node.js 20+ LTS

## 📦 Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- Node.js 20+ ([Descargar](https://nodejs.org))
- npm, pnpm o yarn

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd Template
```

2. **Instalar dependencias**

```bash
npm install
# o con pnpm
pnpm install
# o con yarn
yarn install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
# o con pnpm
pnpm dev
# o con yarn
yarn dev
```

4. **Abrir en el navegador**

Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 🚀 Scripts Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
Template/
├── app/
│   ├── globals.css          # Estilos globales + Tailwind
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página principal
├── components/
│   ├── Navbar.tsx            # Barra de navegación
│   ├── Hero.tsx              # Sección hero
│   ├── Features.tsx          # Características
│   ├── About.tsx             # Sobre nosotros
│   ├── Services.tsx          # Servicios y precios
│   ├── Testimonials.tsx      # Testimonios
│   ├── CTA.tsx               # Call to action + Formulario
│   └── Footer.tsx            # Pie de página
├── public/                   # Archivos estáticos
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Personalización

### 1. Cambiar colores principales

Edita `tailwind.config.ts` para cambiar los colores del tema:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',  // Cambiar color principal
      secondary: '#8b5cf6', // Cambiar color secundario
    },
  },
},
```

O simplemente busca y reemplaza en todos los archivos:
- `blue-600` por tu color preferido
- `blue-50` por el tono claro correspondiente

### 2. Modificar textos y contenido

Todos los textos están directamente en los componentes para facilitar la personalización:

- **Marca/Logo**: `components/Navbar.tsx` y `components/Footer.tsx`
- **Título principal**: `components/Hero.tsx`
- **Servicios y precios**: `components/Services.tsx`
- **Características**: `components/Features.tsx`
- **Testimonios**: `components/Testimonials.tsx`

### 3. Agregar imágenes

Coloca tus imágenes en la carpeta `public/` y refiérelas así:

```tsx
<img src="/tu-imagen.jpg" alt="Descripción" />
```

### 4. Configurar formulario de contacto

El formulario en `components/CTA.tsx` actualmente solo muestra un mensaje de éxito. Para hacerlo funcional:

**Opción A: Usar un servicio de email (Recomendado)**

```bash
npm install resend
```

**Opción B: Crear una API Route en Next.js**

Crea `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Aquí integras con tu servicio de email
  // Ejemplo: Resend, SendGrid, etc.

  return NextResponse.json({ success: true });
}
```

### 5. Cambiar fuente

Edita `app/layout.tsx` para usar otra fuente de Google Fonts:

```typescript
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"]
});
```

## 🌐 Despliegue

### Deploy en Vercel (Recomendado - GRATIS)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. ¡Deploy automático! ✨

### Build manual

```bash
npm run build
npm run start
```

## 📱 Responsive Breakpoints

El template usa los breakpoints estándar de Tailwind:

- **sm**: 640px (móviles grandes)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (escritorios)

## ⚡ Performance

Este template está optimizado para máximo rendimiento:

- ✅ Server Components por defecto
- ✅ Lazy loading de imágenes
- ✅ CSS optimizado con Tailwind
- ✅ Código TypeScript type-safe
- ✅ Bundle optimizado por Next.js

## 🔧 Troubleshooting

### Error: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Estilos de Tailwind no se aplican

Verifica que `tailwind.config.ts` incluya las rutas correctas:

```typescript
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
```

### Puerto 3000 ocupado

```bash
# Usa otro puerto
npm run dev -- -p 3001
```

## 📚 Recursos Adicionales

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios grandes, abre un issue primero para discutir los cambios propuestos.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - siéntete libre de usarlo para proyectos personales o comerciales.

## 💼 Sobre el Stack

Este template sigue el **Stack Tecnológico Definitivo para Startups de Desarrollo Web**, diseñado para:

- ✅ Entrega rápida de proyectos (3-5 días para landing pages)
- ✅ Escalabilidad desde MVP hasta producción
- ✅ Costo $0 en fase inicial
- ✅ Compatible con Claude Code como copiloto de desarrollo

## 🎯 Casos de Uso

Este template es perfecto para:

- Landing pages de productos/servicios
- Sitios web corporativos
- Portfolios profesionales
- Páginas de captura de leads
- Sitios promocionales
- MVPs de startups

## 📞 Soporte

¿Tienes preguntas?

- Abre un issue en GitHub
- Consulta la documentación oficial de Next.js
- Usa Claude Code como asistente de desarrollo

---

**Hecho con ❤️ usando el Stack Tech definitivo para Startups**

Next.js 14 + TypeScript + Tailwind CSS + Vercel

---

## 🚀 Próximos Pasos

Después de personalizar este template, considera:

1. **Agregar Analytics**: Vercel Analytics o Google Analytics
2. **Integrar CMS**: Sanity.io para contenido dinámico
3. **Configurar SEO**: next-seo para meta tags avanzados
4. **Agregar Blog**: Con MDX o Sanity
5. **Implementar Formularios**: Con Resend o SendGrid
6. **Integrar Pagos**: Con Stripe para ventas
7. **Agregar Autenticación**: Con NextAuth.js

¡Feliz desarrollo! 🎉
