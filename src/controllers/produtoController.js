const Produto = require('../models/Produto');

// --- SUAS TAREFAS (ANIE) ---

// Atualizar um produto existente
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

// Deletar um produto
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