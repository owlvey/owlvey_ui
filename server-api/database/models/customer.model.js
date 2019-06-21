const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
  customer_id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    auto: true,
  },
  name: { type: String, required: true, max: 100 },
  avatar: { type: String, required: false },
});

// Export the model
module.exports = mongoose.model("Customer", CustomerSchema);
