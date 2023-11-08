const { ExShowroomPrice } = require("../model");
const { VariantSlug } = require("../model");
const getVariantList = [
  {
    images: [],
    brandSlug: "toyota",

    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.7 GX 7 STR",
    slug: "2.7-gx-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccefe",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.7 GX 8 STR",
    slug: "2.7-gx-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf00",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 G 7 STR",
    slug: "2.4-g-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf02",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 G 8 STR",
    slug: "2.4-g-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf04",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.7 GX 7 STR AT",
    slug: "2.7-gx-7-str-at",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf06",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.7 GX 8 STR AT",
    slug: "2.7-gx-8-str-at",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf08",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 G Plus 7 STR",
    slug: "2.4-g-plus-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf0a",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 G Plus 8 STR",
    slug: "2.4-g-plus-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf0c",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 GX 7 STR",
    slug: "2.4-gx-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf0e",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 GX 8 STR",
    slug: "2.4-gx-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf10",
  },

  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.7 VX 7 STR",
    slug: "2.7-vx-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf12",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 GX 7 STR AT",
    slug: "2.4-gx-7-str-at",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf14",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 GX 8 STR AT",
    slug: "2.4-gx-8-str-at",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf16",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 VX 7 STR",
    slug: "2.4-vx-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf18",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",

    name: "Toyota Innova Crysta 2.4 VX 8 STR",
    slug: "2.4-vx-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf1a",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.7 ZX 7 STR AT",
    slug: "2.7-zx-7-str-at",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf1c",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 ZX 7 STR",
    slug: "2.4-zx-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf1e",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta-2020-2023",
    name: "Toyota Innova Crysta 2.4 ZX 7 STR AT",
    slug: "2.4-zx-7-str-at",
    specifications: { "engine-and-transmission": [Object] },
    id: "62efac22ebfa18b498eccf20",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta",
    name: "Toyota Innova Crysta GX 7 STR",
    slug: "gx-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "64143c1ce25f02bbcb63e83c",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta",
    name: "Toyota Innova Crysta GX 8 STR",
    slug: "gx-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "64143c46e25f02bbcb63e83f",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta",
    name: "Toyota Innova Crysta VX 2.4 7 STR",
    slug: "vx-24-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "64242afb1a383520a1d680be",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta",
    name: "Toyota Innova Crysta VX 2.4 8 STR",
    slug: "vx-24-8-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "64242b2d1a383520a1d680c0",
  },
  {
    brandSlug: "toyota",
    model: "Toyota Innova Crysta",
    modelSlug: "innova-crysta",
    name: "Toyota Innova Crysta ZX 2.4 7 STR",
    slug: "zx-24-7-str",
    specifications: { "engine-and-transmission": [Object] },
    id: "64242b591a383520a1d680c1",
  },
];
const ExShowroomPrices = [
  {
    state: "Delhi",
    variantSlug: "g-slf-7-str",

    ExShowroomPrice: 1999000,
    id: null,
  },
  {
    state: "Delhi",
    variantSlug: "g-slf-8-str",
    ExShowroomPrice: 1999000,
    id: null,
  },
  {
    variantSlug: "vx-24-7-str",
    ExShowroomPrice: 2439000,
    onRoad: 2889419,
    state: "Delhi",
    vehicleType: "car",
    id: null,
  },
  {
    variantSlug: "vx-24-8-str",
    ExShowroomPrice: 2444000,
    onRoad: 2895440,
    state: "Delhi",
    vehicleType: "car",
    id: null,
  },
  {
    variantSlug: "zx-24-7-str",
    ExShowroomPrice: 2605000,
    onRoad: 3081847,
    state: "Delhi",
    vehicleType: "car",
    id: null,
  },
  {
    variantSlug: "gx-7-str",
    ExShowroomPrice: 1999000,
    onRoad: 2375138,
    state: "Delhi",
    vehicleType: "car",
    id: null,
  },
  {
    variantSlug: "gx-8-str",
    ExShowroomPrice: 1999000,

    onRoad: 2375315,
    state: "Delhi",
    vehicleType: "car",
    id: null,
  },
];

// If we are fetching the variantList and Exshowroomprice from mongodb collection then this function is called.
const getVariantDetails = async (variantSlug) => {
  try {
    const combinedData = await ExShowroomPrice.aggregate([
      {
        $match: { variantSlug: variantSlug },
      },
      {
        $lookup: {
          from: "variantslugs",
          localField: "variantSlug",
          foreignField: "slug",
          as: "variantData",
        },
      },
      {
        $unwind: "$variantData",
      },
      {
        $project: {
          images:"$variantData.images",
          brandSlug: "$variantData.brandSlug",
          model: "$variantData.model",
          modelSlug: "$variantData.modelSlug",
          name: "$variantData.name",
          slug: "$variantData.slug",
          specifications: "$variantData.specifications",
          id: "$variantData.id",
          onRoad: "$exShowroomPrice",
          exShowroomPrice: "$exShowroomPrice",
        },
      },
    ]);

    if (combinedData.length > 0) {
      return { status: 200, result: combinedData[0] };
    } else {
      const result = {
        images: [],
        brandSlug: null,
        model: null,
        modelSlug: null,
        name: null,
        slug: variantSlug,
        specifications: null,
        id: null,
        onRoad: null,
        exShowroomPrice: null,
      };
      return { status: 200, result: result };
    }
  } catch (error) {
    throw error;
  }
};

// function to store variantList in mongodb collection
const storeVariantSlugData = async (data) => {
  try {
    const result = await VariantSlug.insertMany(data);

    return {
      message: "Data added to the collection",
      insertedCount: result.insertedCount,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// function to store exShowRoomPrice in mongodb collection
const storeExShowroomPriceData = async (data) => {
  try {
    const result = await ExShowroomPrice.insertMany(data);

    return {
      message: "Data added to the collection",
      insertedCount: result.insertedCount,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// If we are storing the variantList and Exshowroomprice in local variables then this function is called.
const getVariantDetailsLocal = (variantSlug) => {
  const variant = getVariantList.find(
    (variant) => variant.slug === variantSlug
  );

  if (variant) {
    const priceData = ExShowroomPrices.find(
      (price) => price.variantSlug === variantSlug
    );

    return {
      images: variant.images,
      brandSlug: variant.brandSlug,
      model: variant.model,
      modelSlug: variant.modelSlug,
      name: variant.name,
      slug: variant.slug,
      specifications: variant.specifications,
      id: variant.id,
      onRoad: priceData ? priceData.onRoad : null,
      ExShowroomPrice: priceData ? priceData.ExShowroomPrice : null,
    };
  }

  return {};
};

module.exports = {
  getVariantDetails,
  getVariantDetailsLocal,
  storeExShowroomPriceData,
  storeVariantSlugData,
};
