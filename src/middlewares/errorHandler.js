module.exports = (err, req, res, next) => {
  // Mostra o erro no terminal para o desenvolvedor ver o que aconteceu
  console.error(err.stack);

  // Retorna uma mensagem amigável para o usuário da API
  res.status(err.status || 500).json({
    erro: err.message || 'Erro interno do servidor'
  });
};