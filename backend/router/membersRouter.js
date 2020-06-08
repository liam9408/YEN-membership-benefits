// Require the necessary modules for this file.
const express = require("express");
// const authClass = require("../authentication/initPassport")();

// Setup a JobsServices so we can use it later on
class MemberRouter {
  constructor(membersService) {
    this.membersService = membersService;
  }

  // Binding the stuff to the stuff
  router() {
    let router = express.Router();
    router.get("/info/:userid", this.info.bind(this));
    return router;
  }
  info(req, res) {
    return this.membersService
      .getInfo(req.params.userid)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = MemberRouter;
