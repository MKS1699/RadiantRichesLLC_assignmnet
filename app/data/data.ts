export interface DATAType {
  title: string;
  builderName: string;
  description: string;
  isBestChoice?: boolean;
  isBestDeal?: boolean;
  mainHighLightsText?: string;
  mainHighLightsNumberValues?: {
    rating: number;
    text: string;
  }[];
  discounts?: string;
  additionalContent?: string[];
  ratings: {
    number: number;
    status: string;
    stars: number;
  };
}

type DATATypesCollection = DATAType[];

export const DATA: DATATypesCollection = [
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    builderName: "Builder 1",
    description:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighLightsText:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    ratings: {
      number: 9.8,
      status: "Exceptional",
      stars: 5,
    },
    isBestChoice: true,
  },
  {
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    builderName: "Builder",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    mainHighLightsText:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    ratings: {
      number: 9.5,
      status: "Excellent",
      stars: 4.5,
    },
    isBestDeal: true,
  },
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    builderName: "Builder 1",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighLightsText:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    ratings: {
      number: 9.3,
      status: "Exceptional",
      stars: 5,
    },
  },
  {
    title: "CDK Resposive Builder",
    builderName: "CDK",
    description:
      " An extensive library of widgets and apps, and detailed step-by-step guides",
    discounts: "26% Off",
    mainHighLightsNumberValues: [
      {
        rating: 9.9,
        text: "Building Responsive",
      },
      {
        rating: 8.9,
        text: "Cool",
      },
      {
        rating: 8.9,
        text: "Docs",
      },
    ],
    additionalContent: ["Documentation", "Easy Use", "Out of Box"],
    ratings: {
      number: 9.1,
      stars: 4,
      status: "Very Good",
    },
  },
];
