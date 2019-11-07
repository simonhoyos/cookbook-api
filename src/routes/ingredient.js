'use strict';

const router = require('express').Router();
const ingredient = require('../controllers/ingredient');
const { auth } = require('../utils/middlewares');

router.get('/ingredient', auth, ingredient.list);
router.post('/ingredient', auth, ingredient.create);
router.get('/ingredient/:id', auth, ingredient.show);
router.put('/ingredient/:id', auth, ingredient.update);
router.delete('/ingredient/:id', auth, ingredient.destroy);

module.exports = router;
