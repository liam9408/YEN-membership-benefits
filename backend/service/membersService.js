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

  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      let delUser = this.knex("members")
        .where("id", userId)
        .del()
        delUser
        .then(() => {
          resolve({success: 1, msg: 'User has been deleted'});
        })
        .catch((err) => {
          reject({success: 0, msg: 'Something went wrong deleting'});
        });
    });
  }
}

module.exports = UserService;
