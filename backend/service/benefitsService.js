const config = process.env;

class BenefitsService {
  constructor(knex) {
    this.knex = knex;
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
}

module.exports = BenefitsService;
