const mongoose = require("mongoose");

const exShowroomPrice = mongoose.Schema({
  state: {
    type: String,
  },
  variantSlug: {
    type: String,
  },
  exShowroomPrice: {
    type: Number,
  },
  onRoad: {
    type: Number,
  },
  vehicleType: {
    type: String,
  },
});
const ExShowroomPrice = mongoose.model('exShowroomPrice', exShowroomPrice);
module.exports = ExShowroomPrice;