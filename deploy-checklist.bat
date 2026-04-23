@echo off
REM 🚀 Script de Deploy - Railway Setup (Windows)

setlocal enabledelayedexpansion

echo.
echo ==========================================
echo 🚀 RAILWAY DEPLOYMENT CONFIGURATION
echo ==========================================
echo.

REM 1. Verificar Git status
echo 📋 Status do Git:
git status

echo.
echo ✅ Seu código está pronto para deploy!
echo.
echo ==========================================
echo 📋 PRÓXIMOS PASSOS:
echo ==========================================
echo.
echo 1️⃣  Acesse: https://railway.app
echo.
echo 2️⃣  Login com GitHub:
echo     → Clique "Start Project"
echo     → Login com GitHub (alesxandrocosta)
echo.
echo 3️⃣  Deploy automático:
echo     → "New Project" - "Deploy from GitHub"
echo     → Selecione: alesxandrocosta/inventario
echo     → Clique "Deploy"
echo.
echo 4️⃣  Aguarde 3-5 minutos compilação
echo.
echo 5️⃣  Adicione MySQL:
echo     → Clique "+ Add"
echo     → Database - MySQL
echo.
echo 6️⃣  Configure variáveis:
echo     → NODE_ENV = production
echo     → API_PORT = 8000
echo.
echo 7️⃣  Obtenha URL pública ^(em Domains^)
echo.
echo 8️⃣  Teste: https://seu-app.railway.app/api/health
echo.
echo ==========================================
echo 📞 Dúvidas? Veja: RAILWAY_VISUAL_GUIDE.md
echo ==========================================
echo.

pause
