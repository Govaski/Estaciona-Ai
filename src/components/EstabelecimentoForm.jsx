import React, { useState } from 'react';

export default function EstabelecimentoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/estabelecimentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Estabelecimento cadastrado com sucesso!');
        setFormData({ nome: '', cnpj: '', endereco: '', telefone: '' });

        // Chama a função de redirecionamento
        if (onSubmit) onSubmit();
      } else {
        alert('Erro ao cadastrar estabelecimento.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro de conexão com a API.');
    }
  };

  return (
    <div className="form-section estabelecimento">
      <h2>Cadastro Estabelecimento</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome do estabelecimento" onChange={handleChange} />
        <input name="cnpj" placeholder="CNPJ" onChange={handleChange} />
        <input name="endereco" placeholder="Endereço" onChange={handleChange} />
        <input name="telefone" placeholder="Telefone" onChange={handleChange} />
        <button type="submit">Cadastrar Estabelecimento</button>
      </form>
    </div>
  );
}