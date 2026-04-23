#!/bin/bash
# Script de Instalação Rápida - Sistema de Inventário

echo "🚀 Iniciando instalação do Sistema de Inventário..."
echo "=================================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar Node.js
echo -e "${YELLOW}Verificando Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não instalado. Instale em https://nodejs.org${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js encontrado$(node --version)${NC}"

# Verificar npm
echo -e "${YELLOW}Verificando npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não instalado.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm encontrado ($(npm --version))${NC}"

# Verificar MySQL
echo -e "${YELLOW}Verificando MySQL...${NC}"
if ! command -v mysql &> /dev/null; then
    echo -e "${RED}❌ MySQL não encontrado. Instale MySQL Server.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ MySQL encontrado${NC}"

# Backend
echo -e "${YELLOW}Instalando Backend...${NC}"
cd backend
npm install
echo -e "${GREEN}✅ Backend instalado${NC}"

# Frontend
echo -e "${YELLOW}Instalando Frontend...${NC}"
cd ../frontend
npm install
echo -e "${GREEN}✅ Frontend instalado${NC}"

cd ..

# Criar arquivo .env backend
echo -e "${YELLOW}Criando arquivo .env do Backend...${NC}"
if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo -e "${GREEN}✅ .env criado em backend/.env${NC}"
    echo -e "${YELLOW}⚠️  Edite backend/.env com suas credenciais MySQL${NC}"
fi

# Criar arquivo .env frontend
echo -e "${YELLOW}Criando arquivo .env do Frontend...${NC}"
if [ ! -f "frontend/.env" ]; then
    cp frontend/.env.example frontend/.env
    echo -e "${GREEN}✅ .env criado em frontend/.env${NC}"
fi

echo ""
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Instalação Concluída!${NC}"
echo -e "${GREEN}════════════════════════════════════════════${NC}"
echo ""
echo "Próximos passos:"
echo "1. ⚙️  Editar backend/.env com suas credenciais MySQL"
echo "2. 📊 Criar banco de dados:"
echo "   mysql -u root -p < database/schema.sql"
echo "3. 🔙 Iniciar Backend:"
echo "   cd backend && npm run dev"
echo "4. 🎨 Iniciar Frontend (outro terminal):"
echo "   cd frontend && npm run dev"
echo "5. 🌐 Acessar: http://localhost:3000"
echo ""
