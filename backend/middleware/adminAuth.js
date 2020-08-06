const jwt = require("jsonwebtoken");
const service = require('../service/benefitsService')

module.exports = () => async (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== "undefined") {
        req.token = bearerHeader;
        jwt.verify(req.token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.sendStatus(403);
            } else {
                let userID = jwt.decode(req.token).id;
                const userType = await service.checkUserType(userID)
                if (userType !== "admin") {
                  res.sendStatus(403);
                }
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
};
