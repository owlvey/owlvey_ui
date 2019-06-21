const Case = require("../database/models/case.model");

exports.getCasesByStep = function(req, res) {
  const { step_id } = req.query;
  Case.find({ step_id }, (error, cases) => {
    if (error || cases === null) {
      res.sendStatus(404);
    } else {
      res.json(cases);
    }
  });
};
