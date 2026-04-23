import React from 'react';

export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px 0',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <h1 style={{ marginBottom: '5px' }}>📦 Inventário de Assistência Técnica</h1>
        <p style={{ opacity: 0.9, fontSize: '14px' }}>Sistema de gestão de equipamentos e peças</p>
      </div>
    </header>
  );
}
