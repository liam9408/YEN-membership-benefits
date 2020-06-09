const config = process.env;

class BenefitsService {
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
  listAll() {
    return new Promise(async (resolve, reject) => {
      let listBenefits = this.knex("benefits")
        .select("*")
        .where("active", true)
        .orderBy("benefits.created_at", "DESC");
      listBenefits.then(async (data) => {
        resolve(data);
      });
    });
  }
  editTitle(benefitId, newTitle){
    return new Promise(async (resolve, reject) => {
      let titleChange = this.knex('benefits')
        .where('id', benefitId)
        .update({ benefit_title: newTitle });
        titleChange
        .then(() => {
          resolve({ success: 1, newTitle: newTitle });
        })
        .catch(err => {
          reject({ success: 0, error: 'Benefit title could not be updated' });
        });
    });
  }
}

module.exports = BenefitsService;
