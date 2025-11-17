#!/bin/bash

# Script de APAGADO de contenedores Docker
# Uso: ./scripts/stop.sh [dev|prod|multi|all]

set -e

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Banner
echo -e "${RED}"
echo "╔════════════════════════════════════════════╗"
echo "║   Landing Page - Docker Orchestration      ║"
echo "║   Stop Script v1.0                         ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

# Detectar modo
MODE=${1:-dev}

case $MODE in
  dev)
    echo -e "${YELLOW}🛑 Deteniendo entorno de DESARROLLO...${NC}"
    docker-compose down
    echo -e "${GREEN}✅ Contenedor de desarrollo detenido${NC}"
    ;;

  prod)
    echo -e "${YELLOW}🛑 Deteniendo entorno de PRODUCCIÓN...${NC}"
    docker-compose -f docker-compose.prod.yml down
    echo -e "${GREEN}✅ Contenedor de producción detenido${NC}"
    ;;

  multi)
    echo -e "${YELLOW}🛑 Deteniendo MÚLTIPLES landing pages...${NC}"
    docker-compose -f docker-compose.multi.yml down
    echo -e "${GREEN}✅ Contenedores multi-landing detenidos${NC}"
    ;;

  all)
    echo -e "${YELLOW}🛑 Deteniendo TODOS los contenedores...${NC}"
    docker-compose down 2>/dev/null || true
    docker-compose -f docker-compose.prod.yml down 2>/dev/null || true
    docker-compose -f docker-compose.multi.yml down 2>/dev/null || true
    echo -e "${GREEN}✅ Todos los contenedores detenidos${NC}"
    ;;

  *)
    echo -e "${RED}❌ Modo no válido: $MODE${NC}"
    echo -e "Uso: ./scripts/stop.sh [dev|prod|multi|all]"
    echo -e "  dev   - Detener desarrollo"
    echo -e "  prod  - Detener producción"
    echo -e "  multi - Detener multi-landing"
    echo -e "  all   - Detener todos los contenedores"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo -e "${GREEN}✨ Contenedores detenidos exitosamente${NC}"
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo ""
