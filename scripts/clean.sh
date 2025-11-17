#!/bin/bash

# Script de LIMPIEZA de Docker
# Limpia contenedores, imágenes y volúmenes no utilizados
# Uso: ./scripts/clean.sh [soft|hard]

set -e

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

MODE=${1:-soft}

echo -e "${YELLOW}"
echo "╔════════════════════════════════════════════╗"
echo "║   Docker Cleanup Script                    ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

case $MODE in
  soft)
    echo -e "${YELLOW}🧹 Limpieza SUAVE - Solo contenedores detenidos...${NC}"
    docker container prune -f
    echo -e "${GREEN}✅ Contenedores detenidos eliminados${NC}"
    ;;

  hard)
    echo -e "${RED}⚠️  LIMPIEZA COMPLETA - Esto eliminará:${NC}"
    echo -e "  - Todos los contenedores detenidos"
    echo -e "  - Todas las imágenes no utilizadas"
    echo -e "  - Todas las redes no utilizadas"
    echo -e "  - Todo el cache de build"
    echo ""
    read -p "¿Estás seguro? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      echo -e "${YELLOW}🧹 Iniciando limpieza completa...${NC}"
      docker system prune -af --volumes
      echo -e "${GREEN}✅ Limpieza completa finalizada${NC}"
    else
      echo -e "${YELLOW}❌ Limpieza cancelada${NC}"
      exit 0
    fi
    ;;

  *)
    echo -e "${RED}❌ Modo no válido: $MODE${NC}"
    echo -e "Uso: ./scripts/clean.sh [soft|hard]"
    echo -e "  soft - Limpieza suave (contenedores detenidos)"
    echo -e "  hard - Limpieza completa (requiere confirmación)"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo -e "${GREEN}✨ Limpieza completada${NC}"
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo ""
