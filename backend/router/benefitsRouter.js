// Require the necessary modules for this file.
const express = require("express");

// Setup a JobsServices so we can use it later on
class BenefitsRouter {
  constructor(benefitsService) {
    this.benefitsService = benefitsService;
  }

  // Binding the stuff to the stuff
  router() {
    let router = express.Router();
    //  router.get('/is-logged-in',authClass.authenticate() ,this.isLoggedIn.bind(this));
    router.get("/list/all", this.all.bind(this));
    return router;
  }
  all(req, res) {
    return this.benefitsService
      .listAll(req.params.userid)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = BenefitsRouter;
