const {
  getTourService,
  createTourService,
  updateTourByIdService,
  getTourByIdService,
  deleteTourByIdService,
} = require("../service/tourService");

exports.getTour = async (req, res, next) => {
  try {
    const result = await getTourService();

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
    const result = await getTourByIdService(id);
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
