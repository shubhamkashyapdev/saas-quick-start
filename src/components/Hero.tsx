"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import { ArrowUpRightSquareIcon } from "lucide-react";
import { HeroFlipWords } from "@/components/home/hero-flip-words";
import LitUpButton from "@/components/ui/lit-up-button";

export function HomeHero() {
  return (
    <div className="relative">
      <HeroHighlight>
        <div className="flex justify-center items-center">
          <HeroFlipWords />
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-4xl mt-6 px-4 md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-snug lg:leading-normal text-center mx-auto "
        >
          Kickstart Your SaaS App Idea with Ease 🚀
        </motion.h1>
        <Link
          href="#pricing-cards"
          className="flex justify-center items-center mt-6"
        >
          <LitUpButton>Get Started</LitUpButton>
        </Link>
      </HeroHighlight>
      <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
    </div>
  );
}
