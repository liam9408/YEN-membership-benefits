const config = process.env;

class BenefitsService {
  constructor(knex) {
    this.knex = knex;
  }

  checkUserType(id) {
    return new Promise(async (resolve, reject) => {
      let checkUser = this.knex('members').select('user_type').where('id', id);
      checkUser.then(async (data) => {
        resolve(data);
      });
    });
  }
  listAll() {
    return new Promise(async (resolve, reject) => {
      let listBenefits = this.knex('benefits')
        .select('*')
        .where('active', true)
        .orderBy('benefits.created_at', 'DESC');
      listBenefits.then(async (data) => {
        resolve(data);
      });
    });
  }
  editTitle(benefitId, newTitle) {
    return new Promise(async (resolve, reject) => {
      let titleChange = this.knex('benefits')
        .where('id', benefitId)
        .update({ benefit_title: newTitle });
      titleChange
        .then(() => {
          resolve({ success: 1, newTitle: newTitle });
        })
        .catch((err) => {
          reject({ success: 0, error: 'Benefit title could not be updated' });
        });
    });
  }
  editDescription(benefitId, newDescription) {
    return new Promise(async (resolve, reject) => {
      let descriptionChange = this.knex('benefits')
        .where('id', benefitId)
        .update({ benefit_description: newDescription });
      descriptionChange
        .then(() => {
          resolve({ success: 1, newDescription: newDescription });
        })
        .catch((err) => {
          reject({
            success: 0,
            error: 'Benefit description could not be updated',
          });
        });
    });
  }

  editActiveness(benefitId) {
    return new Promise(async (resolve, reject) => {
      let newState;
      let currentState = await this.knex('benefits')
        .select('active')
        .where('id', benefitId);
      if (currentState[0].active === true) {
        newState = false;
      } else {
        newState = true;
      }
      let activeChange = this.knex('benefits')
        .where('id', benefitId)
        .update({ active: newState });
        activeChange
        .then(() => {
          resolve({ success: 1, newState: newState });
        })
        .catch(err => {
          reject({ success: 0, error: 'Active state could not be changed.' });
        });
    });
  }
}

module.exports = BenefitsService;
