const bcrypt = require('../authentication/bcrypt');
const jwt = require('jsonWebToken');

const config = process.env;

class LoginService {
  constructor(knex) {
    this.knex = knex;
  }

  async login(email, password) {
    return new Promise(async (resolve, reject) => {
      let findUser = this.knex('members')
        .select('id','f_name', 'l_name', 'password','user_type')
        .where('email', email);
      findUser.then(async (data) => {
        if (data.length === 0) {
          resolve({ success: 0, error: 'email not found' });
        } else {
          let result = await bcrypt.checkPassword(password, data[0].password);
          if (result) {
            let payload = {
              id: data[0].id,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
              expiresIn: '30 days',
            });
            resolve({ success: 1, token: token, id: data[0].id, fName:data[0].f_name, lName: data[0].l_name, userType: data[0].user_type });
          } else {
            resolve({ success: 0, error: 'password not found' });
          }
        }
      });
    });
  }
  async signUp(fName, lName,userType, email, password) {
    return new Promise((resolve, reject) => {
      let userCheck = this.knex('members').select('*').where('email', email);
      userCheck.then(async (data) => {
        if (data.length > 0) {
          resolve({ success: 0, error: 'email is already in use' });
        } else {
          let hash = await bcrypt.hashPassword(password);
          let insertUser = this.knex
            .returning(['id', 'f_name', 'l_name', 'user_type'])
            .insert({
              f_name: fName,
              l_name: lName,
              user_type:userType,
              email: email,
              password: hash,
            })
            .into('members');
          insertUser.then((data) => {
            const token = jwt.sign(
              { id: data[0].id },
              process.env.JWT_SECRET,
              { expiresIn: '30 days' }
            );
            resolve({ success: 1, token: token, id: data[0].id, fName:data[0].f_name, lName: data[0].l_name, userType:data[0].user_type });
          });
        }
      });
    });
  }
}

module.exports = LoginService;
