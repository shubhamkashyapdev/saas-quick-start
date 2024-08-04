import ShowcaseImage from '@/components/home/showcase-image';
import FreePlanCard from '@/components/stripe/free-plan-card';
import PaidPlanCard from '@/components/stripe/paid-plan-card';
import React from 'react';
import Stripe from 'stripe';

type Props = {
  prices: Stripe.Response<Stripe.ApiList<Stripe.Price>>;
};
const ShowcaseWithPricing = ({ prices }: Props) => {
  return (
    <section>
      <div className="container">
        <ShowcaseImage />
      </div>
      <div
        id="pricing-cards"
        className="flex justify-center items-center relative flex-col gap-4 pb-20 -mt-12 z-10"
      >
        <h2 className="text-3xl lg:text-4xl text-foreground text-center font-semibold">
          {' '}
          Choose what fits you right
        </h2>
        <p className="text-foreground text-center max-w-[50ch]">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-16">
          <FreePlanCard plan={'STARTER'} />
          {prices.data.reverse().map((card) => (
            <PaidPlanCard key={card.nickname} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseWithPricing;
