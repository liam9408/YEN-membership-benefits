// Require the necessary modules for this file.
const express = require("express");
const jwt = require("jsonwebtoken");

// Verify Token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== "undefined") {
    // const bearer = bearerHeader.split(' ');
    // const bearerToken = bearer[1];
    req.token = bearerHeader;
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

  router({ authUser, authAdmin }) {
    let router = express.Router();
    router.get("/list/all", authUser, this.listAll.bind(this));
    router.post("/add-benefit", authAdmin, this.addBenefit.bind(this));
    router.put("/edit-title", authAdmin, this.editTitle.bind(this));
    router.put("/edit-description", authAdmin, this.editDescription.bind(this));
    router.put("/edit-activity", authAdmin, this.editActivity.bind(this));

    return router;
  }

  listAll(req, res) {
    return this.benefitsService
      .listAll(req.params.userid)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }

  addBenefit(req, res) {
    this.benefitsService
      .addBenefit(
        req.body.company,
        req.body.benefitTitle,
        req.body.benefitDesc,
        req.body.category,
        req.files
      )
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }

  editTitle(req, res) {
    this.benefitsService
      .editTitle(req.body.benefitId, req.body.title)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }

  editDescription(req, res) {
    this.benefitsService
      .editActiveness(req.body.benefitId)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }

  editActivity(req, res) {
    this.benefitsService
      .editActiveness(req.body.benefitId)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}
module.exports = BenefitsRouter;
