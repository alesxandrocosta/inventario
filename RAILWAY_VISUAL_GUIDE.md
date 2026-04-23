# 🚀 GUIA VISUAL: Deploy no Railway - Click by Click

## ✅ Tudo Pronto!

Seu repositório em `https://github.com/alesxandrocosta/inventario` está **100% pronto** para deploy.

**O que já está configurado:**
- ✅ Backend (Node.js Express)
- ✅ Frontend (React Vite)
- ✅ Banco de dados (MySQL schema)
- ✅ Arquivos `.env.production`
- ✅ CORS configurado
- ✅ Tudo versionado no Git

---

## 🎯 RAILROAD DEPLOY - PASSO A PASSO VISUAL

### **PASSO 1: Acessar Railway**

```
🌐 Abra: https://railway.app
```

Você verá uma página com um botão grande dizendo "**Start Project**"

---

### **PASSO 2: Fazer Login com GitHub**

```
1. Clique em "Start Project"
2. Clique em "GitHub" (ícone com gato)
3. Autorize Railway no GitHub
4. Selecione "alesxandrocosta" como organização
```

Vai redirecionar para o dashboard após login ✅

---

### **PASSO 3: Criar Novo Projeto**

Na página do dashboard:

```
1. Procure por "+ New Project" (canto superior direito)
2. Clique em "+ New Project"
3. Selecione "Deploy from GitHub"
```

---

### **PASSO 4: Selecionar Repositório**

```
1. Na tela, aparecerá lista de repositórios
2. Procure por "inventario"
3. Clique em "alesxandrocosta/inventario"
4. Selecione branch "master"
5. Clique em "Deploy"
```

Railway começará a compilar automaticamente! ⏳

---

### **PASSO 5: Aguardar Build**

Na tela você verá:

```
🔨 Building...
   ✓ Installing dependencies (2-3 min)
   ✓ Building application (1-2 min)
   
⏳ TOTAL: 3-5 MINUTOS
```

**Não feche a página!** Deixe compilar.

Quando terminar:
```
✅ Deploy successful
✅ Application running
```

---

### **PASSO 6: Adicionar Banco de Dados (MySQL)**

Quando o deploy termina, você vê:

```
1. Procure por "+ Add" (botão roxo/azul)
2. Clique em "+ Add"
3. Selecione "Database"
4. Escolha "MySQL"
5. Aguarde criação (30-60 segundos)
```

Railway automaticamente cria:
- Database user
- Database password
- Database host

---

### **PASSO 7: Configurar Variáveis de Ambiente**

```
1. Clique na aba "Variables" (próximo a Code/Logs)
2. Você verá variáveis do MySQL já preenchidas
3. Clique em "+ New Variable"
4. Adicione:
   
   Nome: NODE_ENV
   Valor: production
   
   Nome: API_PORT
   Valor: 8000
```

Clique "Save" após cada uma.

---

### **PASSO 8: Obter URL Pública**

```
1. Clique na aba "Settings"
2. Procure por "Domains"
3. Você verá uma URL como:
   
   https://inventario-production-XXXX.railway.app
   
4. Copie esta URL (vamos usar)
```

---

### **PASSO 9: Testar URL (Aguarde 1-2 min)**

```
Na barra do navegador, acesse:
https://inventario-production-XXXX.railway.app/api/health

Você deve ver:
{
  "status": "ok",
  "message": "API de Inventário de Assistência Técnica",
  "timestamp": "2026-04-23T..."
}
```

**Se vir isto: TUDO FUNCIONANDO!** ✅

---

## 📱 Deploy do Frontend (Vercel)

Agora o frontend:

### **Opção A: Usar Vercel**

```bash
# Terminal:
npm install -g vercel
vercel login
cd c:\INVENTARIO\frontend
vercel --prod
```

Quando perguntar pela API URL:
```
https://seu-app-production-XXXX.railway.app
```

### **Opção B: Usar mesmo Railway**

Railway também pode servir o frontend! Continue em Railway:

```
1. Clique em "+ Add" novamente
2. Selecione "GitHub"
3. Selecione mesmo repositório
4. Desta vez configura como frontend
```

---

## ✅ URLs Finais

Após completado:

```
🌐 Frontend:  https://inventario-*.vercel.app
⚙️ Backend:   https://inventario-production-XXXX.railway.app
📊 API:       https://inventario-production-XXXX.railway.app/api/equipments
```

---

## 🧪 Teste Completo

1. Abra: `https://seu-frontend-url`
2. Clique em "Novo Equipamento"
3. Preencha os dados
4. Clique em "Salvar"
5. Deve aparecer na tabela ✅

---

## 🆘 Se Der Erro

### Erro: "Build failed"
```
→ Clique em "View Logs"
→ Procure por mensagem de erro
→ Me mostre os logs
```

### Erro: "Cannot connect to database"
```
→ Vá em "Variables"
→ Verifique se DB_HOST, DB_USER, DB_PASSWORD estão preenchidos
→ Clique "Deploy" novamente
```

### Erro: "CORS error no frontend"
```
→ Frontend: Verificar VITE_API_URL
→ Deve ser exatamente: https://inventario-production-XXXX.railway.app
```

---

## 📞 Próximas Etapas

1. ✅ Seguir passo-a-passo acima
2. ✅ Copiar Railway URL
3. ✅ Deploy frontend (Vercel ou Railway)
4. ✅ Testar tudo
5. ✅ Compartilhar URL com equipe!

---

## 🎉 Ao Finalizar

Você terá:
- ✅ Sistema rodando na nuvem
- ✅ Acessível de qualquer lugar
- ✅ Banco de dados gerenciado
- ✅ Deploy automático (basta git push!)
- ✅ Certificados HTTPS (automático)

---

**Pronto?** 🚀 Comece em **https://railway.app** e me avisa quando terminar!
