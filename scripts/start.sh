#!/bin/bash

# Script de LEVANTADO de contenedores Docker
# Uso: ./scripts/start.sh [dev|prod|multi]

set -e

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Banner
echo -e "${BLUE}"
echo "╔════════════════════════════════════════════╗"
echo "║   Landing Page - Docker Orchestration      ║"
echo "║   Start Script v1.0                        ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

# Detectar modo (dev, prod, multi)
MODE=${1:-dev}

case $MODE in
  dev)
    echo -e "${YELLOW}🚀 Levantando entorno de DESARROLLO...${NC}"
    docker compose up -d
    echo -e "${GREEN}✅ Contenedor de desarrollo iniciado${NC}"
    echo -e "${BLUE}📍 URL: http://localhost:3000${NC}"
    echo -e "${YELLOW}💡 Hot reload habilitado - Los cambios se verán en tiempo real${NC}"
    ;;

  prod)
    echo -e "${YELLOW}🚀 Levantando entorno de PRODUCCIÓN...${NC}"
    docker compose -f docker-compose.prod.yml up -d --build
    echo -e "${GREEN}✅ Contenedor de producción iniciado${NC}"
    echo -e "${BLUE}📍 URL: http://localhost:3000${NC}"
    ;;

  multi)
    echo -e "${YELLOW}🚀 Levantando MÚLTIPLES landing pages...${NC}"
    docker compose -f docker-compose.multi.yml up -d --build
    echo -e "${GREEN}✅ Contenedores multi-landing iniciados${NC}"
    echo -e "${BLUE}📍 URLs disponibles:${NC}"
    echo -e "  - Landing 1: http://localhost:3001"
    echo -e "  - Nginx Proxy: http://localhost:80"
    echo -e "${YELLOW}💡 Agrega más landings en docker-compose.multi.yml${NC}"
    ;;

  *)
    echo -e "${RED}❌ Modo no válido: $MODE${NC}"
    echo -e "Uso: ./scripts/start.sh [dev|prod|multi]"
    echo -e "  dev   - Entorno de desarrollo con hot reload (por defecto)"
    echo -e "  prod  - Entorno de producción optimizado"
    echo -e "  multi - Múltiples landing pages orquestados"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo -e "${GREEN}✨ Contenedores iniciados exitosamente${NC}"
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo ""
echo -e "Comandos útiles:"
echo -e "  ${BLUE}./scripts/logs.sh${NC}     - Ver logs en tiempo real"
echo -e "  ${BLUE}./scripts/stop.sh${NC}     - Detener contenedores"
echo -e "  ${BLUE}./scripts/restart.sh${NC}  - Reiniciar contenedores"
echo -e "  ${BLUE}docker ps${NC}             - Ver contenedores activos"
echo ""
