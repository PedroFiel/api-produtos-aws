const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const { listar, buscarPorId, criar } = require('../controllers/produtoController');

router.get('/', listar);                  // pública: lista produtos
router.get('/:id', buscarPorId);          // pública: detalhe
router.post('/', auth, criar);            // protegida: criar

// TODO Anie: router.put('/:id', auth, atualizar);
// TODO Anie: router.delete('/:id', auth, deletar);

module.exports = router;