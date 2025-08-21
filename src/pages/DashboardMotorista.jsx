import React from 'react';

const DashboardMotorista = () => {
  return (
    <div>
      <h1>Bem-vindo, Motorista!</h1>
      <p>Aqui você pode visualizar suas corridas, histórico e perfil.</p>
      {/* Exemplo de card */}
      <div className="card">
        <h3>Corridas Atuais</h3>
        <p>Você está disponível para novas corridas.</p>
      </div>
    </div>
  );
};

export default DashboardMotorista;