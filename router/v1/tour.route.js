const express = require("express");
const tourController = require("../../controllers/tourController");

const router = express.Router();

router.route("/").get(tourController.getTour).post(tourController.createTour);

router.route("/trending").get(tourController.getTrendingTour);
router.route("/cheapest").get(tourController.getCheapestTour);

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

module.exports = router;
