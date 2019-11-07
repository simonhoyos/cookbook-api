'use strict';

const router = require('express').Router();
const recipe = require('../controllers/recipe');
const { auth } = require('../utils/middlewares');

router.get('/recipe', auth, recipe.list);
router.post('/recipe', auth, recipe.create);
router.get('/recipe/:id', auth, recipe.show);
router.put('/recipe/:id', auth, recipe.update);
router.delete('/recipe/:id', auth, recipe.destroy);

module.exports = router;
