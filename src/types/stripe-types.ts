export type StripePlan = "STARTER" | "BASIC" | "UNLIMITED";

export type StripePlanCardItem = {
  title: string;
  plan: StripePlan;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  priceId: string;
};
