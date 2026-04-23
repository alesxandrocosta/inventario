# Guia de Uso do Sistema

## 📖 Índice

1. [Interface Principal](#interface-principal)
2. [Gerenciar Equipamentos](#gerenciar-equipamentos)
3. [Lista de Compras](#lista-de-compras)
4. [Exportar Relatórios](#exportar-relatórios)
5. [Campos e Validações](#campos-e-validações)

## 🎯 Interface Principal

A interface é dividida em duas abas principais:

### Aba 1: Inventário
- Visualizar todos os equipamentos cadastrados
- Adicionar novos equipamentos
- Editar equipamentos existentes
- Deletar equipamentos
- Buscar por ID, tipo ou marca
- Exportar para Excel

### Aba 2: Lista de Compras
- Visualizar equipamentos que faltam peças
- Prioridade de compra automática
- Informações de peças necessárias

## 🖥️ Gerenciar Equipamentos

### Adicionar Novo Equipamento

1. Clique em **"+ Novo Equipamento"** (botão azul)
2. Preencha os campos do formulário:
   - **ID Interno** (obrigatório): Identificador único ex: "1001"
   - **Tipo**: Selecione o tipo de equipamento
   - **Marca**: Nome do fabricante
   - **Modelo**: Modelo específico
   - **Número de Série**: Número no equipamento
   - **Status de Integridade**: Estado do equipamento
   - **Peças Faltantes**: Se houver, descreva quais faltam
   - **Status de Limpeza**: Situação de limpeza
   - **Testado?**: Marque se foi testado
   - **Observações**: Notas adicionais

3. Clique em **"Salvar Equipamento"**

### Editar Equipamento

1. Localize o equipamento na tabela
2. Clique no botão azul de edição (🖊️)
3. Modifique os campos desejados
4. Clique em **"Salvar Equipamento"**

### Deletar Equipamento

1. Localize o equipamento na tabela
2. Clique no botão vermelho de delete (🗑️)
3. Confirme a exclusão no pop-up
4. Equipamento será removido

### Buscar Equipamentos

1. Use o campo **"Buscar por ID, tipo ou marca..."** no topo
2. Digite o termo de busca
3. Resultados são filtrados em tempo real

## 📋 Lista de Compras

A lista de compras mostra automaticamente:

- **Equipamentos Incompletos**: Todos que precisam de peças
- **Peças Necessárias**: O que falta para cada um
- **Prioridade**: Alta (vermelho) ou Média (laranja)
- **ID Interno**: Para referência rápida

**Como usar:**
1. Acesse a aba **"Lista de Compras"**
2. Revise as peças necessárias
3. Use as informações para fazer pedidos
4. Atualize o status quando as peças chegarem

## 📊 Exportar Relatórios

### Exportar para Excel

1. Clique em **"Exportar Excel"** (botão verde com 📥)
2. Um arquivo será baixado: `Inventario_Assistencia_Tecnica.xlsx`
3. O arquivo contém:
   - **Aba 1**: Inventário completo de equipamentos
   - **Aba 2**: Lista dinâmica de compras
   - Formatação profissional com cores e estilos

### Usar o Excel

- Abra o arquivo em Excel, Google Sheets ou similar
- Analise os dados com tabelas dinâmicas
- Imprima para reuniões
- Compartilhe com equipes
- Faça análises e gráficos

## 📝 Campos e Validações

### Campos Obrigatórios
- **ID Interno**: Deve ser único, sem espaços

### Campos com Dropdown
- **Tipo**: Monitor, Notebook, Desktop, Processador, Memória, Placa-mãe, Fonte, Outros
- **Status de Integridade**: Completo, Incompleto, Falta Peça, Sucata
- **Status de Limpeza**: Pendente, Em Processo, Concluído

### Campos Opcionais
- **Número de Série**: Deixe em branco se não houver
- **Peças Faltantes**: Preenchido automaticamente se "Incompleto"
- **Observações**: Espaço livre para notas

## 🔄 Fluxo de Trabalho Recomendado

### Recebimento de Equipamento
1. ✅ Adicionar novo equipamento
2. ✅ Colocar número de série
3. ✅ Marcar status de integridade
4. ✅ Marcar se precisa de peças

### Processamento
1. 📝 Atualizar status de limpeza para "Em Processo"
2. 🧹 Limpar equipamento
3. ✔️ Marcar "Testado?" quando concluído
4. 🔄 Mudar status de limpeza para "Concluído"

### Finalização
1. 📦 Se completo, marque "Completo"
2. 📥 Se faltam peças, elas aparecerão na Lista de Compras
3. 📄 Gere relatório em Excel quando necessário

## 💡 Dicas Úteis

- Use IDs estratégicos (ex: 10XX para monitores, 20XX para notebooks)
- Mantenha observações detalhadas para referência futura
- Revise a lista de compras regularmente
- Exporte relatórios mensalmente
- Use a busca para encontrar equipamentos rapidamente
- Atualize o status de limpeza progressivamente

## ❓ Perguntas Frequentes

**P: Como editar um equipamento já salvo?**
R: Clique no botão azul de edição (🖊️) na linha do equipamento.

**P: Posso deletar um equipamento por acidente?**
R: Sim, mas há uma confirmação. Seja cuidadoso ao clicar em deletar.

**P: O Excel é atualizado automaticamente?**
R: Não, você precisa clicar em "Exportar Excel" para gerar novo arquivo.

**P: Posso adicionar novos tipos de equipamento?**
R: Não pela interface. Edite o arquivo de código ou contate o desenvolvedor.

**P: O sistema funciona offline?**
R: Não, precisa de conexão com o servidor backend e MySQL.

---

**Aproveite o sistema!** 🎉
