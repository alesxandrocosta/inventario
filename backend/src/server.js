const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const equipmentRoutes = require('./routes/equipmentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3001;

// Middleware
app.use(cors());
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
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 Acesse http://localhost:${PORT} para mais informações`);
});

module.exports = app;
