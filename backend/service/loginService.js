// const bcrypt = require("../authentication/bcrypt");
// const jwt = require("jsonWebToken");

// const config = process.env;

// class LoginService {
//   constructor(knex) {
//     this.knex = knex;
//   }

//   async login(email, password) {
//     return new Promise(async (resolve, reject) => {
//       let findUser = this.knex("members")
//         .select("id", "password")
//         .where("email", email);
//       findUser.then(async (data) => {
//         if (data.length === 0) {
//           resolve({ success: 0, error: "email not found" });
//         } else {
//           let result = await bcrypt.checkPassword(password, data[0].password);
//           if (result) {
//             let payload = {
//               id: data[0].id,
//               tokenCreatedDate: new Date().getTime(),
//             };
//             const token = jwt.encode(payload, config.jwtSecretUsedForSigning);
//             resolve({ success: 1, token: token, id: data[0].id });
//           } else {
//             resolve({ success: 0, error: "password not found" });
//           }
//         }
//       });
//     });
//   }
//   async signUp(fName, lName, email, password) {
//     return new Promise((resolve, reject) => {
//       let userCheck = this.knex("members").select("*").where("email", email);
//       userCheck.then(async (data) => {
//         if (data.length > 0) {
//           resolve({ success: 0, error: "email is already in use" });
//         } else {
//           let hash = await bcrypt.hashPassword(password);
//           let insertUser = this.knex
//             .insert({
//               f_name: fName,
//               l_name: lName,
//               email: email,
//               password: hash,
//             })
//             .into("members");
//           insertUser.then(() => {
//             userCheck.then((data) => {
//               let payload = {
//                 id: data[0].id,
//                 tokenCreatedDate: new Date().getTime(),
//               };
//               const token = jwt.encode(payload, config.jwtSecretUsedForSigning);
//               resolve({ success: 1, token: token, id: data[0].id });
//             });
//           });
//         }
//       });
//     });
//   }
// }

// module.exports = LoginService;
