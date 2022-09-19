const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tour"],
      minLength: [3, "At least provide a 3 character"],
      maxLength: [150, "150 character maximum allow"],
    },
    image: {
      type: String,
      required: [true, "please provide a valid image url"],
    },
    descriptions: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Can't allow negative value"],
    },
    view: {
      type: Number,
      required: true,
      min: [0, "Can't allow negative value"],
    },
  },
  { timestamps: true },
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
