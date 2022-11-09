exports.getAllCompanies = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }

  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.createCompany = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }

  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.updateCompany = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }

  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.deleteCompany = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }

  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
