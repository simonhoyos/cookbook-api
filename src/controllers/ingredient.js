'use strict';

const { Ingredient } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const ingredients = await Ingredient.findAll();
      res.send(ingredients);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async create(req, res) {
    try {
      const ingredient = await Ingredient.create({
        name: req.body.name
      });
      res.send(ingredient);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async show(req, res) {
    try {
      const ingredient = await Ingredient.findByPk(req.params.id);
      res.send(ingredient);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async update(req, res) {
    try {
      const ingredient = await Ingredient.findByPk(req.params.id);
      ingredient.name = req.body.name;
      const updatedIngredient = await ingredient.save();
      res.send(updatedIngredient);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async destroy(req, res) {
    try {
      const ingredient = await Ingredient.findByPk(req.params.id);
      await ingredient.destroy();
      res.send(ingredient);
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
