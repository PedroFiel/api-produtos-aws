module.exports = (req, res, next) => {
  const { nome, preco, categoria, estoque } = req.body;
  const erros = [];

  // Validação do Nome
  if (!nome || nome.trim().length < 2) {
    erros.push('Nome deve ter ao menos 2 caracteres');
  }

  // Validação do Preço
  if (preco === undefined || preco < 0) {
    erros.push('Preço deve ser número maior ou igual a 0');
  }

  // Validação da Categoria
  if (!categoria || categoria.trim() === '') {
    erros.push('Categoria é obrigatória');
  }

  // Validação do Estoque
  if (estoque === undefined || estoque < 0 || !Number.isInteger(estoque)) {
    erros.push('Estoque deve ser um número inteiro maior ou igual a 0');
  }

  // Se houver qualquer erro, trava a requisição aqui e retorna 400
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  // Se estiver tudo OK, o next() permite que a requisição siga para o Controller
  next();
};