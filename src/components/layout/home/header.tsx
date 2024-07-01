import Logo from "@/components/global/logo";
import Navbar from "@/components/layout/home/navbar";
import { ModeToggle } from "@/components/layout/mode-toggle";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50 h-16 pt-4">
      <div className="bg-background/40 absolute top-0 left-0 right-0 h-full w-full blur-sm"></div>
      <div className="container relative z-20 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        {/* Navbar */}
        <Navbar />
        {/* Auth */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
