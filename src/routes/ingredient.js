'use strict';

const router = require('express').Router();
const ingredient = require('../controllers/ingredient');
const { auth } = require('../utils/middlewares');

router.use(auth);

router.get('/ingredient', ingredient.list);
router.post('/ingredient', ingredient.create);
router.get('/ingredient/:id', ingredient.show);
router.put('/ingredient/:id', ingredient.update);
router.delete('/ingredient/:id', ingredient.destroy);

module.exports = router;
