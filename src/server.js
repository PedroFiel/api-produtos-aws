const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API rodando');
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

app.get('/test-db', async (req, res) => {
  const Produto = require('./models/Produto');
  const produtos = await Produto.find();
  res.json(produtos);
});