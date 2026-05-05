const { Router } = require('express');
const { register, login } = require('../controllers/authController');

const router = Router();

// Rotas públicas de autenticação
router.post('/register', register);
router.post('/login', login);

module.exports = router;
