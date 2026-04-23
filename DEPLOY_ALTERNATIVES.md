# 🌐 Opções de Deploy Remoto - Alternativas

## 1️⃣ Railway.app (⭐ Recomendado - Simplicidade)

### Vantagens:
- ✅ Configuração em minutos
- ✅ Suporte a MySQL/PostgreSQL integrado
- ✅ Deploy automático com git
- ✅ Plano free com $5/mês crédito
- ✅ Sem cartão de crédito necessário inicialmente

### Setup:

**Passo 1: Criar conta**
```bash
# Acesse https://railway.app
# Login com GitHub
```

**Passo 2: Criar novo projeto**
```
Dashboard → New Project → Deploy from GitHub
```

**Passo 3: Conectar repositório**
```
Select Repository: alesxandrocosta/inventario
Environment: production
```

**Passo 4: Adicionar MySQL**
```
+ Add Service → MySQL
```

**Passo 5: Configurar variáveis**
```
NODE_ENV = production
DB_HOST = (auto preenchido por Railway)
DB_USER = (auto preenchido)
DB_PASSWORD = (auto gerado)
DB_DATABASE = inventario_db
API_PORT = 8000
FRONTEND_URL = (da Vercel)
```

**URL do Backend**: `https://seu-projeto-production.up.railway.app`

---

## 2️⃣ Heroku (Clássico - Mais caro agora)

### Vantagens:
- ✅ Muito popular e documentado
- ⚠️ Plano gratuito removido (a partir de 2022)
- ⚠️ Mínimo $7/mês

### Alternativa: Usar apenas Vercel + seu servidor MySQL próprio

---

## 3️⃣ AWS (Completo - Mais complexo)

### Componentes:
- **EC2**: Servidor Node.js ($0.33-$2/mês)
- **RDS**: MySQL gerenciado ($10-30/mês)
- **Route 53**: DNS ($0.50/mês)

### Setup simplificado:
```bash
# Criar instância EC2 Ubuntu
# SSH para instância
# Instalar Node, MySQL Client
# Git clone do projeto
# PM2 para rodar aplicação
```

---

## 4️⃣ DigitalOcean (Equilibrado)

### Setup mínimo:
- Droplet: $4-5/mês
- App Platform: $12/mês (inclui MySQL)

```bash
# Criar conta em https://digitalocean.com
# Criar novo App
# Conectar repositório GitHub
# Configurar environment variables
# Deploy automático a cada push
```

---

## 5️⃣ Vercel + API externa

Para **frontend em Vercel**:
```json
{
  "name": "inventario-frontend",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@api_url"
  }
}
```

Para **backend em Render**:
```yaml
services:
  - type: web
    name: inventario-api
    runtime: node
    buildCommand: npm install --prefix backend
    startCommand: npm start --prefix backend
```

---

## 📊 Comparação de Preços

| Serviço | Frontend | Backend | Banco | Total/mês |
|---------|----------|---------|-------|-----------|
| **Railway** | Free | $5 | Incluso | ~$5-10 |
| **Vercel + Render** | Free | Free | Externo | ~$0-10 |
| **Heroku** | Free | $7 | $9 | ~$16+ |
| **AWS** | Free | $1-2 | $10-20 | ~$11-22 |
| **DigitalOcean** | - | $12 | Incluso | ~$12 |

---

## 🎯 Recomendação para você

### Para começar (MELHOR):
```
Railway.app - Tudo em um só lugar, super fácil
```

### Para escalar depois:
```
Vercel (Frontend) + Render (Backend) + PlanetScale (MySQL)
```

### Para máximo controle:
```
DigitalOcean App Platform ou VPS próprio
```

---

## 🔄 Próximas etapas

1. Escolher provedor
2. Criar conta e conectar GitHub
3. Configurar variáveis de ambiente
4. Fazer deploy
5. Testar em produção
6. Configurar domínio (opcional)
