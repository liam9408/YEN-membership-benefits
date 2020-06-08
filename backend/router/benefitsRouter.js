// Require the necessary modules for this file.
const express = require('express');
const jwt = require('jsonwebtoken');

// Verify Token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

// Setup a JobsServices so we can use it later on
class BenefitsRouter {
  constructor(benefitsService) {
    this.benefitsService = benefitsService;
  }

  router() {
    let router = express.Router();
    router.get('/list/all', verifyToken, this.all.bind(this));
    return router;
  }

  all(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        return this.benefitsService
          .listAll(req.params.userid)
          .then((data) => res.json(data))
          .catch((err) => res.status(500).json(err));
      }
    });
  }
}

module.exports = BenefitsRouter;
