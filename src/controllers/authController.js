const jwt = require('jsonwebtoken');

const usuarios = [
  { id: 1, email: 'admin@teste.com', senha: '123456' }
];

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ token, usuario: { id: usuario.id, email: usuario.email } });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};