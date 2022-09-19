const Tour = require("../model/Tour");

exports.getTourService = async () => {
  const result = await Tour.find({});
  const total = await Tour.count();
  return { total, result };
};

exports.getTourByIdService = async (id) => {
  const result = await Tour.find({ _id: id });
  return result;
};

exports.createTourService = async (data) => {
  const result = await Tour.create(data);
  return result;
};

exports.updateTourByIdService = async (id, data) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );
  return result;
};

exports.deleteTourByIdService = async (id) => {
  const result = await Tour.deleteOne({ _id: id });
  return result;
};

exports.getTrendingTourService = async () => {
  const result = await Tour.find({}).sort({ view: -1 }).limit(3);
  return result;
};

exports.getCheapestTourService = async () => {
  const result = await Tour.find({}).sort({ view: 1 }).limit(3);
  return result;
};
