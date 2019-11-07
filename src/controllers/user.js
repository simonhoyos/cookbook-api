'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../db');

module.exports = {
  async register(req, res) {
    try {
      const password = req.body.password ? bcrypt.hashSync(req.body.password, 8) : '';

      const user = await User.create({
        email: req.body.email,
        password,
      });

      const token = jwt.sign(
        { id: user.id },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 * 365 }
      );

      res.send({ token });
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async login(req, res) {
    try {

      const user = await User
        .scope({ attributes: { include: ['password'] } })
        .findOne({ where: { email: req.body.email } });

      const isValidPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!isValidPassword) {
        res.status(403).res('Usuario o contraseña invalido');
        return;
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 * 365 }
      );

      res.send({ token });
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
