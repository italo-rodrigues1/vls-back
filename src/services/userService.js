const User = require("../models/user");

exports.allUsers = async () => {
  const findAllUsers = await User.find();
  console.log("findAllUsers", findAllUsers);
  if (!findAllUsers) {
    return "No users found";
  }
};

exports.oneUser = async (id) => {
  const findOneUser = await User.findOne({ _id: id });
  console.log("findOneUser", findOneUser);
  if (!findOneUser) {
    return "No users found";
  }
  return findOneUser;
};

exports.updateUserOne = async (body) => {
  const updateUsers = await User.updateOne({ _id: body.id }, body);

  if (!updateUsers) {
    return "No users found";
  }
  return "updated users";
};

exports.deleteOneUser = async (id) => {
  const deleteUser = await User.deleteOne({ _id: id });

  if (!deleteUser) {
    return "No users found";
  }
  return "deleted user";
};


