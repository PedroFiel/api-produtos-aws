const Produto = require('../models/Produto');

// --- Leonardo: listagem, detalhe e criação ---

exports.listar = async (req, res) => {
  try {
    const { page = 1, limit = 10, categoria } = req.query;
    const filtro = categoria ? { categoria } : {};
    const produtos = await Produto.find(filtro)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort('-createdAt');
    const total = await Produto.countDocuments(filtro);
    res.json({ total, page: Number(page), produtos });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    if (error.name === 'CastError')
      return res.status(400).json({ erro: 'ID inválido' });
    res.status(500).json({ erro: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    if (error.name === 'ValidationError')
      return res.status(400).json({ erro: error.message });
    res.status(500).json({ erro: error.message });
  }
};

// --- Anie: atualização e exclusão ---

exports.atualizar = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    if (error.name === 'ValidationError') return res.status(400).json({ erro: error.message });
    if (error.name === 'CastError') return res.status(400).json({ erro: 'ID inválido' });
    res.status(500).json({ erro: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto removido', produto });
  } catch (error) {
    if (error.name === 'CastError') return res.status(400).json({ erro: 'ID inválido' });
    res.status(500).json({ erro: error.message });
  }
};