# Changelog - Sistema de Inventário de Assistência Técnica

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.0.0] - 2026-04-23

### ✨ Adicionado
- **Backend com Express.js**
  - API REST completa para gerenciamento de equipamentos
  - 7 endpoints principais (CRUD + relatórios)
  - Conexão com MySQL via pool de conexões
  - Validação de dados obrigatórios
  - Logs de debug para troubleshooting

- **Frontend com React + Vite**
  - Interface responsiva com design moderno
  - Dashboard com 2 abas (Inventário e Lista de Compras)
  - Formulário completo para cadastro de equipamentos
  - Busca em tempo real (ID, tipo, marca, número de série)
  - Tabela com colunas de todos os campos
  - Exportação para Excel formatado
  - Componentes reutilizáveis

- **Banco de Dados MySQL**
  - Tabela `equipamentos` com 13 campos
  - 3 índices para performance
  - 4 registros de exemplo pré-carregados
  - Charset UTF-8 Unicode

- **Documentação Completa**
  - README.md com documentação técnica
  - INSTALACAO.md com guia passo-a-passo
  - GUIA_USO.md com manual do usuário
  - VERIFICACAO.md com checklist
  - SUMARIO_EXECUTIVO.md
  - Este CHANGELOG

### 🔧 Configuração
- Inicialização com versionamento Git
- .gitignore adequado para Node.js
- Variáveis de ambiente (.env.example)
- Scripts npm para dev e build
- Nodemon para desenvolvimento automático

### 📋 Campos de Equipamento
- ID Interno (unique)
- Tipo (com opções)
- Marca
- Modelo
- Número de Série (opcional)
- Status de Integridade (4 opções)
- Peças Faltantes (opcional)
- Status de Limpeza (3 opções)
- Testado? (boolean)
- Data de Registro (timestamp)
- Observações (optional)

### 🛠️ Stack Tecnológico
- Backend: Node.js 14+, Express 4.18, MySQL 5.7+
- Frontend: React 18, Vite 4.4, Axios 1.4
- Extras: ExcelJS, React-Icons, CORS

---

## Roadmap Futuro

### v1.1.0 (Melhorias UI/UX)
- [ ] Dark mode
- [ ] Paginação na tabela
- [ ] Filtros avançados
- [ ] Confirmação de ações
- [ ] Notificações toast

### v1.2.0 (Features)
- [ ] Autenticação JWT
- [ ] Múltiplos usuários
- [ ] Histórico de alterações
- [ ] Fotos/imagens de equipamentos
- [ ] QR Code/Código de barras

### v1.3.0 (Relatórios)
- [ ] Dashboard com gráficos
- [ ] Relatórios avançados
- [ ] Exportar PDF
- [ ] Agenda de manutenção

### v2.0.0 (Mobile)
- [ ] App mobile React Native
- [ ] Sincronização offline
- [ ] Push notifications

---

## Processo de Versionamento

Este projeto usa **Semantic Versioning**:
- MAJOR.MINOR.PATCH (ex: 1.0.0)
- MAJOR: mudanças incompatíveis
- MINOR: novas funcionalidades compatíveis
- PATCH: correções de bugs

### Commits
- 🎉 Nova feature
- 🔧 Correção/ajuste
- 📝 Documentação
- ♻️ Refatoração
- ⚡ Performance
- 🐛 Bug fix

---

**Última atualização:** 23 de abril de 2026
