const express = require('express');
const { destaque } = require('./controller/homePage');
const router = express();

router.get('/home', destaque);

module.exports = router;