const User = require("../database/models/user.model");

exports.doLogin = function(req, res) {
  const { username, password } = req.body;
  User.findOne({ username, password }, (error, user) => {
    if (error) {
      res.sendStatus(404);
    } else {
      res.json({
        expiration_time: 1552451041756,
        session_id: "30c226a0-d481-47fb-9284-1e93f1913b50",
        user_id: user.user_id,
      });
    }
  });
};
