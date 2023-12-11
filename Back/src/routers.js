const express = require('express');
const { destaque, exibirProdutos, produtoPorCategoria } = require('./controller/products');
const { exibirCategorias } = require('./controller/category');
const router = express();


router.get('/home', destaque);
router.get('/produtos', exibirProdutos)
router.get('/produtos/?id_categoria', produtoPorCategoria)

router.get('/categorias', exibirCategorias)

module.exports = router;