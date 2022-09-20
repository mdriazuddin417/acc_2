const express = require("express");
const tourController = require("../../controllers/tourController");

const router = express.Router();

router
  .route("/tours")
  .get(tourController.getTour)
  .post(tourController.createTour);

router.route("/tour/trending").get(tourController.getTrendingTour);
router.route("/tour/cheapest").get(tourController.getCheapestTour);

router
  .route("/tour/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

module.exports = router;
