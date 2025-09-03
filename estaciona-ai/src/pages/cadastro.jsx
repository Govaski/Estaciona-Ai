import React from 'react';
import UsuarioForm from '../components/UsuarioForm';
import EstabelecimentoForm from '../components/EstabelecimentoForm';
import './Cadastro.css'; // Estilos separados

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <UsuarioForm />
      <EstabelecimentoForm />
    </div>
  );
}