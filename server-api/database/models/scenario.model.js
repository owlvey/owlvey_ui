const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ScenarioSchema = new Schema({
  scenario_id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    auto: true,
  },
  feature_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true, max: 300 },
});

module.exports = mongoose.model("Scenario", ScenarioSchema);
