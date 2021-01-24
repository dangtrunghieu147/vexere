const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    phone: String,
    role: String,
    tokens: [String],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  //hash password
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
