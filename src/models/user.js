'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      email: {
        type: DataTypes.STRING,
        noEmpty: true,
      },
      password: {
        type: DataTypes.STRING,
        noEmpty: true
      }
    },
    {
      tableName: 'users',
      timestamps: true,
      underscore: true,
      defaultScope: {
        attributes: { exclude: ['password'] }
      },
    }
  );

  User.associate = function(db) {
    db.User.belongsToMany(db.Ingredient, { through: 'IngredientUser' });
    db.User.belongsToMany(db.Recipe, { through: 'RecipeUser' });
  };

  return User;
}
