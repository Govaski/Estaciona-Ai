import React, { useState } from 'react';

export default function MotoristaForm() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    cnh: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/api/motoristas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Motorista cadastrado com sucesso!');
      setFormData({ nome: '', cpf: '', cnh: '', telefone: '' });
    } else {
      alert('Erro ao cadastrar motorista.');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro de conexão com a API.');
  }
};

  return (
    <div className="form-section">
      <h2>Cadastro Motorista</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome completo" onChange={handleChange} />
        <input name="cpf" placeholder="CPF" onChange={handleChange} />
        <input name="cnh" placeholder="CNH" onChange={handleChange} />
        <input name="telefone" placeholder="Telefone" onChange={handleChange} />
        <button type="submit">Cadastrar Motorista</button>
      </form>
    </div>
  );
}