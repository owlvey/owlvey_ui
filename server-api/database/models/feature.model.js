const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FeatureSchema = new Schema({
  feature_id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    auto: true,
  },
  version_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true, max: 300 },
});

module.exports = mongoose.model("Feature", FeatureSchema);
