import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Filipe<span className="text-[#42ffa0]">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex ">
          <Navigation />
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
