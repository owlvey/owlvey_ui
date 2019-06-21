const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CaseSchema = new Schema({
  case_id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    auto: true,
  },
  step_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true, max: 300 },
});

module.exports = mongoose.model("Case", CaseSchema);
