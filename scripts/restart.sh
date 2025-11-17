#!/bin/bash

# Script de REINICIO de contenedores Docker
# Uso: ./scripts/restart.sh [dev|prod|multi]

set -e

# Colores para output
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

MODE=${1:-dev}

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════╗"
echo "║   Reiniciando contenedores...              ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

echo -e "${YELLOW}⏸️  Deteniendo contenedores...${NC}"
./scripts/stop.sh $MODE

echo ""
echo -e "${YELLOW}🔄 Esperando 2 segundos...${NC}"
sleep 2

echo ""
echo -e "${YELLOW}▶️  Iniciando contenedores...${NC}"
./scripts/start.sh $MODE
