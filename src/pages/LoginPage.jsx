import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../assets/logo-estaciona-ai.png'; // ajuste o caminho conforme sua estrutura

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode validar o login ou só redirecionar
    const tipo = localStorage.getItem('tipoUsuario');

    if (tipo === 'motorista') {
      navigate('/dashboard-motorista');
    } else {
      navigate('/dashboard-estabelecimento');
    }
  };

  return (
    <div className="login-container">
      <div className="login-container">
  <img src={logo} alt="Logo Estaciona Aí" className="logo" />
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Usuário" required />
    <br />
    <input type="password" placeholder="Senha" required />
    <br />
    <button type="submit">Entrar</button>
  </form>
</div>
        
      
    </div>
  );
};

export default LoginPage;