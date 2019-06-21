const Scenario = require("../database/models/scenario.model");

exports.getScenariosByFeature = function(req, res) {
  const { feature_id } = req.query;
  Scenario.find({ feature_id }, (error, scenarios) => {
    if (error || scenarios === null) {
      res.sendStatus(404);
    } else {
      res.json(scenarios);
    }
  });
};
