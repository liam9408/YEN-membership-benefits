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
class MemberRouter {
  constructor(membersService) {
    this.membersService = membersService;
  }

  // Binding the stuff to the stuff
  router() {
    let router = express.Router();
    router.get('/info/:userid', verifyToken, this.info.bind(this));
    router.get('/check-access', verifyToken, this.check.bind(this));
    return router;
  }
  info(req, res) {
    return this.membersService
      .getInfo(req.params.userid)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
  check(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let userID = jwt.decode(req.token).id;
        let type = '';
        this.membersService
          .checkUserType(userID)
          .then((info) => res.json(info))
          .catch((err) => res.status(500).json(err));
      }
    });
  }
}

module.exports = MemberRouter;
