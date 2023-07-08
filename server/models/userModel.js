import mongoose from "mongoose";

import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail.js";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "an user must have an name"],
  },

  email: {
    type: String,
    required: [true, "an user must have an email"],
    validate: [isEmail, "Please enter valid email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "an user must have an password"],
  },

  confirmPassword: {
    type: String,
    required: [true, " Please confirm your password"],
    validate: {
      // this will work on CREATE or SAVE methods
      validator: function (val) {
        return val === this.password;
      },
      message: "Passwords are not the same",
    },
  },

  userFolder: {
    type: [String]
  }
});

// Document middleware
userSchema.pre("save", async function (next) {
  //Hashing password
  this.password = await bcrypt.hash(this.password, 12);

  //removing property from DB
  this.confirmPassword = undefined;

  next();
});

// Checking password
userSchema.methods.checkPassword = async function (userPassword, password) {
  return await bcrypt.compare(userPassword, password);
};

const Users = mongoose.model("Users", userSchema);

export default Users;
