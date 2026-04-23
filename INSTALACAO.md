# Guia de Instalação e Configuração

## 🔧 Requisitos do Sistema

- **Node.js**: v14.0.0 ou superior
- **npm**: v6.0.0 ou superior
- **MySQL**: v5.7 ou superior
- **Git**: para versionamento (opcional)
- **Windows/Linux/Mac**: Sistema operacional compatível

## 📥 Instalação Completa

### Passo 1: Preparar o Ambiente

```bash
# Clonar ou extrair o projeto
cd INVENTARIO

# Criar estrutura de pastas (caso necessário)
mkdir backend frontend database
```

### Passo 2: Configurar MySQL

```bash
# Conectar ao MySQL
mysql -u root -p

# Executar o script de criação
source database/schema.sql

# Verificar criação (opcional)
USE inventario_db;
SELECT * FROM equipamentos;
```

### Passo 3: Instalar e Configurar Backend

```bash
# Entrar na pasta backend
cd backend

# Instalar dependências
npm install

# Criar arquivo .env
copy .env.example .env

# Editar .env com suas credenciais
# Exemplo:
# DB_HOST=localhost
# DB_PORT=3306
# DB_USER=root
# DB_PASSWORD=sua_senha
# DB_DATABASE=inventario_db
# API_PORT=3001
# NODE_ENV=development
```

### Passo 4: Instalar e Configurar Frontend

```bash
# Entrar na pasta frontend
cd frontend

# Instalar dependências
npm install

# Criar arquivo .env
copy .env.example .env

# A configuração padrão já está correta:
# VITE_API_URL=http://localhost:3001
```

## 🚀 Executar o Sistema

### Abrir múltiplos terminais:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 3 (opcional) - MySQL:**
```bash
mysql -u root -p
USE inventario_db;
```

### Verificar Status

- Backend: `http://localhost:3001` (deve retornar JSON de inicialização)
- Frontend: `http://localhost:3000` (deve abrir a interface)
- Verificar saúde: `http://localhost:3001/api/health`

## 📦 Estrutura de Pastas Criada

```
INVENTARIO/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── models/
│   │   │   └── Equipment.js
│   │   ├── controllers/
│   │   │   └── equipmentController.js
│   │   ├── routes/
│   │   │   └── equipmentRoutes.js
│   │   ├── services/
│   │   │   └── ExcelService.js
│   │   └── server.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentForm.jsx
│   │   │   ├── EquipmentList.jsx
│   │   │   ├── PurchaseList.jsx
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── equipmentService.js
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   └── forms.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
│
├── database/
│   └── schema.sql
│
├── README.md
└── INSTALACAO.md
```

## 🔍 Testes Iniciais

### 1. Testar Backend

```bash
# No navegador ou com curl:
curl http://localhost:3001/api/health

# Resposta esperada:
# {
#   "status": "ok",
#   "message": "API de Inventário de Assistência Técnica",
#   "timestamp": "2024-04-22T10:00:00.000Z"
# }
```

### 2. Testar Criação de Equipamento

```bash
# Com curl:
curl -X POST http://localhost:3001/api/equipments \
  -H "Content-Type: application/json" \
  -d '{
    "id_interno": "1005",
    "tipo": "Monitor",
    "marca": "Dell",
    "modelo": "U2720Q",
    "numero_serie": "DELL123456",
    "status_integridade": "Completo",
    "status_limpeza": "Pendente",
    "testado": false,
    "observacoes": "Novo teste"
  }'
```

### 3. Testar Interface

- Abrir `http://localhost:3000`
- Clicar em "Novo Equipamento"
- Preencher formulário
- Clicar "Salvar Equipamento"

## 🐛 Troubleshooting

### Erro: "ECONNREFUSED" ao conectar no banco

**Solução:**
- Verificar se MySQL está rodando: `mysqld` ou serviço MySQL ativo
- Verificar credenciais em `.env`
- Verificar host e porta

### Erro: "Port already in use"

**Solução:**
- Mudar porta em `.env` backend ou frontend
- Ou matar processo: `netstat -ano | findstr :3001` (Windows)

### Erro: "Cannot find module"

**Solução:**
- Deletar `node_modules` e `package-lock.json`
- Rodar `npm install` novamente

### Banco de dados não criado

**Solução:**
- Conectar como root: `mysql -u root -p`
- Executar manualmente: `CREATE DATABASE inventario_db;`
- Executar schema: `source database/schema.sql;`

## 📚 Comandos Úteis

### Backend

```bash
# Desenvolvimento
npm run dev

# Iniciar produção
npm start

# Testes (quando configurado)
npm test
```

### Frontend

```bash
# Desenvolvimento
npm run dev

# Build produção
npm run build

# Preview do build
npm run preview
```

### MySQL

```bash
# Conectar
mysql -u root -p

# Ver bancos
SHOW DATABASES;

# Selecionar banco
USE inventario_db;

# Ver tabelas
SHOW TABLES;

# Ver estrutura
DESCRIBE equipamentos;

# Ver dados
SELECT * FROM equipamentos;
```

## ✅ Checklist de Configuração

- [ ] Node.js instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] MySQL rodando e acessível
- [ ] Banco criado com `schema.sql`
- [ ] Backend `.env` preenchido
- [ ] Frontend `.env` preenchido
- [ ] `npm install` rodado em ambos
- [ ] Backend inicia sem erros (`npm run dev`)
- [ ] Frontend inicia sem erros (`npm run dev`)
- [ ] Interface carrega em `http://localhost:3000`
- [ ] API responde em `http://localhost:3001/api/health`

## 🎯 Próximos Passos

1. Adicionar equipamentos pela interface
2. Testar exportação para Excel
3. Visualizar lista de compras
4. Editar equipamentos existentes
5. Deletar equipamentos de teste

---

**Ambiente pronto para desenvolvimento!** 🎉
