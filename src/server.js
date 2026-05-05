const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/produtos', require('./routes/produtoRoutes'));

app.get('/', (req, res) => {
  res.send('API rodando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/test-db', async (req, res) => {
  const Produto = require('./models/Produto');
  const produtos = await Produto.find();
  res.json(produtos);
});