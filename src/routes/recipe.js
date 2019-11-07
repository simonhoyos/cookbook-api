'use strict';

const router = require('express').Router();
const recipe = require('../controllers/recipe');
const { auth } = require('../utils/middlewares');

router.use(auth);

router.get('/recipe', recipe.list);
router.post('/recipe', recipe.create);
router.get('/recipe/:id', recipe.show);
router.put('/recipe/:id', recipe.update);
router.delete('/recipe/:id', recipe.destroy);

module.exports = router;
