import Logo from "@/components/global/logo";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-6 pt-10 gap-3 border-t-[1px]">
      <Logo />
      <p className="font-medium -mt-1">© 2023 Traverx. All rights reserved.</p>
    </div>
  );
};

export default Footer;
