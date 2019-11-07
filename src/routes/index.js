'use strict';

const ingredient = require('./ingredient');
const recipe = require('./recipe');
const user = require('./user');

function router(app) {
  app.use(ingredient)
  app.use(recipe)
  app.use(user)
};

module.exports = router;
