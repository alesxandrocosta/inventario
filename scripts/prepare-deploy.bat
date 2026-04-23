REM Deploy Preparation Script for Windows
REM Replace /bash script for Windows environments

@echo off
setlocal enabledelayedexpansion

echo.
echo 🚀 Preparando Sistema para Deploy Remoto...
echo.

REM 1. Limpar node_modules antigos
echo 📦 Limpando dependências...
if exist backend\node_modules rmdir /s /q backend\node_modules
if exist frontend\node_modules rmdir /s /q frontend\node_modules
del /f backend\package-lock.json frontend\package-lock.json 2>nul

REM 2. Reinstalar dependências
echo 🔄 Reinstalando dependências backend...
cd backend
call npm install
cd ..

echo 🔄 Reinstalando dependências frontend...
cd frontend
call npm install
cd ..

REM 3. Build do frontend
echo 🏗️ Compilando frontend...
cd frontend
call npm run build
cd ..

REM 4. Verificar variáveis de ambiente
echo 🔑 Verificando variáveis de ambiente...
if not exist .env.production (
  echo ⚠️ Arquivo .env.production não encontrado!
  echo Criando arquivo com variáveis padrão...
  (
    echo DB_HOST=localhost
    echo DB_USER=inventario_user
    echo DB_PASSWORD=sua_senha_aqui
    echo DB_DATABASE=inventario_db
    echo API_PORT=3001
    echo NODE_ENV=production
  ) > .env.production
  echo ✏️ Edite .env.production com suas credenciais reais
)

REM 5. Git status
echo 📋 Status do Git:
call git status

echo.
echo ✅ Preparação concluída!
echo.
echo 🎯 Próximos passos:
echo 1. Editar .env.production com credenciais reais
echo 2. Fazer commit: git commit -am "Deploy: Preparar para produção"
echo 3. Fazer push: git push origin master
echo.
echo Para mais detalhes, veja: DEPLOY.md
echo.

pause
