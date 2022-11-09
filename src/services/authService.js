const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authJwt = async (name, email) => {
  const jwtUser = jwt.sign(
    {
      name: name,
      email: email,
    },
    process.env.KEY_JWT_SECRET,
    { expiresIn: "100000000" }
  );
  return jwtUser;
};

exports.authUser = async (email, password) => {
  const findOneUser = await User.findOne({ email: email, password: password });
  console.log("findOneUser", findOneUser);

  if (!findOneUser) {
    return "No users found";
  }

  return authJwt(findOneUser.name, findOneUser.email);
};

exports.registerUser = async (name, email, password) => {
  const findUsers = await User.findOne({
    name: name,
    email: email,
  });
  console.log("findUsers", findUsers);

  if (!findUsers) {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });
    newUser.save();

    if (newUser) {
      return authJwt(name, email);
    }
    return "Error creating user";
  }
  return "User exists";
};
