// Require the necessary modules for this file.
const express = require('express');
const jwt = require('jsonwebtoken');

// Verify Token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    // const bearer = bearerHeader.split(' ');
    // const bearerToken = bearer[1];
    req.token = bearerHeader;
    next();
  } else {
    res.sendStatus(403);
  }
}

// Setup a JobsServices so we can use it later on
class BenefitsRouter {
  constructor(benefitsService) {
    this.benefitsService = benefitsService;
  }

  router() {
    let router = express.Router();
    router.get('/list/all', verifyToken, this.listAll.bind(this));
    router.post('/add-benefit', verifyToken, this.addBenefit.bind(this));
    router.put('/edit-title', verifyToken, this.editTitle.bind(this));
    router.put(
      '/edit-description',
      verifyToken,
      this.editDescription.bind(this)
    );
    router.put('/edit-activity', verifyToken, this.editActivity.bind(this));
    
    return router;
  }

  listAll(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        // let info = jwt.decode(req.token).id
        // console.log(info)
        return this.benefitsService
          .listAll(req.params.userid)
          .then((data) => res.json(data))
          .catch((err) => res.status(500).json(err));
      }
    });
  }
  addBenefit(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let userID = jwt.decode(req.token).id;
        let type = '';
        this.benefitsService
          .checkUserType(userID)
          .then((info) => {
            type = info[0].user_type;
          })
          .then(() => {
            if (type !== 'admin') {
              res.sendStatus(403);
            } else {
              this.benefitsService
                .addBenefit(req.body.company, req.body.benefitTitle, req.body.benefitDesc, req.body.category, req.files)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
            }
          });
      }
    });
  }
  editTitle(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let userID = jwt.decode(req.token).id;
        let type = '';
        this.benefitsService
          .checkUserType(userID)
          .then((info) => {
            type = info[0].user_type;
          })
          .then(() => {
            if (type !== 'admin') {
              res.sendStatus(403);
            } else {
              this.benefitsService
                .editTitle(req.body.benefitId, req.body.title)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
            }
          });
      }
    });
  }
  editDescription(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let userID = jwt.decode(req.token).id;
        let type = '';
        this.benefitsService
          .checkUserType(userID)
          .then((info) => {
            type = info[0].user_type;
          })
          .then(() => {
            if (type !== 'admin') {
              res.sendStatus(403);
            } else {
              this.benefitsService
                .editActiveness(req.body.benefitId)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
            }
          });
      }
    });
  }
  editActivity(req, res) {
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let userID = jwt.decode(req.token).id;
        let type = '';
        this.benefitsService
          .checkUserType(userID)
          .then(async (info) => {
            type = info[0].user_type;
          })
          .then(() => {
            if (type !== 'admin') {
              res.sendStatus(403);
            } else {
              this.benefitsService
                .editActiveness(req.body.benefitId)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
            }
          });
      }
    });
  }
}

module.exports = BenefitsRouter;
