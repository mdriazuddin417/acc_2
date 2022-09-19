const Tour = require("../model/Tour");

exports.getTourService = async () => {
  const result = await Tour.find({});
  return result;
};
exports.getTourByIdService = async (id) => {
  const result = await Tour.find({ _id: id });
  return result;
};
exports.createTourService = async () => {
  const result = await Tour.find({});
  return result;
};
exports.updateTourByIdService = async (id, data) => {
  const result = await Tour.find({});
  return result;
};
exports.deleteTourByIdService = async (id) => {
  const result = await Tour.find({ _id: id });
  return result;
};
