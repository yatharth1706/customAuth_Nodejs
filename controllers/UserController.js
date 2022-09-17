function signupUser(req, res) {
  res.send("Signup");
}

function loginUser(req, res) {
  res.send("Login");
}

module.exports = {
  signupUser,
  loginUser,
};
