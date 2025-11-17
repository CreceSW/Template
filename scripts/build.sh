#!/bin/bash

# Script de BUILD de imágenes Docker
# Uso: ./scripts/build.sh [dev|prod|multi]

set -e

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

MODE=${1:-prod}

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════╗"
echo "║   Building Docker Images...                ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

case $MODE in
  dev)
    echo -e "${YELLOW}🏗️  Building imagen de DESARROLLO...${NC}"
    docker-compose build
    echo -e "${GREEN}✅ Imagen de desarrollo construida${NC}"
    ;;

  prod)
    echo -e "${YELLOW}🏗️  Building imagen de PRODUCCIÓN...${NC}"
    docker-compose -f docker-compose.prod.yml build --no-cache
    echo -e "${GREEN}✅ Imagen de producción construida${NC}"
    ;;

  multi)
    echo -e "${YELLOW}🏗️  Building imágenes MULTI-LANDING...${NC}"
    docker-compose -f docker-compose.multi.yml build --no-cache
    echo -e "${GREEN}✅ Imágenes multi-landing construidas${NC}"
    ;;

  *)
    echo -e "${RED}❌ Modo no válido: $MODE${NC}"
    echo -e "Uso: ./scripts/build.sh [dev|prod|multi]"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo -e "${GREEN}✨ Build completado exitosamente${NC}"
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo ""
