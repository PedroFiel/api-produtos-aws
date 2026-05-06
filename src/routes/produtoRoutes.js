const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const validar = require('../middlewares/validarProduto'); // Importando sua validação
const { 
    listar, 
    buscarPorId, 
    criar, 
    atualizar, // Sua função
    deletar    // Sua função
} = require('../controllers/produtoController');

// Rotas públicas
router.get('/', listar);
router.get('/:id', buscarPorId);

// Rotas protegidas (precisa de Token e passar na sua Validação)
router.post('/', auth, validar, criar);
router.put('/:id', auth, validar, atualizar); // Rota de atualização conectada
router.delete('/:id', auth, deletar);          // Rota de deleção conectada

module.exports = router;