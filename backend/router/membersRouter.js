// Require the necessary modules for this file.
const express = require("express");
const jwt = require("jsonwebtoken");

// Verify Token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== "undefined") {
    // const bearer = bearerHeader.split(" ");
    // const bearerToken = bearer[1];
    req.token = bearerHeader;
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
  router({ authUser, authAdmin }) {
    let router = express.Router();
    router.get("/info/:userid", authUser, this.info.bind(this));
    router.get("/check-access", authUser, this.check.bind(this));
    router.delete("/delete-user", authAdmin, this.delUser.bind(this));
    return router;
  }
  info(req, res) {
    return this.membersService
      .getInfo(req.params.userid)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
  check(req, res) {
    let userID = jwt.decode(req.token).id;
    let type = "";
    this.membersService
      .checkUserType(userID)
      .then((info) => res.json(info))
      .catch((err) => res.status(500).json(err));
  }

  delUser(req, res) {
    this.membersService
      .deleteUser(req.body.userId)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = MemberRouter;
