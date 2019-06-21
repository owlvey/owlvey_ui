const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let VersionSchema = new Schema({
  version_id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    auto: true,
  },
  product_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true, max: 300 },
});

module.exports = mongoose.model("Version", VersionSchema);
