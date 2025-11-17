#!/bin/bash

# Script para ver LOGS de contenedores Docker
# Uso: ./scripts/logs.sh [dev|prod|multi] [container-name]

set -e

# Colores para output
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

MODE=${1:-dev}
CONTAINER=${2:-}

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════╗"
echo "║   Logs de contenedores                     ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

case $MODE in
  dev)
    echo -e "${YELLOW}📋 Mostrando logs de DESARROLLO...${NC}"
    if [ -z "$CONTAINER" ]; then
      docker compose logs -f --tail=100
    else
      docker compose logs -f --tail=100 $CONTAINER
    fi
    ;;

  prod)
    echo -e "${YELLOW}📋 Mostrando logs de PRODUCCIÓN...${NC}"
    if [ -z "$CONTAINER" ]; then
      docker compose -f docker-compose.prod.yml logs -f --tail=100
    else
      docker compose -f docker-compose.prod.yml logs -f --tail=100 $CONTAINER
    fi
    ;;

  multi)
    echo -e "${YELLOW}📋 Mostrando logs de MULTI-LANDING...${NC}"
    if [ -z "$CONTAINER" ]; then
      docker compose -f docker-compose.multi.yml logs -f --tail=100
    else
      docker compose -f docker-compose.multi.yml logs -f --tail=100 $CONTAINER
    fi
    ;;

  *)
    echo -e "${RED}❌ Modo no válido: $MODE${NC}"
    echo -e "Uso: ./scripts/logs.sh [dev|prod|multi] [container-name]"
    exit 1
    ;;
esac
