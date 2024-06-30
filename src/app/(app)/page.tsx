import { HomeHero } from "@/components/Hero";
import FreePlanCard from "@/components/stripe/free-plan-card";
import PaidPlanCard from "@/components/stripe/paid-plan-card";
import { stripe } from "@/lib/stripe";
import Image from "next/image";

export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_TRAVERX_BUILDER_PRODUCT_ID,
    active: true,
  });
  return (
    <div>
      <HomeHero />
      <div className="flex justify-center items-center relative pt-20">
        <Image
          src={"/assets/preview-light.jpg"}
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted dark:hidden"
        />
        <Image
          src={"/assets/preview-dark.jpg"}
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted hidden dark:block"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>

      <section className="flex justify-center items-center relative flex-col gap-4 pb-20 -mt-12 z-10">
        <h2 className="text-4xl text-foreground text-center">
          {" "}
          Choose what fits you right
        </h2>
        <p className="text-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div
          id="pricing-cards"
          className="flex justify-center gap-4 flex-wrap mt-16"
        >
          <FreePlanCard plan={"STARTER"} />
          {prices.data.reverse().map((card) => (
            <PaidPlanCard key={card.nickname} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
