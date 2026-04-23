# ⚡ Deploy em 5 Minutos com Railway.app

## 🚀 Passo 1: Preparar Repositório

```bash
cd c:\INVENTARIO
git add .
git commit -m "deployment: Adicionar configurações de produção"
git push origin master
```

## ⚙️ Passo 2: Criar conta em Railway.app

Acesse **https://railway.app** e clique em **"Start Project"**

Faça login com GitHub (autorize Railway a acessar seus repositórios)

## 📂 Passo 3: Criar novo projeto

1. Clique em **"New Project"** (dashboard)
2. Selecione **"Deploy from GitHub"**
3. Procure e selecione: **`alesxandrocosta/inventario`**
4. Clique em **"Deploy Now"**

## 🗄️ Passo 4: Adicionar Banco de Dados

1. Na página do projeto, clique em **"→ Add"** (botão roxo)
2. Selecione **"Database"**
3. Escolha **"MySQL"**
4. Railway criará automaticamente com:
   - Host: `seu_host_aqui`
   - User: `root`
   - Password: (auto-gerado)

## 🔧 Passo 5: Configurar Variáveis de Ambiente

Na aba **"Variables"** do projeto, adicione:

```
DB_HOST = (pega do MySQL - pronto no Railway)
DB_USER = root
DB_PASSWORD = (pega do MySQL - pronto no Railway)
DB_DATABASE = railway
NODE_ENV = production
API_PORT = 8000
```

## 🎨 Passo 6: Deploy do Frontend em Vercel

```bash
cd c:\INVENTARIO\frontend

# Login no Vercel (cria conta se não tiver)
npm install -g vercel
vercel login

# Deploy
vercel
```

Ou pelo site **https://vercel.com**:
1. Clique em **"Import Project"**
2. Selecione seu repositório GitHub
3. Configure com Vite
4. Adicione variável de ambiente:
   ```
   VITE_API_URL = https://seu-app.railway.app (pega do Railway)
   ```
5. Clique em **"Deploy"**

## ✅ Teste

Acesse a URL do Vercel e teste:
- ✓ Criar equipamento
- ✓ Listar equipamentos
- ✓ Editar
- ✓ Deletar

## 🎉 Pronto!

Seu sistema está **REMOTAMENTE ACESSÍVEL!**

```
Frontend: https://inventario-*.vercel.app
Backend API: https://seu-app.railway.app/api/equipments
```

---

## 🆘 Problemas Comuns

### ❌ "CORS error"
→ Verificar VITE_API_URL em Vercel

### ❌ "Cannot connect to database"
→ Verificar DB_HOST, DB_USER, DB_PASSWORD no Railway

### ❌ "Build failed"
→ Ver logs em Railway Dashboard → Logs

---

## 📞 Suporte

- Railway: docs.railway.app
- Vercel: vercel.com/docs
- GitHub Issues: seu repositório

Pronto para questões! 🚀
