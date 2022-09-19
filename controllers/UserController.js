const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateSameUserPresent } = require("../utils/lib");

async function signupUser(req, res) {
  email = req.body.email;
  // validate if same user email present or not
  User.find({ email: email }, (err, results) => {
    if (err) {
      throw new Error(err);
    }

    if (results.length > 0) {
      res.status(400).send({ message: "User already exists with this email address" });
    }
  });

  // get the password and encrypt it first
  let password = req.body.password;

  let encryptedPassword = bcrypt.hashSync(password, 8);

  const newUser = new User({
    ...req.body,
    password: encryptedPassword,
  });

  newUser
    .save()
    .then(() => res.status(200).send({ message: "User signed up successfully", id: newUser._id }))
    .catch((e) => res.status(400).send({ message: e }));
}

function loginUser(req, res) {
  res.send("Login");
}

module.exports = {
  signupUser,
  loginUser,
};
