import type { DemoDataset } from "../../types/dataset.types";


export const restaurantDataset: DemoDataset = {

  id: "restaurant",

  name: "Restaurant",

  description:
    "Food delivery and restaurant customer feedback",

  comments: [

    {
      id:1,
      comment:
      "pizza ka taste bohat acha tha",
      category:"Positive Feedback"
    },

    {
      id:2,
      comment:
      "order bohat late aya khana thanda tha",
      category:"Delivery Issue"
    },

    {
      id:3,
      comment:
      "taste bilkul acha nahi tha dobara order nahi karunga",
      category:"Food Quality"
    },

    {
      id:4,
      comment:
      "staff ka behaviour bohat acha tha",
      category:"Customer Service"
    },

    {
      id:5,
      comment:
      "order me item missing tha",
      category:"Order Issue"
    },

    {
      id:6,
      comment:
      "price bohat zyada hai quantity kam hai",
      category:"Pricing Issue"
    },

    {
      id:7,
      comment:
      "delivery rider ne bohat acha behave kiya",
      category:"Positive Feedback"
    },

    {
      id:8,
      comment:
      "complaint ki thi lekin koi response nahi mila",
      category:"Customer Support"
    },

    {
      id:9,
      comment:
      "burger fresh aur tasty tha",
      category:"Positive Feedback"
    },

    {
      id:10,
      comment:
      "order cancel ho gaya aur refund nahi aya",
      category:"Refund Issue"
    }

  ]

};