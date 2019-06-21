const Version = require("../database/models/version.model");

exports.getVersionssByProduct = function(req, res) {
  const { product_id } = req.query;
  Version.find({ product_id }, (error, versions) => {
    if (error || versions === null) {
      res.sendStatus(404);
    } else {
      res.json(versions);
    }
  });
};
