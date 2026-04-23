# Inventário de Assistência Técnica - Sistema Full Stack

Sistema completo para gerenciar inventário de equipamentos de assistência técnica.

## 📋 Características

- ✅ Cadastro e gerenciamento de equipamentos
- ✅ Rastreamento de status de integridade
- ✅ Controle de limpeza e testes
- ✅ Lista dinâmica de compras
- ✅ Exportação para Excel
- ✅ Interface responsiva com React
- ✅ API RESTful com Express.js
- ✅ Banco de dados MySQL

## 🏗️ Arquitetura

### Backend (Node.js + Express)
- **Porta**: 3001
- **Banco de dados**: MySQL
- **Dependências principais**: express, mysql2, exceljs, dotenv

### Frontend (React + Vite)
- **Porta**: 3000
- **Build tool**: Vite
- **Componentes**: React Hooks, Axios para API

### Banco de Dados
- **SGBD**: MySQL
- **Tabelas**: equipamentos
- **Autoincrementol**: Sim

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js 14+
- MySQL 5.7+
- npm ou yarn

### 1. Configurar o Banco de Dados

```bash
# Conecte ao MySQL
mysql -u root -p

# Execute o script SQL
source database/schema.sql
```

### 2. Configurar Backend

```bash
cd backend

# Copiar arquivo de ambiente
copy .env.example .env

# Editar .env com suas credenciais do banco
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=sua_senha
# DB_DATABASE=inventario_db

# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```

O backend estará disponível em: `http://localhost:3001`

### 3. Configurar Frontend

```bash
cd frontend

# Copiar arquivo de ambiente
copy .env.example .env

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:3000`

## 📊 Estrutura de Pastas

```
inventario/
├── backend/
│   ├── src/
│   │   ├── config/        # Configurações (database)
│   │   ├── models/        # Modelos de dados (Equipment)
│   │   ├── controllers/   # Controladores (equipmentController)
│   │   ├── routes/        # Rotas da API
│   │   ├── services/      # Serviços (ExcelService)
│   │   └── server.js      # Arquivo principal
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas
│   │   ├── services/      # Serviços (API)
│   │   ├── styles/        # Estilos CSS
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── vite.config.js
│   ├── index.html
│   ├── package.json
│   └── .env.example
│
├── database/
│   └── schema.sql         # Script SQL
│
└── README.md
```

## 🔌 Endpoints da API

### Equipamentos

- **GET** `/api/equipments` - Listar todos
- **GET** `/api/equipments/:id` - Obter um
- **POST** `/api/equipments` - Criar novo
- **PUT** `/api/equipments/:id` - Atualizar
- **DELETE** `/api/equipments/:id` - Deletar

### Relatórios

- **GET** `/api/equipments/report/export` - Exportar Excel
- **GET** `/api/equipments/purchase-list/incomplete` - Lista de compras

## 📝 Exemplo de Requisição

```javascript
// Criar equipamento
POST /api/equipments
Content-Type: application/json

{
  "id_interno": "1005",
  "tipo": "Monitor",
  "marca": "Dell",
  "modelo": "U2720Q",
  "numero_serie": "DELL123456",
  "status_integridade": "Completo",
  "pecas_faltantes": null,
  "status_limpeza": "Concluído",
  "testado": true,
  "observacoes": "Novo equipamento"
}
```

## 🎨 Interface Frontend

- **Dashboard**: Visualização geral de equipamentos
- **Formulário**: Adicionar/editar equipamentos
- **Lista**: Tabela com todos os equipamentos
- **Busca**: Filtro em tempo real
- **Exportação**: Download em Excel
- **Lista de Compras**: Equipamentos que precisam de peças

## 🛠️ Tecnologias Utilizadas

### Backend
- Express.js 4.18.2
- MySQL 2 5.7+
- ExcelJS 4.3.0
- Dotenv 16.0.3
- Multer 1.4.5
- Express Validator 7.0.0

### Frontend
- React 18.2.0
- Vite 4.4.0
- Axios 1.4.0
- React Icons 4.8.0
- React Router DOM 6.11.0

## 📋 Campos de Equipamento

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_interno | String | ID único do equipamento |
| tipo | String | Tipo (Monitor, Notebook, Desktop, etc) |
| marca | String | Marca do fabricante |
| modelo | String | Modelo específico |
| numero_serie | String | Número de série |
| status_integridade | Enum | Completo, Incompleto, Falta Peça, Sucata |
| pecas_faltantes | Text | Descrição das peças faltantes |
| status_limpeza | Enum | Pendente, Em Processo, Concluído |
| testado | Boolean | Se foi testado |
| data_registro | DateTime | Data de cadastro |
| observacoes | Text | Observações adicionais |

## 💡 Melhorias Futuras

- [ ] Autenticação e autorização
- [ ] Login de usuários
- [ ] Histórico de alterações
- [ ] Foto dos equipamentos
- [ ] QR Code/Código de barras
- [ ] Relatórios avançados
- [ ] Notificações
- [ ] Mobile responsivo
- [ ] Dark mode
- [ ] Backup automático

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação do Express.js e React.

## 📄 Licença

MIT

---

**Desenvolvido com ❤️ para gerenciamento eficiente de inventário**
