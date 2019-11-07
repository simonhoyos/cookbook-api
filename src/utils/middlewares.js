const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).send({
        error: 'Your session has expired'
      });
    }

    req.userId = jwt.verify(token, process.env.SECRET);

    next();
  },
};
