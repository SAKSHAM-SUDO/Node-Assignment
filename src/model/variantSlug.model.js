const mongoose = require("mongoose");

const variantSlug = mongoose.Schema({
  images: {
    type: [String],
  },
  brandSlug: {
    type: String,
  },
  model: {
    type: String,
  },
  modelSlug: {
    type: String,
  },
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  specifications: {
    engineAndTransmission: {
      type: [String],
    },
  },
});
const VariantSlug = mongoose.model("variantSlug", variantSlug);
module.exports = VariantSlug;
