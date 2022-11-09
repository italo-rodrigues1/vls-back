const {
  allPlacesService,
  onePlaceService,
} = require("../services/placeService");

exports.getAllPlaces = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }

  try {
    const allPlaces = await allPlacesService();
    return res.status(200).json(allPlaces);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.getOnePlace = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }
  console.log("asd")
  const { id } = req.params;

  if (!id) {
    return res.status(400);
  }

  try {
    const onePlace = await onePlaceService(id);
    return res.status(200).json(onePlace);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.createPlace = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }
  try {
    const auth = await authUser(email, password);
    return res.status(200).json(auth);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.deletePlace = async (req, res) => {
  if (req.body) {
    return res.status(400);
  }
  try {
    const auth = await authUser(email, password);
    return res.status(200).json(auth);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
