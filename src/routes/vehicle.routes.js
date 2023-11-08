const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

router.get(
  "/getVariantDetails/:variantSlug",
  vehicleController.getVariantDetails
);
router.get(
  "/getVariantDetailsLocal/:variantSlug",
  vehicleController.getVariantDetailsLocal
);

router.post("/storeVariantSlug", vehicleController.storeVariantSlugData);
router.post(
  "/storeexShowroomPrice",
  vehicleController.storeexShowRoomPriceData
);

module.exports = router;
