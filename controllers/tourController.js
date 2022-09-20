const {
  getTourService,
  createTourService,
  updateTourByIdService,
  getTourByIdService,
  deleteTourByIdService,
  getTrendingTourService,
  getCheapestTourService,
} = require("../service/tourService");
var ObjectId = require("mongoose").Types.ObjectId;
exports.getTour = async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.page || req.query.limit) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const result = await getTourService(queries);

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};

exports.updateTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, error: "Not  a valid tour id" });
    }
    const result = await updateTourByIdService(id, req.body);

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};

exports.getTourById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, error: "Not  a valid tour id" });
    }

    const result = await getTourByIdService(id);

    if (!result) {
      return res
        .status(400)
        .json({ success: false, error: "Couldn't find a tour with this id" });
    }
    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};

exports.deleteTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteTourByIdService(id);

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};

//==========Trending Tour==============//
exports.getTrendingTour = async (req, res, next) => {
  try {
    const result = await getTrendingTourService();

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};

//==========Cheapest Tour==============//
exports.getCheapestTour = async (req, res, next) => {
  try {
    const result = await getCheapestTourService();

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error,
      success: false,
    });
  }
};
