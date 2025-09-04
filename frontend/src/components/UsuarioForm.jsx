import React, { useState } from 'react';

export default function UsuarioForm() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      setFormData({ nome: '', cpf: '', email: '', telefone: '' });
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro de conexão com a API.');
  }
};

  return (
    <div className="form-section">
      <h2>Cadastro Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome completo" onChange={handleChange} />
        <input name="cpf" placeholder="CPF" onChange={handleChange} />
        <input name="email" placeholder="E-mail" onChange={handleChange} />
        <input name="telefone" placeholder="Telefone" onChange={handleChange} />
        <button type="submit">Cadastrar Usuário</button>
      </form>
    </div>
  );
}