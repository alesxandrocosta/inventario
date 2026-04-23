import React, { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiDownload, FiPlus } from 'react-icons/fi';
import { equipmentService } from '../services/equipmentService';
import EquipmentForm from './EquipmentForm';
import '../styles/forms.css';

export default function EquipmentList() {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadEquipments();
  }, []);

  const loadEquipments = async () => {
    try {
      setLoading(true);
      const result = await equipmentService.getAll();
      setEquipments(result.data);
    } catch (err) {
      setError('Erro ao carregar equipamentos');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este equipamento?')) {
      try {
        await equipmentService.delete(id);
        setEquipments(equipments.filter(eq => eq.id !== id));
      } catch (err) {
        setError('Erro ao deletar equipamento');
      }
    }
  };

  const handleExport = async () => {
    try {
      await equipmentService.exportToExcel();
    } catch (err) {
      setError('Erro ao exportar Excel');
    }
  };

  const filteredEquipments = equipments.filter(eq =>
    eq.id_interno.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (eq.numero_serie && eq.numero_serie.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (showForm) {
    return (
      <div className="container">
        <div className="card">
          <h2>{selectedId ? 'Editar Equipamento' : 'Novo Equipamento'}</h2>
          <EquipmentForm
            equipmentId={selectedId}
            onSuccess={() => {
              setShowForm(false);
              setSelectedId(null);
              loadEquipments();
            }}
            onCancel={() => {
              setShowForm(false);
              setSelectedId(null);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Inventário de Equipamentos</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleExport} className="btn btn-success">
              <FiDownload /> Exportar Excel
            </button>
            <button onClick={() => setShowForm(true)} className="btn btn-primary">
              <FiPlus /> Novo Equipamento
            </button>
          </div>
        </div>

        {error && <div className="error" style={{ padding: '12px', marginBottom: '20px', borderRadius: '4px' }}>{error}</div>}

        <input
          type="text"
          placeholder="Buscar por ID, tipo, marca ou número de série..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
        />

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>ID Interno</th>
                  <th>Tipo</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Número de Série</th>
                  <th>Tamanho (")</th>
                  <th>Status</th>
                  <th>Testado</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredEquipments.map((eq) => (
                  <tr key={eq.id}>
                    <td>{eq.id_interno}</td>
                    <td>{eq.tipo}</td>
                    <td>{eq.marca}</td>
                    <td>{eq.modelo}</td>
                    <td>{eq.numero_serie || '-'}</td>
                    <td>{eq.tamanho_polegadas ? `${eq.tamanho_polegadas}"` : '-'}</td>
                    <td>{eq.status_integridade}</td>
                    <td>{eq.testado ? '✓' : '✗'}</td>
                    <td>
                      <button
                        onClick={() => {
                          setSelectedId(eq.id);
                          setShowForm(true);
                        }}
                        className="btn btn-sm"
                        style={{ background: '#3498db', color: 'white', marginRight: '5px' }}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDelete(eq.id)}
                        className="btn btn-sm btn-danger"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
