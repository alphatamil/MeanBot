const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FBUserSchema = new schema(
  {
    psId: {
      type: String,
      unique: true,
      required: true
    },
    firstName: String,
    lastName: String,
    profilePicture: String,
    timezone: String,
    locale: String,
    gender: String
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("FBUser", FBUserSchema);
