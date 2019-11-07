'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'recipe',
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
      description: {
        type: DataTypes.TEXT,
        noEmpty: true,
      },
    },
    {
      tableName: 'recipes',
      timestamps: true,
      underscore: true,
    }
  );

  Recipe.associate = function(db) {
    db.Recipe.belongsToMany(db.Ingredient, { through: 'IngredientRecipe' });
  };

  return Recipe;
}
