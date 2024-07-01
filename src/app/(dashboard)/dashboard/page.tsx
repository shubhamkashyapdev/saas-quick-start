import {
  StripePlan,
  createSubscriptionSession,
  getSubcriptionDetails,
} from "@/actions/stripe";
import { authOptions } from "@/lib/next-auth-options";
import { PLAN } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    plan: StripePlan;
  };
};

const Dashboard = async ({ searchParams: { plan } }: Props) => {
  const { isSubscribed, isCanceled, stripeCurrentPeriodEnd } =
    await getSubcriptionDetails();
  if (!isSubscribed && plan) {
    const session = await createSubscriptionSession({ plan });
    if (session.url) {
      return redirect(session.url);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Plan: {plan}</p>
      <p>Subscribed: {isSubscribed ? "Yes" : "No"}</p>
      <p>Canceled: {isCanceled ? "Yes" : "No"}</p>
      <p>Current Period End: {stripeCurrentPeriodEnd?.toString()}</p>
    </div>
  );
};

export default Dashboard;
