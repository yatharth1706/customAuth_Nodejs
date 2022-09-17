const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signupUser(req, res) {
  // get the password and encrypt it first
  let password = req.body.password;

  let encryptedPassword = bcrypt.hashSync(password, 8);

  const newUser = new User({
    ...req.body,
    password: encryptedPassword,
  });

  newUser.save();
}

function loginUser(req, res) {
  res.send("Login");
}

module.exports = {
  signupUser,
  loginUser,
};
