// Require the necessary modules for this file.
const express = require("express");


class LoginRouter {
  constructor(loginService) {
    this.loginService = loginService;
  }

  router() {
    let router = express.Router();
    router.post("/login", this.login.bind(this));
    router.post('/signup', this.signup.bind(this));
    return router;
  }

  login(req, res) {
    return this.loginService
      .login(req.body.email.toLowerCase(), req.body.password)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }

  signup(req, res) {
    return this.loginService
      .signUp(req.body.fName, req.body.lName, req.body.email.toLowerCase(), req.body.password)
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
  }
}

module.exports = LoginRouter;
