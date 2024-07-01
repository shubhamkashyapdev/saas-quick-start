import { pricingCards } from "@/data/stripe-data";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/server/db";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") ?? "";
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    console.log({ err });
    return new Response(
      `Webhook Error: ${err instanceof Error ? err.message : "Unknown Error"}`,
      { status: 400 }
    );
  }
  const session = event.data.object as Stripe.Checkout.Session;
  const userId = Number(session?.metadata?.userId);
  if (!userId || isNaN(userId)) {
    // logger.error(`invalid userId in metadata ${userId}`);
    return new Response("invalid userId in metadata", {
      status: 400,
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return new Response("user not found", {
      status: 400,
    });
  }
  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
      // Retrieve the subscription details from Stripe.
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );
      if (subscription.status === "active") {
        // WIP: Send a notification to the user's email address.
        const planNickname = subscription.items.data[0]?.price.nickname;
        const plan = pricingCards.find(
          (c) => c.title.toLowerCase() === planNickname?.toLowerCase()
        );
        if (!plan) {
          return new Response("plan not found", {
            status: 400,
          });
        }
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            stripeSubscriptionId: subscription.id,
            stripeCurrentPeriodEnd: new Date(
              subscription.current_period_end * 1000
            ),
            plan: plan.plan,
          },
        });
      }
      break;
    default:
      // handle other events
      break;
  }
  return new Response("ok");
}
