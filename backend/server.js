const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // permite apenas seu front-end
  methods: ['GET', 'POST'],        // define os métodos permitidos
  allowedHeaders: ['Content-Type'] // garante que o cabeçalho seja aceito
}));

app.use(express.json());

// Suas rotas...
app.post('/api/usuarios', (req, res) => {
  const dados = req.body;
  console.log('Usuário recebido:', dados);
  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
});
app.post('/api/estabelecimentos', (req, res) => {
  const dados = req.body;
  console.log('Estabelecimento recebido:', dados);
  res.status(201).json({ mensagem: 'Estabelecimento cadastrado com sucesso!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});