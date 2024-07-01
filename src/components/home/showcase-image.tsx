import BlurShadowEffect from "@/components/global/blur-shadow-effect";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import Image from "next/image";
import React from "react";

const ShowcaseImage = () => {
  return (
    <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
      <BlurShadowEffect />
      <BorderBeam />
      <Image
        src={"/assets/preview-light.jpg"}
        alt="banner image"
        height={1200}
        width={1200}
        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted dark:hidden w-full h-full"
      />
      <Image
        src={"/assets/preview-dark.jpg"}
        alt="banner image"
        height={1200}
        width={1200}
        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted hidden dark:block w-full h-full"
      />
      <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]"></div>
    </div>
  );
};

export default ShowcaseImage;
