'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    'ingredient',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        type: DataTypes.STRING,
        noEmpty: true
      },
    },
    {
      tableName: 'ingredients',
      timestamps: true,
      underscore: true,
    }
  );

  Ingredient.associate = function(db) {
    db.Ingredient.belongsToMany(db.Recipe, { through: 'IngredientRecipe' });
    db.Ingredient.belongsToMany(db.User, { through: 'IngredientUser' });
  };

  return Ingredient;
}
