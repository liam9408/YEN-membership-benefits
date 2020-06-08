class UserService {
  constructor(knex) {
    this.knex = knex;
  }
  getInfo(userId) {
    return new Promise(async (resolve, reject) => {
      let userInfo = this.knex("members")
        .select("id", "f_name", "l_name", "email")
        .where("id", userId);
      userInfo
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
}

module.exports = UserService;
