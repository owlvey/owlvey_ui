const Feature = require("../database/models/feature.model");

exports.getFeaturesByVersion = function(req, res) {
  const { version_id } = req.query;
  Feature.find({ version_id }, (error, features) => {
    if (error || features === null) {
      res.sendStatus(404);
    } else {
      res.json(features);
    }
  });
};
