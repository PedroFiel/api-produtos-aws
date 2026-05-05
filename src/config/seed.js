// src/config/seed.js
const mongoose = require('mongoose');
require('dotenv').config();
const Produto = require('../models/Produto');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Produto.deleteMany();

  await Produto.insertMany([
    { nome: 'Mouse', preco: 50, categoria: 'Periférico', estoque: 10 },
    { nome: 'Teclado', preco: 120, categoria: 'Periférico', estoque: 5 },
    { nome: 'Monitor', preco: 800, categoria: 'Hardware', estoque: 3 },
    { nome: 'HD Externo', preco: 300, categoria: 'Hardware', estoque: 7 },
    { nome: 'SSD', preco: 500, categoria: 'Hardware', estoque: 5 },
    { nome: 'Fone', preco: 100, categoria: 'Periférico', estoque: 2 },
  ]);

  console.log('Dados inseridos');
  process.exit();
}

seed();