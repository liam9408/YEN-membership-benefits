// const express = require("express");
// const passport = require("passport");
// const passportJWT = require("passport-jwt");
// const config = process.env;

// const app = express();
// module.exports = (knex) => {
//   const strategy = new passportJWT.Strategy(
//     {
//       secretOrKey: config.jwtSecretUsedForSigning,
//       jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     },
//     async (payload, done) => {
//       const user = knex("members").select("*").where("id", payload.id);
//       user.then((data) => {
//         console.log(data);
//         resolve(data);
//       });
//     }
//   );
//   passport.use(strategy);
//   app.use(passport.initialize());
//   return {
//     authenticate: function () {
//       return passport.authenticate("jwt", {
//         session: false,
//       });
//     },
//   };
//   // require('./facebookStrategy')(passport);
//   // require('./googleStrategy')(passport);
//   require("./localStrategy")(passport);
// };
