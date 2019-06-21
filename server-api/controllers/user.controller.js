const User = require("../database/models/user.model");

exports.getUserById = function(req, res) {
  const { userid } = req.params;
  User.findOne({ user_id: userid }, "-__v -_id -password", (error, user) => {
    if (error || user === null) {
      res.json(error);
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  });
};
