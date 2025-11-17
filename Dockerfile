# Dockerfile Multi-Stage para Next.js 14
# Optimizado para producción con menor tamaño de imagen

# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar dependencias desde deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de Next.js
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Runner (Producción)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios desde builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar ownership a nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
