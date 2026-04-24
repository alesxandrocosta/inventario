const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const equipmentRoutes = require('./routes/equipmentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Configurar CORS para rede interna e desenvolvimento
const corsOptions = {
  origin: function (origin, callback) {
    // Em desenvolvimento, aceita qualquer origem
    if (NODE_ENV === 'development') {
      callback(null, true);
      return;
    }
    
    // Em produção, valida origens
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://192.168.100.247:3000',
      'http://192.168.100.247:3001',
      'https://inventario-alesxandrocosta.vercel.app',
      'https://inventario.com.br',
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`CORS bloqueado para origin: ${origin}`);
      callback(new Error('CORS não permitido'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/equipments', equipmentRoutes);

// Rota de saúde
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API de Inventário de Assistência Técnica',
    timestamp: new Date().toISOString()
  });
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Inventário de Assistência Técnica',
    version: '1.0.0',
    endpoints: {
      equipments: '/api/equipments',
      export: '/api/equipments/report/export',
      purchaseList: '/api/equipments/purchase-list/incomplete'
    }
  });
});

// Erro 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada'
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acessível em http://192.168.100.247:${PORT} (rede interna)`);
  console.log(`💻 Também em http://localhost:${PORT} (local)`);
});

module.exports = app;
