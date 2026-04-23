# 🚀 Guia Completo de Deploy Remoto

## Arquitetura

```
📱 Cliente (Browser)
    ↓
🌐 Frontend - Vercel (HTTPS)
    ↓
⚙️ Backend - Render (HTTPS)
    ↓
🗄️ MySQL - Banco de Dados Gerenciado
```

---

## ✅ Opção 1: Deploy Rápido com Render + Vercel

### Parágrafo 1: Preparar repositório local

```bash
cd c:\INVENTARIO
git status
git add .
git commit -m "Deploy: Preparar para ambiente remoto"
git push origin master
```

### Passo 2: Criar Backend em Render.com

**No site render.com:**

1. **Criar conta**: https://render.com (Login com GitHub)
2. **Conectar repositório GitHub**:
   - Dashboard → New → Web Service
   - Connect Repository → Selecionar `alesxandrocosta/inventario`
   - Branch: `master`

3. **Configurar Build & Deploy**:
   - **Name**: `inventario-api`
   - **Runtime**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Production`
   - **Plan**: Free (ou Pro conforme necessário)

4. **Variáveis de Ambiente** (na seção `Environment`):
   ```
   NODE_ENV = production
   DB_HOST = localhost (ou seu host MySQL)
   DB_USER = inventario_user
   DB_PASSWORD = sua_senha_segura
   DB_DATABASE = inventario_db
   API_PORT = 3001
   ```

5. **Deploys**:
   - Clique em "Deploy" 
   - Espere ~5-10 minutos
   - Sua URL será: `https://inventario-api.onrender.com`

### Passo 3: Deploy Frontend em Vercel

**Na pasta do projeto:**

```bash
cd c:\INVENTARIO\frontend
npm run build
```

**No site vercel.com:**

1. **Criar conta**: https://vercel.com (Login com GitHub)
2. **Import Project**:
   - Selecionar repositório `alesxandrocosta/inventario`

3. **Configurar Build**:
   - **Framework**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**:
   ```
   VITE_API_URL = https://inventario-api.onrender.com
   ```

5. **Deploy**: Clique em "Deploy"
   - Sua URL será: `https://inventario-alesxandrocosta.vercel.app`

### Passo 4: Configurar CORS no Backend

**backend/src/server.js** (já deve estar ok, mas confirme):

```javascript
const cors = require('cors');

app.use(cors({
  origin: [
    'https://inventario-alesxandrocosta.vercel.app',
    'http://localhost:3000'  // Para testes locais
  ],
  credentials: true
}));
```

---

## 🗄️ Opção 2: Banco de Dados Remoto

### Configurar MySQL em Nuvem

**Alternativas:**
- **PlanetScale** (MySQL compatível, gratuito): https://planetscale.com
- **AWS RDS**: https://aws.amazon.com/rds/
- **ClearDB**: https://www.cleardb.com
- **Railway.app**: https://railway.app (inclui MySQL)

**Exemplo com PlanetScale:**

1. Criar conta em https://planetscale.com
2. Criar database `inventario_db`
3. Obter connection string
4. Usar em variáveis de ambiente:
   ```
   DB_HOST = aws.connect.psdb.cloud
   DB_USER = seu_usuario
   DB_PASSWORD = sua_senha
   DB_DATABASE = inventario_db
   ```

---

## 📋 Checklist de Deploy

- [ ] Repositório Git atualizado e sincronizado
- [ ] .env.production configurado
- [ ] Render.com account criada
- [ ] Backend deployado em Render
- [ ] URL do backend obtida
- [ ] Vercel account criada
- [ ] Frontend deployado em Vercel
- [ ] Variável VITE_API_URL atualizada em Vercel
- [ ] CORS configurado
- [ ] Banco de dados remoto (se necessário)
- [ ] Testar acesso remoto
- [ ] Configurar domínio customizado (opcional)

---

## 🧪 Teste o Deploy

### 1. Acessar Frontend Remoto
```
https://inventario-alesxandrocosta.vercel.app
```

### 2. Verificar Conexão com Backend
No console do browser (F12):
```javascript
fetch('https://inventario-api.onrender.com/api/equipments')
  .then(r => r.json())
  .then(d => console.log('✅ Backend conectado:', d))
  .catch(e => console.error('❌ Erro:', e))
```

### 3. Testar CRUD
- Criar novo equipamento
- Editar equipamento
- Deletar equipamento
- Exportar Excel

---

## 🚨 Troubleshooting

### CORS Error
**Erro**: `Access to XMLHttpRequest has been blocked by CORS policy`

**Solução**:
1. Verificar URL do backend em Vercel
2. Atualizar CORS em `backend/src/server.js`
3. Fazer novo deploy em Render

### Backend retorna 500
**Verifique**:
1. Variáveis de ambiente em Render
2. Conexão com banco de dados
3. Logs: Render Dashboard → Logs

### Frontend em branco
**Verifique**:
1. Build foi bem-sucedido em Vercel
2. VITE_API_URL está correto
3. Limpar cache: DevTools → Network → Disable cache

---

## 📊 URLs Finais

| Componente | URL |
|-----------|-----|
| Frontend | https://inventario-alesxandrocosta.vercel.app |
| Backend API | https://inventario-api.onrender.com |
| Repositório | https://github.com/alesxandrocosta/inventario |

---

## 🔐 Segurança em Produção

### Antes de ir ao ar:

1. **Mudar senhas de banco de dados**
   ```sql
   ALTER USER 'inventario_user'@'%' IDENTIFIED BY 'nova_senha_forte_aqui';
   FLUSH PRIVILEGES;
   ```

2. **Desabilitar acesso remoto SSH (não necessário)**

3. **Habilitar HTTPS** (Vercel/Render já fazem isso)

4. **Configurar variáveis sensíveis** em environment variables (NUNCA em .env commited)

5. **Adicionar rate limiting** se necessário

---

## 🆘 Suporte

Para ajuda:
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- GitHub Issues no repositório
