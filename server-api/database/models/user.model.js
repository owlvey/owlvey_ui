const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    auto: true,
  },
  name: { type: String, required: true, max: 100 },
  username: { type: String, required: true, max: 50 },
  password: { type: String, required: true, max: 30 },
  avatar: { type: String, required: false },
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
