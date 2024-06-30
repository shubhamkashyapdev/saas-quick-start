import { FlipWords } from "@/components/ui/flip-words";

export function HeroFlipWords() {
  const words = ["Build", "Scale", "Monetize"];

  return (
    <div className="lex justify-center items-center px-4">
      <div className="sm:text-xl md:text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
        Your SaaS Product Faster with SaaSQuickStart
      </div>
    </div>
  );
}
