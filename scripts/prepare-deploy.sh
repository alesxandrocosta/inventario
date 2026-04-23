#!/bin/bash
# 📦 Script de Preparação para Deploy

echo "🚀 Preparando Sistema para Deploy Remoto..."

# 1. Limpar node_modules antigos
echo "📦 Limpando dependências..."
rm -rf backend/node_modules frontend/node_modules
rm backend/package-lock.json frontend/package-lock.json

# 2. Reinstalar dependências
echo "🔄 Reinstalando dependências..."
cd backend && npm install
cd ../frontend && npm install
cd ..

# 3. Build do frontend
echo "🏗️ Compilando frontend..."
cd frontend && npm run build
cd ..

# 4. Verificar variáveis de ambiente
echo "🔑 Verificando variáveis de ambiente..."
if [ ! -f .env.production ]; then
  echo "⚠️ Arquivo .env.production não encontrado!"
  echo "Criando arquivo com variáveis padrão..."
  cat > .env.production << EOF
DB_HOST=localhost
DB_USER=inventario_user
DB_PASSWORD=sua_senha_aqui
DB_DATABASE=inventario_db
API_PORT=3001
NODE_ENV=production
EOF
  echo "✏️ Edite .env.production com suas credenciais reais"
fi

# 5. Git status
echo "📋 Status do Git:"
git status

echo ""
echo "✅ Preparação concluída!"
echo ""
echo "🎯 Próximos passos:"
echo "1. Editar .env.production com credenciais reais"
echo "2. Fazer commit: git commit -am 'Deploy: Preparar para produção'"
echo "3. Fazer push: git push origin master"
echo ""
echo "Para mais detalhes, veja: DEPLOY.md"
