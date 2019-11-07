'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWROD,
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {
  Sequelize,
  sequelize,
};

db.Ingredient = db.sequelize.import(
  'ingredient',
  require('./models/ingredient')
);

db.Recipe = db.sequelize.import(
  'recipe',
  require('./models/recipe')
);

db.User = db.sequelize.import(
  'user',
  require('./models/user')
);

Object.keys(db).forEach(modelName => {
  if (db[modelName] && db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
