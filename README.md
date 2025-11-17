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
- **Containerización**: Docker + Docker Compose
- **Reverse Proxy**: Nginx (para orquestación multi-landing)

## 🐳 Docker - Orquestación de Múltiples Landing Pages

Este template incluye configuración completa de Docker para desarrollo, producción y orquestación de múltiples landing pages simultáneamente.

### ¿Por qué Docker?

- ✅ **Orquestar múltiples landings** en un solo servidor
- ✅ **Aislamiento** entre proyectos
- ✅ **Reproducibilidad** del entorno
- ✅ **Escalabilidad** instantánea
- ✅ **Deploy simplificado**

### Prerrequisitos Docker

- Docker 20+ ([Instalar Docker](https://docs.docker.com/get-docker/))
- Docker Compose 2+ (incluido con Docker Desktop)

### 🚀 Inicio Rápido con Docker

#### Opción 1: Desarrollo (con Hot Reload)

```bash
# Levantar entorno de desarrollo
./scripts/start.sh dev
# o usando npm
npm run docker:dev

# Acceder en: http://localhost:3000
# Los cambios en el código se reflejan automáticamente
```

#### Opción 2: Producción

```bash
# Levantar entorno de producción optimizado
./scripts/start.sh prod
# o usando npm
npm run docker:prod

# Acceder en: http://localhost:3000
```

#### Opción 3: Múltiples Landing Pages (Orquestación)

```bash
# Levantar múltiples landings + Nginx reverse proxy
./scripts/start.sh multi
# o usando npm
npm run docker:multi

# Acceder en:
# - Landing 1: http://localhost:3001
# - Nginx Proxy: http://localhost:80
```

### 📝 Scripts Disponibles

Todos los scripts están en la carpeta `scripts/` y también disponibles vía `npm run`:

| Script | npm run | Descripción |
|--------|---------|-------------|
| `./scripts/start.sh dev` | `npm run docker:dev` | Levantar desarrollo |
| `./scripts/start.sh prod` | `npm run docker:prod` | Levantar producción |
| `./scripts/start.sh multi` | `npm run docker:multi` | Levantar multi-landing |
| `./scripts/stop.sh` | `npm run docker:stop` | Detener contenedores |
| `./scripts/stop.sh all` | `npm run docker:stop:all` | Detener todos |
| `./scripts/restart.sh` | `npm run docker:restart` | Reiniciar contenedores |
| `./scripts/logs.sh` | `npm run docker:logs` | Ver logs en tiempo real |
| `./scripts/build.sh` | `npm run docker:build` | Build de imágenes |
| `./scripts/clean.sh soft` | `npm run docker:clean` | Limpiar contenedores |
| `./scripts/clean.sh hard` | `npm run docker:clean:hard` | Limpieza completa |

### 🏗️ Estructura Docker

```
Template/
├── Dockerfile              # Producción multi-stage optimizado
├── Dockerfile.dev          # Desarrollo con hot reload
├── .dockerignore           # Archivos excluidos del build
├── docker-compose.yml      # Configuración de desarrollo
├── docker-compose.prod.yml # Configuración de producción
├── docker-compose.multi.yml # Orquestación multi-landing
├── nginx/
│   ├── nginx.conf          # Reverse proxy config
│   ├── ssl/                # Certificados SSL
│   └── README.md           # Docs de Nginx
└── scripts/
    ├── start.sh            # Levantar contenedores
    ├── stop.sh             # Detener contenedores
    ├── restart.sh          # Reiniciar contenedores
    ├── logs.sh             # Ver logs
    ├── build.sh            # Build de imágenes
    └── clean.sh            # Limpieza de Docker
```

### 🌐 Configuración Multi-Landing

Para orquestar múltiples landing pages para diferentes clientes:

1. **Clonar template para cada cliente:**

```bash
# Estructura recomendada
projects/
├── landing-template/       # Este repo (template base)
├── landing-cliente-a/      # Copia personalizada cliente A
├── landing-cliente-b/      # Copia personalizada cliente B
└── landing-cliente-c/      # Copia personalizada cliente C
```

2. **Editar `docker-compose.multi.yml`:**

```yaml
services:
  landing-2:
    build:
      context: ../landing-cliente-a
      dockerfile: Dockerfile
    container_name: landing-2-cliente-a
    ports:
      - "3002:3000"
    environment:
      - NODE_ENV=production
      - PROJECT_NAME=landing-cliente-a
    restart: always
    networks:
      - multi-landing-network
```

3. **Configurar dominios en Nginx:**

Edita `nginx/nginx.conf`:

```nginx
server {
    listen 80;
    server_name cliente-a.com www.cliente-a.com;

    location / {
        proxy_pass http://landing-2:3000;
        # ... configuración de proxy
    }
}
```

4. **Levantar orquestación:**

```bash
./scripts/start.sh multi
```

### 🔒 SSL/HTTPS con Let's Encrypt

Para habilitar HTTPS en tus landing pages:

```bash
# 1. Instalar certbot
sudo apt-get install certbot python3-certbot-nginx

# 2. Obtener certificado
sudo certbot --nginx -d midominio.com -d www.midominio.com

# 3. Copiar certificados a nginx/ssl/
mkdir -p nginx/ssl
sudo cp /etc/letsencrypt/live/midominio.com/fullchain.pem nginx/ssl/midominio.com.crt
sudo cp /etc/letsencrypt/live/midominio.com/privkey.pem nginx/ssl/midominio.com.key

# 4. Descomentar sección SSL en nginx/nginx.conf

# 5. Reiniciar Nginx
docker-compose -f docker-compose.multi.yml restart nginx
```

Ver `nginx/README.md` para más detalles.

### 📊 Monitoring y Logs

```bash
# Ver logs de todos los contenedores
./scripts/logs.sh dev

# Ver logs de un contenedor específico
./scripts/logs.sh multi landing-1

# Ver estado de contenedores
docker ps

# Ver uso de recursos
docker stats
```

### 🔧 Troubleshooting Docker

#### Puerto ya en uso

```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "3001:3000"  # Usar 3001 en lugar de 3000
```

#### Reconstruir imágenes desde cero

```bash
./scripts/build.sh prod
# o
docker-compose build --no-cache
```

#### Ver qué está consumiendo espacio

```bash
docker system df
```

#### Limpieza completa

```bash
./scripts/clean.sh hard
```

### 🚀 Deploy en Producción

#### Opción 1: VPS con Docker

```bash
# 1. SSH al servidor
ssh usuario@tu-servidor.com

# 2. Clonar repositorio
git clone <tu-repo>
cd Template

# 3. Levantar producción
./scripts/start.sh prod

# 4. Configurar dominio en DNS apuntando a tu IP
# 5. Configurar SSL con Let's Encrypt (ver sección SSL)
```

#### Opción 2: Vercel (sin Docker)

```bash
# Vercel maneja la containerización automáticamente
vercel --prod
```

### 💡 Ventajas del Stack con Docker

1. **Un servidor, múltiples clientes**: Corre 5-10 landing pages en un VPS de $5/mes
2. **Actualizaciones sin downtime**: Rolling updates con `docker-compose up -d`
3. **Escalabilidad**: Agrega más contenedores según demanda
4. **Backup simplificado**: Backup del código + volumes = restore completo
5. **Desarrollo = Producción**: Mismo ambiente en todas partes

## 📦 Instalación (Sin Docker)

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
