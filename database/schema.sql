-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS inventario_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE inventario_db;

-- Tabela de Equipamentos
CREATE TABLE equipamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_interno VARCHAR(50) NOT NULL UNIQUE COLLATE utf8mb4_unicode_ci,
  tipo VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci,
  marca VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci,
  modelo VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci,
  numero_serie VARCHAR(100) COLLATE utf8mb4_unicode_ci,
  status_integridade VARCHAR(50) DEFAULT 'Completo' COLLATE utf8mb4_unicode_ci,
  pecas_faltantes TEXT COLLATE utf8mb4_unicode_ci,
  status_limpeza VARCHAR(50) DEFAULT 'Pendente' COLLATE utf8mb4_unicode_ci,
  testado BOOLEAN DEFAULT FALSE,
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  observacoes TEXT COLLATE utf8mb4_unicode_ci,
  INDEX idx_tipo (tipo),
  INDEX idx_status (status_integridade),
  INDEX idx_data (data_registro)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir dados de exemplo
INSERT INTO equipamentos (id_interno, tipo, marca, modelo, numero_serie, status_integridade, pecas_faltantes, status_limpeza, testado, observacoes) VALUES
('1001', 'Monitor', 'Samsung', 'S24F350', 'Z9X8Y7W6', 'Falta Peça', 'Base de apoio', 'Concluído', 1, 'Tela sem riscos'),
('1002', 'Notebook', 'Dell', 'Latitude 5490', 'D3LL456', 'Incompleto', 'Memória RAM 8GB', 'Pendente', 0, 'Teclado faltando tecla A'),
('1003', 'Monitor', 'LG', '29UM68', 'LG778899', 'Completo', NULL, 'Concluído', 1, 'Perfeito estado'),
('1004', 'Desktop', 'HP', 'ProDesk 600', 'HP001122', 'Incompleto', 'Processador i5 8ª Geração', 'Em Processo', 0, 'Gabinete amassado');
