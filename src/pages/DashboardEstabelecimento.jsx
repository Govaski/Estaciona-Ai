import React from 'react';

const DashboardEstabelecimento = () => {
  return (
    <div>
      <h1>Bem-vindo, Estabelecimento!</h1>
      <p>Gerencie suas vagas, histórico de motoristas e perfil.</p>
      {/* Exemplo de card */}
      <div className="card">
        <h3>Vagas Disponíveis</h3>
        <p>Você tem 3 vagas abertas para motoristas.</p>
      </div>
    </div>
  );
};

export default DashboardEstabelecimento;