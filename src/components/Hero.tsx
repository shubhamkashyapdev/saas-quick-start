"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import { ArrowUpRightSquareIcon } from "lucide-react";

export function HomeHero() {
  return (
    <HeroHighlight>
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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Next.js App Router With TRPC & MongoDB Prisma{" "}
        <Link
          className="relative"
          href="https://github.com/shubhamkashyapdev/next-trpc-prisma"
          target="_blank"
        >
          <ArrowUpRightSquareIcon className="inline absolute -top-2 -right-2 z-10 stroke-purple-600" />
          <Highlight className="text-black dark:text-white">
            Starter Template
          </Highlight>
        </Link>{" "}
        To KickStart Your Next Full Stack Application 🚀
      </motion.h1>
    </HeroHighlight>
  );
}
