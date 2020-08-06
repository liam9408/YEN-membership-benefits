const jwt = require('jsonwebtoken');

module.exports = () =>(req, res, next) =>{
  console.log('hello')
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;
      jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
        if (err) {
          res.sendStatus(403);
        } else {
          next();
        }
      });
    } else {
      res.sendStatus(403);
    }
  }