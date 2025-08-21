import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MotoristaForm from '../components/MotoristaForm';
import EstabelecimentoForm from '../components/EstabelecimentoForm';
import './Cadastro.css';
import logo from '../assets/logo-estaciona-ai.png';
<img src={logo} alt="Logo Estaciona Aí" className="logo" />

export default function Cadastro() {
  const [tipoUsuario, setTipoUsuario] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!tipoUsuario) return;

    localStorage.setItem('tipoUsuario', tipoUsuario);
    navigate('/');
  };

  return (
    <div className="cadastro-container">
      <h2>Escolha o tipo de cadastro</h2>
      <div className="tipo-selector">
        <button onClick={() => setTipoUsuario('motorista')}>Sou Motorista</button>
        <button onClick={() => setTipoUsuario('estabelecimento')}>Sou Estabelecimento</button>
      </div>

      {tipoUsuario === 'motorista' && (
        <MotoristaForm onSubmit={handleCadastro} />
      )}

      {tipoUsuario === 'estabelecimento' && (
        <EstabelecimentoForm onSubmit={handleCadastro} />
      )}
    </div>
  );
}