import React, { useState, useEffect } from 'react';
import { equipmentService } from '../services/equipmentService';

export default function PurchaseList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPurchaseList();
  }, []);

  const loadPurchaseList = async () => {
    try {
      setLoading(true);
      const result = await equipmentService.getPurchaseList();
      setItems(result.data);
    } catch (err) {
      setError('Erro ao carregar lista de compras');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Lista de Compras</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Equipamentos que necessitam peças ou manutenção
        </p>

        {error && <div className="error" style={{ padding: '12px', marginBottom: '20px' }}>{error}</div>}

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Equipamento</th>
                  <th>Peça Necessária</th>
                  <th>Prioridade</th>
                  <th>ID Interno</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', color: '#999' }}>
                      Nenhum equipamento incompleto
                    </td>
                  </tr>
                ) : (
                  items.map((item, idx) => (
                    <tr key={item.id}>
                      <td>{item.marca} {item.modelo}</td>
                      <td>{item.pecas_faltantes || 'Verificar'}</td>
                      <td>
                        <span style={{
                          padding: '4px 8px',
                          background: idx % 2 === 0 ? '#ffebee' : '#fff3e0',
                          color: idx % 2 === 0 ? '#c62828' : '#e65100',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {idx % 2 === 0 ? 'Alta' : 'Média'}
                        </span>
                      </td>
                      <td>{item.id_interno}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
