import React, { useState } from 'react';
import { FiPackage, FiShoppingCart } from 'react-icons/fi';
import EquipmentList from '../components/EquipmentList';
import PurchaseList from '../components/PurchaseList';
import Header from '../components/Header';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('inventario');

  return (
    <>
      <Header />
      <div style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button
              onClick={() => setActiveTab('inventario')}
              className="btn"
              style={{
                background: activeTab === 'inventario' ? '#667eea' : '#ecf0f1',
                color: activeTab === 'inventario' ? 'white' : '#333'
              }}
            >
              <FiPackage style={{ marginRight: '5px' }} /> Inventário
            </button>
            <button
              onClick={() => setActiveTab('compras')}
              className="btn"
              style={{
                background: activeTab === 'compras' ? '#667eea' : '#ecf0f1',
                color: activeTab === 'compras' ? 'white' : '#333'
              }}
            >
              <FiShoppingCart style={{ marginRight: '5px' }} /> Lista de Compras
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'inventario' && <EquipmentList />}
      {activeTab === 'compras' && <PurchaseList />}
    </>
  );
}
