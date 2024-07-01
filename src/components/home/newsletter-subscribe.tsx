import GradientShadowButton from "@/components/ui/gradient-shadow-button";
import React from "react";

const NewsletterSubscribe = () => {
  return (
    <section className="container my-32">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground text-center font-semibold">
        {" "}
        Subscribe to our newsletter
      </h2>
      <div className="flex justify-center items-center mt-2">
        <p className="text-foreground text-center max-w-[55ch] text-sm">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business.
        </p>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center my-4">
        <input
          placeholder="hi@manuarora.in"
          className="rounded-lg border-2 border-neutral-800 focus:ring-3 focus:ring-teal-500  w-full max-w-[600px] relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-3"
          type="text"
        />
        <GradientShadowButton>Subscribe</GradientShadowButton>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
