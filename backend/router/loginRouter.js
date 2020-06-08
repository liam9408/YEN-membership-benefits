// // Require the necessary modules for this file.
// const express = require("express");
// // const authClass = require('../authentication/initPassport')();

// // Setup a LoginServices so we can use it later on
// class LoginRouter {
//   constructor(loginService) {
//     this.loginService = loginService;
//   }

//   // Brinding the stuff to the stuff
//   router() {
//     let router = express.Router();
//     //  router.get('/is-logged-in',authClass.authenticate() ,this.isLoggedIn.bind(this));
//     router.post("/login", this.login.bind(this));
//     return router;
//   }

//   isLoggedIn(req, res) {
//     return this.loginService
//       .isLoggedIn()
//       .then((data) => res.json(data))
//       .catch((err) => res.status(500).json(err));
//   }

//   login(req, res) {
//     return this.loginService
//       .login(req.body.email.toLowerCase(), req.body.password)
//       .then((data) => res.json(data))
//       .catch((err) => res.status(500).json(err));
//   }
// }

// module.exports = LoginRouter;
