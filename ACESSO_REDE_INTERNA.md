# 🌐 Acesso de Rede Interna

Seu sistema agora é acessível para qualquer máquina na rede interna!

## 📍 Endereço IP da Máquina

**IP Local:** `192.168.100.247`

---

## 🌐 URLs de Acesso

### **Backend (API)**
```
http://192.168.100.247:3001/api/health
http://192.168.100.247:3001/api/equipments
```

### **Frontend (Interface)**
```
http://192.168.100.247:3000
```

### **Local (Apenas nesta máquina)**
```
http://localhost:3000
```

---

## 📋 Para Acessar de Outro Computador

1. Outra máquina na mesma rede
2. Abra o navegador
3. Digite: `http://192.168.100.247:3000`
4. **Pronto!** ✅

---

## ⚙️ Configurações Realizadas

```
✅ Backend escutando em 0.0.0.0 (todas as interfaces)
✅ Frontend configurado com IP local
✅ Porta 3001 (Backend)
✅ Porta 3000 (Frontend)
✅ CORS permissivo para rede interna
```

---

## 🔐 Importante

- Este acesso é apenas para rede interna
- Máquinas fora da rede não conseguem acessar
- Verifique firewall do Windows se houver problemas
- Para acessar remotamente (internet), use Railway/Vercel

---

## 🚀 Para Iniciar

```bash
# Terminal 1 - Backend
cd c:\INVENTARIO\backend
npm run dev

# Terminal 2 - Frontend
cd c:\INVENTARIO\frontend
npm run dev
```

Depois acesse:
```
http://192.168.100.247:3000
```

---

## 📱 Acesso de Outros Devices

**Do seu smartphone, tablet, outro PC:**
```
http://192.168.100.247:3000
```

Se não funcionar:
1. Verifique se está na mesma rede
2. Desabilite VPN (se houver)
3. Cheque firewall do Windows

---

## ⚡ Firewall - Se Não Conectar

**Windows Defender - Permitir acesso:**

```powershell
# Execute como Admin:
New-NetFirewallRule -DisplayName "Node Backend" `
  -Direction Inbound `
  -Action Allow `
  -Program "C:\Program Files\nodejs\node.exe" `
  -Protocol TCP `
  -LocalPort 3001

New-NetFirewallRule -DisplayName "Node Frontend" `
  -Direction Inbound `
  -Action Allow `
  -Program "C:\Program Files\nodejs\node.exe" `
  -Protocol TCP `
  -LocalPort 3000
```

---

## 🧪 teste

**Terminal 1:**
```bash
cd c:\INVENTARIO\backend && npm run dev
📝 Saída esperada: 🌐 Acessível em http://192.168.100.247:3001 (rede interna)
```

**Terminal 2:**
```bash
cd c:\INVENTARIO\frontend && npm run dev
📝 Saída esperada: Local: http://localhost:3000
```

**Navegador:**
```
http://192.168.100.247:3000
✅ Abrirá seu sistema!
```

---

**Pronto para rede interna!** 🌐
