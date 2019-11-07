'use strict';

const { Recipe, Ingredient } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const recipes = await Recipe
        .scope({ include: [ Ingredient ]})
        .findAll();
      res.send(recipes)
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async create(req, res) {
    try {
      const recipe = await Recipe.create({
        name: req.body.name,
        description: req.body.description,
      }, {
        include: [ Ingredient ]
      });

      recipe.setIngredients(
        req.body.ingredients.split(',').map(el => +el)
      );


      await recipe.save();

      res.send(recipe);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async show(req, res) {
    try {
      const recipe = await Recipe
        .scope({ include: [ Ingredient ]})
        .findByPk(req.params.id);

      res.send(recipe);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async update(req, res) {
    try {
      const recipe = await Recipe.findAll(req.params.id);
      recipe.name = req.body.name || recipe.name;
      recipe.description = req.body.description || recipe.description;

      if (req.body.ingredients) {
        recipe.setIngredients(
          req.body.ingredients.split(',').map(el => +el)
        );
      }

      const updatedRecipe = await recipe.save();
      res.send(updatedRecipe);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async destroy(req, res) {
    try {
      const recipe = await Recipe.findByPk(req.params.id);
      await recipe.destroy();
      res.send(recipe);
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
