const Place = require("../models/place");

exports.allPlacesService = async () => {
  const findAllPlaces = await Place.find();
  console.log("findAllPlaces", findAllPlaces);

  if (!findAllPlaces || findAllPlaces.length === 0) {
    return "No places found";
  }

  return findAllPlaces;
};

exports.onePlaceService = async (id) => {
  const findOnePlace = await Place.findOne({ _id: id });
  console.log("findOnePlace", findOnePlace);

  if (!findOnePlace) {
    return "No places founds";
  }

  return findOnePlace;
};
