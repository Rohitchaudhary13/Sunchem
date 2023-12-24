const imgFolder = [
  "Skincare",
  "Hair_Care",
  "Clinical_Facials",
  "Depilatory",
  "Hand_&_Feet_Care",
  "Bath_&_Body_Care",
  "Mens_Grooming",
  "Sun_Care",
  "Face_Care",
  "Hygiene",
  "Home_Care",
  "Baby_Care",
  "Intimate_Hygiene",
  "Personal_Care",
];

const totalImages = [16, 19, 23, 11, 4, 12, 8, 3, 43, 4, 2, 8, 2, 2];

const baseUrl = "https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/";

const generatedUrls = {};

imgFolder.forEach((folder, index) => {
  const numberOfImages = totalImages[index];
  generatedUrls[`${folder}`] = [];
  for (let i = 1; i <= numberOfImages; i++) {
    const url = `${baseUrl}${folder}/1%20(${i}).jpg`;
    generatedUrls[`${folder}`].push(url);
  }
});
export const productCatalog = [
  {
    id: 1,
    category: "Skincare",
    prods: {
      images: generatedUrls[imgFolder[0]],
      titles: [
        "OXYGEN BLEACH",
        "OXYGEN BLEACH",
        "AMMONIA FREE OXYGEN BLEACH",
        "AMMONIA FREE OXYGEN BLEACH",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "HOME CARE CREAM",
        "D-TAN FACE PACK",
        "NOSE STRIP",
        "PIMPLE PATCH",
      ],
      subject: [
        "REGULAR & OILY SKIN",
        "SENSITIVE & DRY SKIN",
        "REGULAR & OILY SKIN",
        "SENSITIVE & DRY SKIN",
        "COLLAGEN & ELASTIN CONTROL",
        "ANTI ACNE",
        "ANTI AGING",
        "ANTI WRINKLE",
        "EXTREMLY SENSITIVE",
        "SKIN RE-STRUCTURING & REJUVINATING",
        "SEBUM REGULATING",
        "SKIN LIGHTNING",
        "SKIN RADIANCE GLOW",
        "TEXT",
        "TEXT",
        "TEXT",
      ],
    },
  },
  {
    id: 2,
    category: "Hair Care",
    prods: {
      images: generatedUrls[imgFolder[1]],
      titles: [
        "HAIR OIL",
        "HAIR COLOUR SHAMPOO",
        "HAIR COLOUR",
        "HAIR COLOUR",
        "HAIR COLOUR",
        "HAIR COLOUR",
        "ANTI LICE HAIR OIL",
        "ANTI LICE HAIR SHAMPOO",
        "PREMIUM HAIR SHAMPOO",
        "PREMIUM HAIR CONDITIONER",
        "PRE SPA ACTIVATOR",
        "PREMIUM HAIR SPA",
        "HAIR BLONDER",
        "HAIR DEVELOPER",
        "HAIR DEVELOPER",
        "HAIR DEVELOPER",
        "HAIR DEVELOPER",
        "HAIR SERUM",
        "HAIR KERATIN",
      ],
      subject: ["Tag 3", "Tag 4"],
    },
  },
  {
    id: 3,
    category: "Clinical Facials",
    prods: {
      images: generatedUrls[imgFolder[2]],
      titles: [
        "ANTI ACNE FACIAL KIT",
        "ANTI AGEING FACIAL KIT",
        "ANTI WRINKLE FACIAL KIT",
        "COLLAGEN & ELASTIN CONTROL FACIAL KIT",
        "EXTREMELY SENSITIVE SKIN FACIAL KIT",
        "SEBUM REGULATING FACIAL KIT",
        "SKIN LIGHTENING FACIAL KIT",
        "SKIN RADIANCE FACIAL KIT",
        "TIME EXPERT FACIAL KIT",
        "SKIN ARCHITECTURE & D-TAN FACIAL KIT",
        "SKIN CLEANSING CREAM",
        "FACIAL MASSAGE SCRUB",
        "EXTRACT GEL",
        "WET FACE PACK",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
        "MASSAGE CREAM",
      ],
      subject: ["Tag 5", "Tag 6"],
    },
  },
  {
    id: 4,
    category: "Depilatory",
    prods: {
      images: generatedUrls[imgFolder[3]],
      titles: [
        "PAINLESS LIPOSOLUBLE WAX",
        "PAINLESS LIPOSOLUBLE WAX",
        "PAINLESS LIPOSOLUBLE WAX",
        "PAINLESS LIPOSOLUBLE WAX",
        "PAINLESS LIPOSOLUBLE WAX",
        "BRAZILIAN STRIPLESS WAX",
        "HAIR REMOVING SPRAY",
        "STRIP WAX",
        "HAIR REMOVING CREAM",
        "PRE WAX GEL",
        "POST WAX LOTION",
      ],
      subject: ["Tag 7", "Tag 8"],
    },
  },
  {
    id: 5,
    category: "Hand & Feet Care",
    prods: {
      images: generatedUrls[imgFolder[4]],
      titles: [
        "AHA GLOW HAND CREAM",
        "AHA GLOW FOOT CREAM",
        "AHA GLOW FOOT SCRUB",
        "MANICURE & PEDICURE KIT",
      ],
      subject: ["Tag 9", "Tag 10"],
    },
  },
  {
    id: 6,
    category: "Bath & Body Care",
    prods: {
      images: generatedUrls[imgFolder[5]],
      titles: [
        "24 HOURS MOISTURISING LOTION",
        "24 HOURS MOISTURISING LOTION",
        "24 HOURS MOISTURISING LOTION",
        "24 HOURS MOISTURISING LOTION",
        "SHOWER GEL",
        "SHOWER GEL",
        "SHOWER GEL",
        "SHOWER GEL",
        "SHOWER GEL",
        "SHOWER GEL",
        "SHOWER GEL",
        "SHOWER GEL",
      ],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 7,
    category: `Men's Grooming`,
    prods: {
      images: generatedUrls[imgFolder[6]],
      titles: [
        "PRE SHAVE CONDITIONER",
        "PRE SHAVE CONDITIONER",
        "PRE SHAVE CONDITIONER",
        "BEARD OIL",
        "BEARD SHAMPOO",
        "BEARD HAIR COLOUR",
        "HAIR STYLING POWDER",
        "HAIR STYLING WAX",
      ],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 8,
    category: "Sun Care",
    prods: {
      images: generatedUrls[imgFolder[7]],
      titles: ["SPF 30 PA +++", "SPF 40 PA +++", "SPF 50 PA ++++"],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 9,
    category: "Face Care",
    prods: {
      images: generatedUrls[imgFolder[8]],
      titles: [
        "NEEM FACE WASH",
        "CUCUMBER FACE WASH",
        "LEMON FACE WASH",
        "PAPAYA  FACE WASH",
        "WATERLESS FACE WASH",
        "AHA GLOW FACE WASH",
        "CHARCOAL FACE WASH",
        "LEMON FACE WASH",
        "PAPAYA FACE WASH",
        "CUCUMBER FACE WASH",
        "GREEN APPLE FACE WASH",
        "ROSE & MULBERRY FACE WASH",
        "KESAR SAFFRON FACE WASH",
        "NEEM FACE SCRUB",
        "CHARCOAL FACE SCRUB",
        "LEMON FACE SCRUB",
        "PAPAYA FACE SCRUB",
        "CUCUMBER FACE SCRUB",
        "ROSE& MULBERRY FACE SCRUB",
        "GREEN APPLE FACE SCRUB",
        "KESAR SAFFRON FACE SCRUB",
        "AHA GLOW FACE SCRUB",
        "NEEM PEEL OF MASK",
        "PAPAYA PEEL OF MASK",
        "CUCUMBER PEEL OF MASK",
        "ROSE & MULBERRY PEEL OF MASK",
        "GREEN APPLE PEEL OF MASK",
        "KESAR SAFFRON PEEL OF MASK",
        "LEMON PEEL OF MASK",
        "CHARCOAL PEEL OF MASK",
        "SKIN SOOTHING CREAM",
        "MODELLING MASK",
        "MODELLING MASK",
        "MODELLING MASK",
        "MODELLING MASK",
        "MODELLING MASK",
        "MODELLING MASK",
        "MODELLING MASK",
        "MODELLING MASK",
        "WATERLESS FACE WASH",
        "WATERLESS FACE WASH",
        "FACE SERUM",
        "B H A  SERUM",
      ],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 10,
    category: "Hygiene",
    prods: {
      images: generatedUrls[imgFolder[9]],
      titles: ["HAND RUB GEL", "HAND RUB GEL", "HAND RUB GEL", "HAND RUB GEL"],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 11,
    category: "Home Care",
    prods: {
      images: generatedUrls[imgFolder[10]],
      titles: ["DISH WASH SPRAY", "COPPER & BRASS POLISHING SPRAY"],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 12,
    category: "Baby Care",
    prods: {
      images: generatedUrls[imgFolder[11]],
      titles: [
        "BABY MILK LOTION",
        "BABY MILK CREAM",
        "BABY NAPPY RASH CREAM",
        "BABY SPF",
        "BABY MASSAGE OIL",
        "BABY HAIR OIL",
        "BABY SHAMPOO",
        "BABY SHOWER GEL",
      ],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 13,
    category: "Intimate Hygiene",
    prods: {
      images: generatedUrls[imgFolder[12]],
      titles: ["FEMALE INTIMATE WASH", "FEMALE INTIMATE WASH"],
      subject: ["Tag 1", "Tag 2"],
    },
  },
  {
    id: 14,
    category: "Personal Care",
    prods: {
      images: generatedUrls[imgFolder[13]],
      titles: ["BI PHASIC MAKE UP REMOVER", "ALOE VERA GEL"],
      subject: ["Tag 1", "Tag 2"],
    },
  },
];
