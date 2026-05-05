   const mongoose = require('mongoose');

   const produtoSchema = new mongoose.Schema({
     nome: { type: String, required: [true, 'Nome é obrigatório'], trim: true },
     descricao: { type: String, trim: true },
     preco: { type: Number, required: true, min: 0 },
     categoria: { type: String, required: true, trim: true },
     estoque: { type: Number, required: true, min: 0, default: 0 }
   }, { timestamps: true });

   module.exports = mongoose.model('Produto', produtoSchema);