const { authUser, registerUser } = require("../services/authService");

exports.auth = async (req, res) => {
  console.log("auth", req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Email and password required!" });
  }

  try {
    const authtoken = await authUser(email, password);

    if (authtoken === "No users found") {
      return res.json({ message: "No users found" });
    }

    return res.status(200).send({ auth: true, token: authtoken });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.authGoogle = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Email and password required!" });
  }

  try {
    const auth = authUser(email, password);
    return res.status(200).json(auth);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.register = async (req, res) => {
  console.log("register", req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ message: "Name,email and password required!" });
  }

  try {
    const authTokenRegister = await registerUser(name, email, password);

    if (authTokenRegister === "User exists") {
      return res.json({ message: "User exists" });
    }

    return res.status(200).send({ auth: true, token: authTokenRegister });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
