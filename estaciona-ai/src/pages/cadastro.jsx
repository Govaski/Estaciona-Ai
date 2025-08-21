import React from 'react';
import MotoristaForm from '../components/MotoristaForm';
import EstabelecimentoForm from '../components/EstabelecimentoForm';
import './Cadastro.css'; // Estilos separados

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <MotoristaForm />
      <EstabelecimentoForm />
    </div>
  );
}