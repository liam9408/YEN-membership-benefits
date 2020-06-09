class UserService {
  constructor(knex) {
    this.knex = knex;
  }

  checkUserType(id){
    return new Promise(async (resolve, reject) => {
      let checkUser = this.knex("members")
        .select("user_type")
        .where("id", id)
        checkUser.then(async (data) => {
        resolve(data);
      });
    });
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
