const Step = require("../database/models/step.model");

exports.getStepsByFeatures = function(req, res) {
  const { scenario_id } = req.query;
  Step.find({ scenario_id }, (error, steps) => {
    if (error || steps === null) {
      res.sendStatus(404);
    } else {
      res.json(steps);
    }
  });
};
