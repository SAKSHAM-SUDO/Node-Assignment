const { vehicleService } = require("../services");

const getVariantDetailsLocal = (req, res) => {
  const { variantSlug } = req.params;
  const result = vehicleService.getVariantDetailsLocal(variantSlug);
  res.json(result);
};

const getVariantDetails = async (req, res) => {
  const { variantSlug } = req.params;
  try {
    const result = await vehicleService.getVariantDetails(variantSlug);
    res.status(result.status).json(result.result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

const storeVariantSlugData = async (req, res) => {
  try {
    const result = await vehicleService.storeVariantSlugData(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const storeexShowRoomPriceData = async (req, res) => {
  try {
    const result = await vehicleService.storeExShowroomPriceData(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getVariantDetails,
  getVariantDetailsLocal,
  storeVariantSlugData,
  storeexShowRoomPriceData,
};
