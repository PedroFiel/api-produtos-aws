const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
  res.send('API rodando');
});

app.get('/test-db', async (req, res) => {
  const Produto = require('./models/Produto');
  const produtos = await Produto.find();
  res.json(produtos);
});

app.listen(PORT, () => {
  const base = `http://localhost:${PORT}`;
  console.log('Servidor rodando. URLs (clique se o terminal linkar):');
  console.log(`  ${base}/`);
  console.log(`  ${base}/test-db`);
  console.log(`  ${base}/api/auth/register`);
  console.log(`  ${base}/api/auth/login`);
  console.log('  /api/auth/* são POST (corpo JSON) — use Postman ou curl, não o clique direto no navegador.');
});
