const jwt = require('jsonwebtoken');

// Protege rotas exigindo um JWT válido no header Authorization
const autenticar = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Espera o formato: "Bearer <token>"
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensagem: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verifica assinatura e expiração do token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Injeta os dados do usuário na requisição para uso nas rotas seguintes
    req.usuario = payload;

    next();
  } catch (erro) {
    return res.status(401).json({ mensagem: 'Token inválido ou expirado.' });
  }
};

module.exports = autenticar;
