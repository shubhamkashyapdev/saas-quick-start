import { stripeProjectKeys } from "@/constants/stripe-constants";
import { StripePlanCardItem } from "@/types/stripe-types";

export const pricingCards: StripePlanCardItem[] = [
  {
    title: "Starter",
    plan: "STARTER",
    description: "Perfect for trying out TraverX AI Builder",
    price: "Free",
    duration: "",
    highlight: "Key features",
    features: ["3 Sub accounts", "2 Team members"],
    priceId: stripeProjectKeys.STARTER,
  },
  {
    title: "Unlimited SaaS",
    plan: "UNLIMITED",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    features: [
      "Everything Baisc +",
      "Rebilling",
      "Team Collboration",
      "24/7 Support team",
    ],
    priceId: stripeProjectKeys.UNLIMITED,
  },
  {
    title: "Basic",
    plan: "BASIC",
    description: "For serious agency owners",
    price: "$49",
    duration: "month",
    highlight: "Everything in Starter, plus",
    features: ["5 Sub accounts", "Team Collaboration", "Email Support"],
    priceId: stripeProjectKeys.BASIC,
  },
];
