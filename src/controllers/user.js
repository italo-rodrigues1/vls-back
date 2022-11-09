const {
  allUsers,
  oneUser,
  updateUserOne,
  deleteOneUser,
} = require("../services/userService");

exports.getAllUsers = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }
  console.log("users", users);

  try {
    console.log("users", users);

    const users = await allUsers();
    console.log("users", users);
    return res.json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.getOneUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "Id is required" });
  }

  try {
    const users = await oneUser(id);
    return res.json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.logout = (req, res) => {
  if (req.body) {
    return res.status(400);
  }

  return res.status(200).send({ auth: false, token: null });
};

exports.updateUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "Id is required" });
  }

  try {
    const usersDelete = await deleteOneUser(id);
    return res.status(200).json(usersDelete);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
